module.exports = [
"[project]/components/travel-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravelMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
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
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null), countryCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(''), version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0), regionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [regions, setRegions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [places, setPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let map, gone = false;
        const boot = async ()=>{
            const ml = await __turbopack_context__.A("[project]/node_modules/.pnpm/maplibre-gl@6.11.2/node_modules/maplibre-gl/dist/maplibre-gl.mjs [app-ssr] (ecmascript, async loader)");
            if (!element.current || gone) return;
            ml.setWorkerUrl('/maplibre/maplibre-gl-worker.mjs');
            const key = process.env.NEXT_PUBLIC_MAPTILER_KEY, style = key && key !== 'tu_clave_publica_de_maptiler' ? `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}` : 'https://demotiles.maplibre.org/style.json';
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
            map.on('load', async ()=>{
                try {
                    const raw = await fetch(countriesUrl).then((r)=>r.json()), countries = {
                        ...raw,
                        features: raw.features.map((f, id)=>({
                                ...f,
                                id
                            }))
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
                    const hover = (source, layer)=>{
                        let previous = null;
                        map.on('mousemove', layer, (e)=>{
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
                        });
                        map.on('mouseleave', layer, ()=>{
                            if (previous !== null) map.setFeatureState({
                                source,
                                id: previous
                            }, {
                                hover: false
                            });
                            previous = null;
                            map.getCanvas().style.cursor = '';
                        });
                    };
                    hover('countries', 'countries-fill');
                    hover('admin-one', 'admin-one-fill');
                    hover('admin-two', 'admin-two-fill');
                    map.on('click', 'countries-fill', async (e)=>{
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
                        const countryData = await fetch(`/api/boundaries/${code}`).then((r)=>r.ok ? r.json() : null);
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
                        const divisions = await fetch(`/api/boundaries/${code}?level=ADM1`).then((r)=>r.ok ? r.json() : null);
                        if (!divisions || current !== version.current) return;
                        const list = normalise(divisions);
                        regionsRef.current = list;
                        map.getSource('admin-one').setData({
                            type: 'FeatureCollection',
                            features: list
                        });
                        setRegions(list);
                    });
                    map.on('click', 'admin-one-fill', (e)=>{
                        const item = regionsRef.current.find((r)=>r.id === e.features?.[0]?.id);
                        if (item) void selectRegion(item);
                    });
                    setReady(true);
                } catch  {
                    setReady(true);
                }
            });
        };
        void boot();
        return ()=>{
            gone = true;
            map?.remove();
        };
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "reise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "map-wrap",
                "aria-label": "Mapamundi interactivo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: element,
                        className: "map"
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `intro ${country ? 'hidden' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EXPLORA EL MUNDO"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 350
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "¿A dónde",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bottom-tools",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill primary",
                                onClick: reset,
                                children: "◉  Mapamundi"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 504
                            }, this),
                            country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EXPLORADOR DE RUTAS"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 861
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: country ? country.name : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Tu próximo",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/travel-map.tsx",
                                            lineNumber: 63,
                                            columnNumber: 949
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "panel-copy",
                        children: country ? 'Explora sus regiones y localidades.' : 'Cada viaje empieza eligiendo un lugar.'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 991
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `selected ${country ? 'active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "symbol",
                                children: country ? '⌖' : '⌁'
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1168
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: country?.name ?? 'Elige un país'
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 63,
                                        columnNumber: 1226
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    regions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hierarchy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "list-title",
                                children: "Regiones / comunidades"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 1466
                            }, this),
                            regions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `list-item ${region === nameOf(item) ? 'selected-item' : ''}`,
                                    onClick: ()=>void selectRegion(item),
                                    children: [
                                        nameOf(item),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hierarchy local",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            places.length ? places.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "list-item local-item",
                                    children: nameOf(item)
                                }, item.id, false, {
                                    fileName: "[project]/components/travel-map.tsx",
                                    lineNumber: 63,
                                    columnNumber: 1865
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "status",
                        children: country?.code ? `DESTINO · ${country.code}` : 'LISTO PARA EXPLORAR'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 63,
                        columnNumber: 2010
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "REISE / 2026"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 63,
                                columnNumber: 2132
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_1nj4cju._.js.map