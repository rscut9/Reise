(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/travel-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravelMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const WORLD = [
    7,
    24
], WORLD_ZOOM = 1.45;
const countriesUrl = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';
function bounds(geometry) {
    let west = 180, south = 90, east = -180, north = -90;
    const walk = (value)=>{
        if (!Array.isArray(value)) return;
        if (typeof value[0] === 'number' && typeof value[1] === 'number') {
            west = Math.min(west, value[0]);
            east = Math.max(east, value[0]);
            south = Math.min(south, value[1]);
            north = Math.max(north, value[1]);
        } else value.forEach(walk);
    };
    walk(geometry.coordinates);
    return [
        [
            west,
            south
        ],
        [
            east,
            north
        ]
    ];
}
const nameOf = (feature)=>String(feature.properties.shapeName ?? feature.properties.NAME_1 ?? feature.properties.name ?? 'Sin nombre');
const normalise = (data)=>(data.features ?? []).map((feature, id)=>({
            ...feature,
            id
        }));
function TravelMap() {
    _s();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), countryCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(''), version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0), regionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [regions, setRegions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), [places, setPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selectRegion = async (item)=>{
        const map = mapRef.current;
        if (!map || !countryCode.current) return;
        const current = ++version.current, area = bounds(item.geometry);
        setRegion(nameOf(item));
        setPlaces([]);
        map.getSource('admin-two')?.setData({
            type: 'FeatureCollection',
            features: []
        });
        map.fitBounds(area, {
            padding: {
                top: 80,
                bottom: 70,
                left: 70,
                right: 70
            },
            maxZoom: 9,
            duration: 800
        });
        let response = await fetch(`/api/boundaries/${countryCode.current}?level=ADM3`);
        if (!response.ok) response = await fetch(`/api/boundaries/${countryCode.current}?level=ADM2`);
        if (!response.ok || current !== version.current) return;
        const [sw, ne] = area, data = await response.json();
        const local = normalise(data).filter((feature)=>{
            const [a, b] = bounds(feature.geometry);
            const x = (a[0] + b[0]) / 2, y = (a[1] + b[1]) / 2;
            return x >= sw[0] && x <= ne[0] && y >= sw[1] && y <= ne[1];
        });
        if (current !== version.current) return;
        map.getSource('admin-two').setData({
            type: 'FeatureCollection',
            features: local
        });
        setPlaces(local);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TravelMap.useEffect": ()=>{
            let map, gone = false;
            const boot = {
                "TravelMap.useEffect.boot": async ()=>{
                    const ml = await __turbopack_context__.A("[project]/node_modules/.pnpm/maplibre-gl@6.11.2/node_modules/maplibre-gl/dist/maplibre-gl.mjs [app-client] (ecmascript, async loader)");
                    if (!element.current || gone) return;
                    ml.setWorkerUrl('/maplibre/maplibre-gl-worker.mjs');
                    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_MAPTILER_KEY, style = key && key !== 'tu_clave_publica_de_maptiler' ? `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}` : 'https://demotiles.maplibre.org/style.json';
                    map = new ml.Map({
                        container: element.current,
                        style,
                        center: WORLD,
                        zoom: WORLD_ZOOM,
                        minZoom: 1.1,
                        maxZoom: 18
                    });
                    map.addControl(new ml.NavigationControl({
                        showCompass: false
                    }), 'top-right');
                    mapRef.current = map;
                    map.on('load', {
                        "TravelMap.useEffect.boot": async ()=>{
                            try {
                                const raw = await fetch(countriesUrl).then({
                                    "TravelMap.useEffect.boot": (r)=>r.json()
                                }["TravelMap.useEffect.boot"]), countries = {
                                    ...raw,
                                    features: raw.features.map({
                                        "TravelMap.useEffect.boot": (f, id)=>({
                                                ...f,
                                                id
                                            })
                                    }["TravelMap.useEffect.boot"])
                                };
                                map.addSource('countries', {
                                    type: 'geojson',
                                    data: countries
                                });
                                for (const s of [
                                    'country-highlight',
                                    'admin-one',
                                    'admin-two'
                                ])map.addSource(s, {
                                    type: 'geojson',
                                    data: {
                                        type: 'FeatureCollection',
                                        features: []
                                    }
                                });
                                map.addLayer({
                                    id: 'countries-fill',
                                    type: 'fill',
                                    source: 'countries',
                                    paint: {
                                        'fill-color': [
                                            'case',
                                            [
                                                'boolean',
                                                [
                                                    'feature-state',
                                                    'hover'
                                                ],
                                                false
                                            ],
                                            '#f7b168',
                                            '#b7cfbe'
                                        ],
                                        'fill-opacity': [
                                            'case',
                                            [
                                                'boolean',
                                                [
                                                    'feature-state',
                                                    'hover'
                                                ],
                                                false
                                            ],
                                            .42,
                                            .24
                                        ]
                                    }
                                });
                                map.addLayer({
                                    id: 'countries-line',
                                    type: 'line',
                                    source: 'countries',
                                    paint: {
                                        'line-color': [
                                            'case',
                                            [
                                                'boolean',
                                                [
                                                    'feature-state',
                                                    'hover'
                                                ],
                                                false
                                            ],
                                            '#e85f3d',
                                            '#477467'
                                        ],
                                        'line-width': [
                                            'case',
                                            [
                                                'boolean',
                                                [
                                                    'feature-state',
                                                    'hover'
                                                ],
                                                false
                                            ],
                                            2.4,
                                            .8
                                        ]
                                    }
                                });
                                map.addLayer({
                                    id: 'country-fill',
                                    type: 'fill',
                                    source: 'country-highlight',
                                    paint: {
                                        'fill-color': '#f7b168',
                                        'fill-opacity': .1
                                    }
                                });
                                map.addLayer({
                                    id: 'country-line',
                                    type: 'line',
                                    source: 'country-highlight',
                                    paint: {
                                        'line-color': '#ec6f4d',
                                        'line-width': 4
                                    }
                                });
                                for (const [id, color, bright] of [
                                    [
                                        'admin-one',
                                        '#fffaf0',
                                        '#e85f3d'
                                    ],
                                    [
                                        'admin-two',
                                        '#eafffc',
                                        '#18877c'
                                    ]
                                ]){
                                    map.addLayer({
                                        id: `${id}-fill`,
                                        type: 'fill',
                                        source: id,
                                        paint: {
                                            'fill-color': [
                                                'case',
                                                [
                                                    'boolean',
                                                    [
                                                        'feature-state',
                                                        'hover'
                                                    ],
                                                    false
                                                ],
                                                bright,
                                                color
                                            ],
                                            'fill-opacity': [
                                                'case',
                                                [
                                                    'boolean',
                                                    [
                                                        'feature-state',
                                                        'hover'
                                                    ],
                                                    false
                                                ],
                                                .3,
                                                .05
                                            ]
                                        }
                                    });
                                    map.addLayer({
                                        id: `${id}-line`,
                                        type: 'line',
                                        source: id,
                                        paint: {
                                            'line-color': [
                                                'case',
                                                [
                                                    'boolean',
                                                    [
                                                        'feature-state',
                                                        'hover'
                                                    ],
                                                    false
                                                ],
                                                bright,
                                                color
                                            ],
                                            'line-width': [
                                                'case',
                                                [
                                                    'boolean',
                                                    [
                                                        'feature-state',
                                                        'hover'
                                                    ],
                                                    false
                                                ],
                                                3,
                                                1.25
                                            ]
                                        }
                                    });
                                }
                                const hover = {
                                    "TravelMap.useEffect.boot.hover": (source, layer)=>{
                                        let previous = null;
                                        map.on('mousemove', layer, {
                                            "TravelMap.useEffect.boot.hover": (e)=>{
                                                const id = e.features?.[0]?.id;
                                                if (previous !== null) map.setFeatureState({
                                                    source,
                                                    id: previous
                                                }, {
                                                    hover: false
                                                });
                                                if (id !== undefined) map.setFeatureState({
                                                    source,
                                                    id
                                                }, {
                                                    hover: true
                                                });
                                                previous = id ?? null;
                                                map.getCanvas().style.cursor = 'pointer';
                                            }
                                        }["TravelMap.useEffect.boot.hover"]);
                                        map.on('mouseleave', layer, {
                                            "TravelMap.useEffect.boot.hover": ()=>{
                                                if (previous !== null) map.setFeatureState({
                                                    source,
                                                    id: previous
                                                }, {
                                                    hover: false
                                                });
                                                previous = null;
                                                map.getCanvas().style.cursor = '';
                                            }
                                        }["TravelMap.useEffect.boot.hover"]);
                                    }
                                }["TravelMap.useEffect.boot.hover"];
                                hover('countries', 'countries-fill');
                                hover('admin-one', 'admin-one-fill');
                                hover('admin-two', 'admin-two-fill');
                                map.on('click', 'countries-fill', {
                                    "TravelMap.useEffect.boot": async (e)=>{
                                        const picked = e.features?.[0];
                                        if (!picked) return;
                                        const code = String(picked.properties?.ISO_A3 || ''), name = String(picked.properties?.ADMIN || picked.properties?.name || 'Este país'), current = ++version.current;
                                        countryCode.current = code;
                                        setCountry({
                                            name,
                                            code
                                        });
                                        setRegions([]);
                                        setRegion(null);
                                        setPlaces([]);
                                        map.getSource('admin-one').setData({
                                            type: 'FeatureCollection',
                                            features: []
                                        });
                                        map.getSource('admin-two').setData({
                                            type: 'FeatureCollection',
                                            features: []
                                        });
                                        const countryData = await fetch(`/api/boundaries/${code}`).then({
                                            "TravelMap.useEffect.boot": (r)=>r.ok ? r.json() : null
                                        }["TravelMap.useEffect.boot"]);
                                        if (current !== version.current) return;
                                        const selected = countryData?.type === 'FeatureCollection' ? countryData.features[0] : JSON.parse(JSON.stringify(picked));
                                        map.getSource('country-highlight').setData({
                                            type: 'FeatureCollection',
                                            features: [
                                                selected
                                            ]
                                        });
                                        map.fitBounds(bounds(selected.geometry), {
                                            padding: {
                                                top: 80,
                                                bottom: 70,
                                                left: 70,
                                                right: 70
                                            },
                                            maxZoom: 6,
                                            duration: 900
                                        });
                                        const divisions = await fetch(`/api/boundaries/${code}?level=ADM1`).then({
                                            "TravelMap.useEffect.boot": (r)=>r.ok ? r.json() : null
                                        }["TravelMap.useEffect.boot"]);
                                        if (!divisions || current !== version.current) return;
                                        const list = normalise(divisions);
                                        regionsRef.current = list;
                                        map.getSource('admin-one').setData({
                                            type: 'FeatureCollection',
                                            features: list
                                        });
                                        setRegions(list);
                                    }
                                }["TravelMap.useEffect.boot"]);
                                map.on('click', 'admin-one-fill', {
                                    "TravelMap.useEffect.boot": (e)=>{
                                        const item = regionsRef.current.find({
                                            "TravelMap.useEffect.boot.item": (r)=>r.id === e.features?.[0]?.id
                                        }["TravelMap.useEffect.boot.item"]);
                                        if (item) void selectRegion(item);
                                    }
                                }["TravelMap.useEffect.boot"]);
                                setReady(true);
                            } catch  {
                                setReady(true);
                            }
                        }
                    }["TravelMap.useEffect.boot"]);
                }
            }["TravelMap.useEffect.boot"];
            void boot();
            return ({
                "TravelMap.useEffect": ()=>{
                    gone = true;
                    map?.remove();
                }
            })["TravelMap.useEffect"];
        }
    }["TravelMap.useEffect"], []);
    const reset = ()=>{
        const map = mapRef.current;
        if (!map) return;
        version.current += 1;
        countryCode.current = '';
        regionsRef.current = [];
        for (const s of [
            'country-highlight',
            'admin-one',
            'admin-two'
        ])map.getSource(s)?.setData({
            type: 'FeatureCollection',
            features: []
        });
        setCountry(null);
        setRegions([]);
        setRegion(null);
        setPlaces([]);
        map.flyTo({
            center: WORLD,
            zoom: WORLD_ZOOM,
            duration: 900
        });
    };
    const locate = ()=>navigator.geolocation?.getCurrentPosition(({ coords })=>mapRef.current?.flyTo({
                center: [
                    coords.longitude,
                    coords.latitude
                ],
                zoom: 10,
                duration: 900
            }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "reise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "map-wrap",
                "aria-label": "Mapamundi interactivo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: element,
                        className: "map"
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "R"
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 63,
                                        columnNumber: 183
                                    }, this),
                                    "reise"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 160
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "location",
                                onClick: locate,
                                "aria-label": "Ir a mi ubicación",
                                children: "◎"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 202
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 136
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `intro ${country ? 'hidden' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EXPLORA EL MUNDO"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 350
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "¿A dónde",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 63,
                                        columnNumber: 405
                                    }, this),
                                    "vamos?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 393
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Elige un país para descubrir sus rutas."
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 422
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 298
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bottom-tools",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill primary",
                                onClick: reset,
                                children: "◉  Mapamundi"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 504
                            }, this),
                            country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill",
                                onClick: reset,
                                children: "↶  Ver todos"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 591
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 474
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notice",
                        children: ready ? country ? 'Pasa el ratón por un borde para resaltarlo' : 'Selecciona un país para enfocarlo' : 'Cargando mapa…'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 665
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/travel-map.tsx",
                lineNumber: 63,
                columnNumber: 34
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EXPLORADOR DE RUTAS"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 861
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: country ? country.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Tu próximo",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/travel-map.tsx",
                                            lineNumber: 63,
                                            columnNumber: 949
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "recorrido"
                                        }, void 0, false, {
                                            fileName: "[project]/components/travel-map.tsx",
                                            lineNumber: 63,
                                            columnNumber: 955
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/travel-map.tsx",
                                    lineNumber: 63,
                                    columnNumber: 937
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 907
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 853
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "panel-copy",
                        children: country ? 'Explora sus regiones y localidades.' : 'Cada viaje empieza eligiendo un lugar.'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 991
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `selected ${country ? 'active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "symbol",
                                children: country ? '⌖' : '⌁'
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: country?.name ?? 'Elige un país'
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 63,
                                        columnNumber: 1226
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: country ? `${regions.length} divisiones principales disponibles.` : 'Haz clic en el mapa para empezar a explorar.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 63,
                                        columnNumber: 1277
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1221
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 1113
                    }, this),
                    regions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hierarchy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "list-title",
                                children: "Regiones / comunidades"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1466
                            }, this),
                            regions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `list-item ${region === nameOf(item) ? 'selected-item' : ''}`,
                                    onClick: ()=>void selectRegion(item),
                                    children: [
                                        nameOf(item),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/components/travel-map.tsx",
                                            lineNumber: 63,
                                            columnNumber: 1691
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/components/travel-map.tsx",
                                    lineNumber: 63,
                                    columnNumber: 1541
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 1435
                    }, this),
                    region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hierarchy local",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "list-title",
                                children: [
                                    region,
                                    " · localidades"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1775
                            }, this),
                            places.length ? places.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "list-item local-item",
                                    children: nameOf(item)
                                }, item.id, false, {
                                    fileName: "[project]/components/travel-map.tsx",
                                    lineNumber: 63,
                                    columnNumber: 1865
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "loading-list",
                                children: "Cargando límites locales…"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1941
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 1738
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "status",
                        children: country?.code ? `DESTINO · ${country.code}` : 'LISTO PARA EXPLORAR'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 2010
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "REISE / 2026"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 2132
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "01 — 01"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 2157
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 2105
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/travel-map.tsx",
                lineNumber: 63,
                columnNumber: 828
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/travel-map.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_s(TravelMap, "v0aMyENU6Teu/duKTAqo2YaBBH8=");
_c = TravelMap;
var _c;
__turbopack_context__.k.register(_c, "TravelMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_11gx6eu._.js.map