'use client';

import { useEffect, useRef, useState } from 'react';
import type { Map as MapLibreMap, GeoJSONSource } from 'maplibre-gl';

type Country = { name: string; code: string };
type Feature = { id: number; properties: Record<string, unknown>; geometry: { coordinates: unknown } };
const WORLD: [number, number] = [7, 24], WORLD_ZOOM = 1.45;
const countriesUrl = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';

function bounds(geometry: { coordinates: unknown }): [[number, number], [number, number]] {
  let west = 180, south = 90, east = -180, north = -90;
  const walk = (value: unknown): void => { if (!Array.isArray(value)) return; if (typeof value[0] === 'number' && typeof value[1] === 'number') { west = Math.min(west, value[0]); east = Math.max(east, value[0]); south = Math.min(south, value[1]); north = Math.max(north, value[1]); } else value.forEach(walk); };
  walk(geometry.coordinates); return [[west, south], [east, north]];
}
const nameOf = (feature: Feature) => String(feature.properties.shapeName ?? feature.properties.NAME_1 ?? feature.properties.name ?? 'Sin nombre');
const normalise = (data: { features?: Feature[] }) => (data.features ?? []).map((feature, id) => ({ ...feature, id }));

export default function TravelMap() {
  const element = useRef<HTMLDivElement>(null), mapRef = useRef<MapLibreMap | null>(null), countryCode = useRef(''), version = useRef(0), regionsRef = useRef<Feature[]>([]);
  const [country, setCountry] = useState<Country | null>(null), [regions, setRegions] = useState<Feature[]>([]), [region, setRegion] = useState<string | null>(null), [places, setPlaces] = useState<Feature[]>([]), [ready, setReady] = useState(false);

  const selectRegion = async (item: Feature) => {
    const map = mapRef.current; if (!map || !countryCode.current) return;
    const current = ++version.current, area = bounds(item.geometry); setRegion(nameOf(item)); setPlaces([]);
    (map.getSource('admin-two') as GeoJSONSource)?.setData({ type: 'FeatureCollection', features: [] });
    map.fitBounds(area, { padding: { top: 80, bottom: 70, left: 70, right: 70 }, maxZoom: 9, duration: 800 });
    let response = await fetch(`/api/boundaries/${countryCode.current}?level=ADM3`);
    if (!response.ok) response = await fetch(`/api/boundaries/${countryCode.current}?level=ADM2`);
    if (!response.ok || current !== version.current) return;
    const [sw, ne] = area, data = await response.json() as { features?: Feature[] };
    const local = normalise(data).filter((feature) => { const [a, b] = bounds(feature.geometry); const x = (a[0] + b[0]) / 2, y = (a[1] + b[1]) / 2; return x >= sw[0] && x <= ne[0] && y >= sw[1] && y <= ne[1]; });
    if (current !== version.current) return;
    (map.getSource('admin-two') as GeoJSONSource).setData({ type: 'FeatureCollection', features: local }); setPlaces(local);
  };

  useEffect(() => {
    let map: MapLibreMap, gone = false;
    const boot = async () => {
      const ml = await import('maplibre-gl'); if (!element.current || gone) return;
      ml.setWorkerUrl('/maplibre/maplibre-gl-worker.mjs');
      const key = process.env.NEXT_PUBLIC_MAPTILER_KEY, style = key && key !== 'tu_clave_publica_de_maptiler' ? `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}` : 'https://demotiles.maplibre.org/style.json';
      map = new ml.Map({ container: element.current, style, center: WORLD, zoom: WORLD_ZOOM, minZoom: 1.1, maxZoom: 18 }); map.addControl(new ml.NavigationControl({ showCompass: false }), 'top-right'); mapRef.current = map;
      map.on('load', async () => {
        try {
          const raw = await fetch(countriesUrl).then((r) => r.json()), countries = { ...raw, features: raw.features.map((f: Feature, id: number) => ({ ...f, id })) };
          map.addSource('countries', { type: 'geojson', data: countries }); for (const s of ['country-highlight', 'admin-one', 'admin-two']) map.addSource(s, { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
          map.addLayer({ id: 'countries-fill', type: 'fill', source: 'countries', paint: { 'fill-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#f7b168', '#b7cfbe'], 'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], .42, .24] } });
          map.addLayer({ id: 'countries-line', type: 'line', source: 'countries', paint: { 'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#e85f3d', '#477467'], 'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 2.4, .8] } });
          map.addLayer({ id: 'country-fill', type: 'fill', source: 'country-highlight', paint: { 'fill-color': '#f7b168', 'fill-opacity': .1 } }); map.addLayer({ id: 'country-line', type: 'line', source: 'country-highlight', paint: { 'line-color': '#ec6f4d', 'line-width': 4 } });
          for (const [id, color, bright] of [['admin-one', '#fffaf0', '#e85f3d'], ['admin-two', '#eafffc', '#18877c']] as const) { map.addLayer({ id: `${id}-fill`, type: 'fill', source: id, paint: { 'fill-color': ['case', ['boolean', ['feature-state', 'hover'], false], bright, color], 'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], .3, .05] } }); map.addLayer({ id: `${id}-line`, type: 'line', source: id, paint: { 'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], bright, color], 'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 3, 1.25] } }); }
          const hover = (source: string, layer: string) => { let previous: string | number | null = null; map.on('mousemove', layer, (e) => { const id = e.features?.[0]?.id; if (previous !== null) map.setFeatureState({ source, id: previous }, { hover: false }); if (id !== undefined) map.setFeatureState({ source, id }, { hover: true }); previous = id ?? null; map.getCanvas().style.cursor = 'pointer'; }); map.on('mouseleave', layer, () => { if (previous !== null) map.setFeatureState({ source, id: previous }, { hover: false }); previous = null; map.getCanvas().style.cursor = ''; }); };
          hover('countries', 'countries-fill'); hover('admin-one', 'admin-one-fill'); hover('admin-two', 'admin-two-fill');
          map.on('click', 'countries-fill', async (e) => { const picked = e.features?.[0]; if (!picked) return; const code = String(picked.properties?.ISO_A3 || ''), name = String(picked.properties?.ADMIN || picked.properties?.name || 'Este país'), current = ++version.current; countryCode.current = code; setCountry({ name, code }); setRegions([]); setRegion(null); setPlaces([]); (map.getSource('admin-one') as GeoJSONSource).setData({ type: 'FeatureCollection', features: [] }); (map.getSource('admin-two') as GeoJSONSource).setData({ type: 'FeatureCollection', features: [] }); const countryData = await fetch(`/api/boundaries/${code}`).then((r) => r.ok ? r.json() : null); if (current !== version.current) return; const selected = countryData?.type === 'FeatureCollection' ? countryData.features[0] : JSON.parse(JSON.stringify(picked)); (map.getSource('country-highlight') as GeoJSONSource).setData({ type: 'FeatureCollection', features: [selected] }); map.fitBounds(bounds(selected.geometry), { padding: { top: 80, bottom: 70, left: 70, right: 70 }, maxZoom: 6, duration: 900 }); const divisions = await fetch(`/api/boundaries/${code}?level=ADM1`).then((r) => r.ok ? r.json() : null); if (!divisions || current !== version.current) return; const list = normalise(divisions); regionsRef.current = list; (map.getSource('admin-one') as GeoJSONSource).setData({ type: 'FeatureCollection', features: list }); setRegions(list); });
          map.on('click', 'admin-one-fill', (e) => { const item = regionsRef.current.find((r) => r.id === e.features?.[0]?.id); if (item) void selectRegion(item); }); setReady(true);
        } catch { setReady(true); }
      });
    }; void boot(); return () => { gone = true; map?.remove(); };
  }, []);

  const reset = () => { const map = mapRef.current; if (!map) return; version.current += 1; countryCode.current = ''; regionsRef.current = []; for (const s of ['country-highlight', 'admin-one', 'admin-two']) (map.getSource(s) as GeoJSONSource)?.setData({ type: 'FeatureCollection', features: [] }); setCountry(null); setRegions([]); setRegion(null); setPlaces([]); map.flyTo({ center: WORLD, zoom: WORLD_ZOOM, duration: 900 }); };
  const locate = () => navigator.geolocation?.getCurrentPosition(({ coords }) => mapRef.current?.flyTo({ center: [coords.longitude, coords.latitude], zoom: 10, duration: 900 }));
  return <main className="reise"><section className="map-wrap" aria-label="Mapamundi interactivo"><div ref={element} className="map" /><header className="top"><div className="brand"><b>R</b>reise</div><button className="location" onClick={locate} aria-label="Ir a mi ubicación">◎</button></header><div className={`intro ${country ? 'hidden' : ''}`}><p className="eyebrow">EXPLORA EL MUNDO</p><h1>¿A dónde<br />vamos?</h1><p>Elige un país para descubrir sus rutas.</p></div><div className="bottom-tools"><button className="pill primary" onClick={reset}>◉ &nbsp;Mapamundi</button>{country && <button className="pill" onClick={reset}>↶ &nbsp;Ver todos</button>}</div><div className="notice">{ready ? (country ? 'Pasa el ratón por un borde para resaltarlo' : 'Selecciona un país para enfocarlo') : 'Cargando mapa…'}</div></section><aside className="panel"><header><p className="eyebrow">EXPLORADOR DE RUTAS</p><h2>{country ? country.name : <>Tu próximo<br /><em>recorrido</em></>}</h2></header><p className="panel-copy">{country ? 'Explora sus regiones y localidades.' : 'Cada viaje empieza eligiendo un lugar.'}</p><div className={`selected ${country ? 'active' : ''}`}><span className="symbol">{country ? '⌖' : '⌁'}</span><div><strong>{country?.name ?? 'Elige un país'}</strong><p>{country ? `${regions.length} divisiones principales disponibles.` : 'Haz clic en el mapa para empezar a explorar.'}</p></div></div>{regions.length > 0 && <section className="hierarchy"><p className="list-title">Regiones / comunidades</p>{regions.map((item) => <button className={`list-item ${region === nameOf(item) ? 'selected-item' : ''}`} key={item.id} onClick={() => void selectRegion(item)}>{nameOf(item)}<span>›</span></button>)}</section>}{region && <section className="hierarchy local"><p className="list-title">{region} · localidades</p>{places.length ? places.map((item) => <div className="list-item local-item" key={item.id}>{nameOf(item)}</div>) : <p className="loading-list">Cargando límites locales…</p>}</section>}<p className="status">{country?.code ? `DESTINO · ${country.code}` : 'LISTO PARA EXPLORAR'}</p><footer className="footer"><span>REISE / 2026</span><span>01 — 01</span></footer></aside></main>;
}
