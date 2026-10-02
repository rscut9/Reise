module.exports = [
"[project]/components/travel-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravelMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.7_@babel+core@7.2_269ee813736a388ced6d04715d5af9cc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const WORLD = [
    7,
    24
];
const WORLD_ZOOM = 1.45;
const countriesUrl = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';
function geometryBounds(geometry) {
    let west = 180, south = 90, east = -180, north = -90;
    const visit = (value)=>{
        if (!Array.isArray(value)) return;
        if (typeof value[0] === 'number' && typeof value[1] === 'number') {
            west = Math.min(west, value[0]);
            east = Math.max(east, value[0]);
            south = Math.min(south, value[1]);
            north = Math.max(north, value[1]);
            return;
        }
        value.forEach(visit);
    };
    visit(geometry.coordinates);
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
function TravelMap() {
    const mapElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectionRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const worldCountries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeCountryCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authMessage, setAuthMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let map;
        let disposed = false;
        async function boot() {
            const maplibregl = await __turbopack_context__.A("[project]/node_modules/.pnpm/maplibre-gl@6.11.2/node_modules/maplibre-gl/dist/maplibre-gl.mjs [app-ssr] (ecmascript, async loader)");
            if (!mapElement.current || disposed) return;
            maplibregl.setWorkerUrl('/maplibre/maplibre-gl-worker.mjs');
            const key = ("TURBOPACK compile-time value", "FjA7DYktSxlr1YyjjdL3");
            const style = ("TURBOPACK compile-time truthy", 1) ? `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}` : "TURBOPACK unreachable";
            map = new maplibregl.Map({
                container: mapElement.current,
                style,
                center: WORLD,
                zoom: WORLD_ZOOM,
                minZoom: 1.1,
                maxZoom: 18
            });
            map.addControl(new maplibregl.NavigationControl({
                showCompass: false
            }), 'top-right');
            mapRef.current = map;
            map.on('load', async ()=>{
                try {
                    const response = await fetch(countriesUrl);
                    if (!response.ok) throw new Error();
                    const rawData = await response.json();
                    const data = {
                        ...rawData,
                        features: rawData.features.map((item, index)=>({
                                ...item,
                                id: index
                            }))
                    };
                    worldCountries.current = data;
                    map.addSource('countries', {
                        type: 'geojson',
                        data
                    });
                    map.addSource('country-highlight', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: []
                        }
                    });
                    map.addSource('admin-one', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: []
                        }
                    });
                    map.addSource('admin-two', {
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
                                0.42,
                                0.24
                            ]
                        }
                    });
                    map.addLayer({
                        id: 'countries-outline',
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
                                0.8
                            ],
                            'line-opacity': 0.9
                        }
                    });
                    map.addLayer({
                        id: 'country-highlight-fill',
                        type: 'fill',
                        source: 'country-highlight',
                        paint: {
                            'fill-color': '#f7b168',
                            'fill-opacity': 0.1
                        }
                    });
                    map.addLayer({
                        id: 'country-highlight-line',
                        type: 'line',
                        source: 'country-highlight',
                        paint: {
                            'line-color': '#ec6f4d',
                            'line-width': 4,
                            'line-opacity': 1
                        }
                    });
                    map.addLayer({
                        id: 'admin-one-fill',
                        type: 'fill',
                        source: 'admin-one',
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
                                '#f7d7ab'
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
                                0.32,
                                0.08
                            ]
                        }
                    });
                    map.addLayer({
                        id: 'admin-one-line',
                        type: 'line',
                        source: 'admin-one',
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
                                '#fffaf0'
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
                    map.addLayer({
                        id: 'admin-two-fill',
                        type: 'fill',
                        source: 'admin-two',
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
                                '#8ed4cd',
                                '#c7e8e2'
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
                                0.36,
                                0.06
                            ]
                        }
                    });
                    map.addLayer({
                        id: 'admin-two-line',
                        type: 'line',
                        source: 'admin-two',
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
                                '#18877c',
                                '#eafffc'
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
                                2.5,
                                1
                            ]
                        }
                    });
                    map.on('mouseenter', 'countries-fill', ()=>map.getCanvas().style.cursor = 'pointer');
                    map.on('mouseleave', 'countries-fill', ()=>map.getCanvas().style.cursor = '');
                    let hoveredCountry = null;
                    map.on('mousemove', 'countries-fill', (event)=>{
                        const id = event.features?.[0]?.id;
                        if (hoveredCountry !== null) map.setFeatureState({
                            source: 'countries',
                            id: hoveredCountry
                        }, {
                            hover: false
                        });
                        if (id !== undefined) map.setFeatureState({
                            source: 'countries',
                            id
                        }, {
                            hover: true
                        });
                        hoveredCountry = id ?? null;
                    });
                    map.on('mouseleave', 'countries-fill', ()=>{
                        if (hoveredCountry !== null) map.setFeatureState({
                            source: 'countries',
                            id: hoveredCountry
                        }, {
                            hover: false
                        });
                        hoveredCountry = null;
                    });
                    map.on('click', 'countries-fill', async (event)=>{
                        const feature = event.features?.[0];
                        if (!feature) return;
                        const name = String(feature.properties?.ADMIN || feature.properties?.name || 'Este país');
                        const code = String(feature.properties?.ISO_A3 || '');
                        setCountry({
                            name,
                            code
                        });
                        activeCountryCode.current = code;
                        const requestId = ++selectionRequest.current;
                        // MapLibre entrega una instancia interna; el worker solo acepta GeoJSON plano.
                        let selectedFeature = JSON.parse(JSON.stringify(feature));
                        try {
                            const boundary = await fetch(`/api/boundaries/${code}`).then((response)=>{
                                if (!response.ok) throw new Error('Boundary unavailable');
                                return response.json();
                            });
                            if (requestId !== selectionRequest.current) return;
                            selectedFeature = boundary.type === 'FeatureCollection' ? boundary.features[0] : boundary;
                        } catch  {
                        // Si no hay frontera detallada disponible, se utiliza la frontera inicial.
                        }
                        if (requestId !== selectionRequest.current) return;
                        map.getSource('country-highlight').setData({
                            type: 'FeatureCollection',
                            features: [
                                selectedFeature
                            ]
                        });
                        const divisions = await fetch(`/api/boundaries/${code}?level=ADM1`).then((response)=>response.ok ? response.json() : null);
                        if (divisions && requestId === selectionRequest.current) {
                            const features = divisions.features?.map((item, index)=>({
                                    ...item,
                                    id: index
                                })) ?? [];
                            map.getSource('admin-one').setData({
                                type: 'FeatureCollection',
                                features
                            });
                        }
                        const bounds = geometryBounds(selectedFeature.geometry);
                        map.fitBounds(bounds, {
                            padding: {
                                top: 80,
                                bottom: 70,
                                left: 70,
                                right: 70
                            },
                            maxZoom: 6,
                            duration: 1100
                        });
                    });
                    let hoveredAdminOne = null;
                    const setAdminOneHover = (id)=>{
                        if (hoveredAdminOne !== null) map.setFeatureState({
                            source: 'admin-one',
                            id: hoveredAdminOne
                        }, {
                            hover: false
                        });
                        if (id !== undefined) map.setFeatureState({
                            source: 'admin-one',
                            id
                        }, {
                            hover: true
                        });
                        hoveredAdminOne = id ?? null;
                    };
                    map.on('mousemove', 'admin-one-fill', (event)=>{
                        map.getCanvas().style.cursor = 'pointer';
                        setAdminOneHover(event.features?.[0]?.id);
                    });
                    map.on('mouseleave', 'admin-one-fill', ()=>{
                        map.getCanvas().style.cursor = '';
                        setAdminOneHover(undefined);
                    });
                    let hoveredAdminTwo = null;
                    const setAdminTwoHover = (id)=>{
                        if (hoveredAdminTwo !== null) map.setFeatureState({
                            source: 'admin-two',
                            id: hoveredAdminTwo
                        }, {
                            hover: false
                        });
                        if (id !== undefined) map.setFeatureState({
                            source: 'admin-two',
                            id
                        }, {
                            hover: true
                        });
                        hoveredAdminTwo = id ?? null;
                    };
                    map.on('mousemove', 'admin-two-fill', (event)=>{
                        map.getCanvas().style.cursor = 'pointer';
                        setAdminTwoHover(event.features?.[0]?.id);
                    });
                    map.on('mouseleave', 'admin-two-fill', ()=>{
                        map.getCanvas().style.cursor = '';
                        setAdminTwoHover(undefined);
                    });
                    map.on('click', 'admin-one-fill', async (event)=>{
                        const region = event.features?.[0];
                        if (!region || !activeCountryCode.current) return;
                        const regionBounds = geometryBounds(region.geometry);
                        const subdivisions = await fetch(`/api/boundaries/${activeCountryCode.current}?level=ADM2`).then((response)=>response.ok ? response.json() : null);
                        if (!subdivisions) return;
                        const [southWest, northEast] = regionBounds;
                        const features = (subdivisions.features ?? []).filter((item)=>{
                            const [candidateSouthWest, candidateNorthEast] = geometryBounds(item.geometry);
                            const longitude = (candidateSouthWest[0] + candidateNorthEast[0]) / 2;
                            const latitude = (candidateSouthWest[1] + candidateNorthEast[1]) / 2;
                            return longitude >= southWest[0] && longitude <= northEast[0] && latitude >= southWest[1] && latitude <= northEast[1];
                        }).map((item, index)=>({
                                ...item,
                                id: index
                            }));
                        map.getSource('admin-two').setData({
                            type: 'FeatureCollection',
                            features
                        });
                        map.fitBounds(regionBounds, {
                            padding: {
                                top: 80,
                                bottom: 70,
                                left: 70,
                                right: 70
                            },
                            maxZoom: 9,
                            duration: 850
                        });
                    });
                    setReady(true);
                } catch  {
                    setReady(true);
                }
            });
        }
        boot();
        return ()=>{
            disposed = true;
            map?.remove();
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"]) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data })=>setUserId(data.user?.id ?? null));
        const { data: listener } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange((_event, session)=>setUserId(session?.user.id ?? null));
        return ()=>listener.subscription.unsubscribe();
    }, []);
    const reset = async ()=>{
        const map = mapRef.current;
        if (!map) return;
        selectionRequest.current += 1;
        activeCountryCode.current = '';
        map.getSource('country-highlight')?.setData({
            type: 'FeatureCollection',
            features: []
        });
        map.getSource('admin-one')?.setData({
            type: 'FeatureCollection',
            features: []
        });
        map.getSource('admin-two')?.setData({
            type: 'FeatureCollection',
            features: []
        });
        map.flyTo({
            center: WORLD,
            zoom: WORLD_ZOOM,
            duration: 1000
        });
        setCountry(null);
    };
    const locate = ()=>navigator.geolocation?.getCurrentPosition(({ coords })=>{
            mapRef.current?.flyTo({
                center: [
                    coords.longitude,
                    coords.latitude
                ],
                zoom: 10,
                duration: 900
            });
        });
    const requestAccess = async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"] || !email) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        setAuthMessage(error ? 'No hemos podido enviar el enlace. Revisa el correo.' : 'Revisa tu correo para entrar en Reise.');
    };
    const saveTrip = async ()=>{
        if (!country) return;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"] || !userId) {
            setAuthMessage('Inicia sesión para guardar este viaje.');
            return;
        }
        setSaving(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('trips').insert({
            owner_id: userId,
            title: `Viaje a ${country.name}`,
            country_code: country.code || 'XX'
        });
        setSaving(false);
        setAuthMessage(error ? 'No se ha podido guardar. ¿Ya ejecutaste schema.sql en Supabase?' : `${country.name} se ha guardado en tus viajes.`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "reise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "map-wrap",
                "aria-label": "Mapamundi interactivo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: mapElement,
                        className: "map"
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 191,
                        columnNumber: 70
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
                                        lineNumber: 192,
                                        columnNumber: 54
                                    }, this),
                                    "reise"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 192,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "location",
                                onClick: locate,
                                "aria-label": "Ir a mi ubicación",
                                children: "◎"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 192,
                                columnNumber: 73
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 192,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `intro ${country ? 'hidden' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "EXPLORA EL MUNDO"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 193,
                                columnNumber: 59
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: [
                                    "¿A dónde",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 193,
                                        columnNumber: 114
                                    }, this),
                                    "vamos?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 193,
                                columnNumber: 102
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Elige un país para descubrir sus rutas."
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 193,
                                columnNumber: 131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 193,
                        columnNumber: 7
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
                                lineNumber: 194,
                                columnNumber: 37
                            }, this),
                            country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pill",
                                onClick: reset,
                                children: "↶  Ver todos"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 194,
                                columnNumber: 124
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 194,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notice",
                        children: ready ? country ? 'Acércate para ver carreteras y caminos' : 'Selecciona un país para enfocarlo' : 'Cargando mapa…'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 195,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/travel-map.tsx",
                lineNumber: 191,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "PLANIFICA SIN PRISA"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 197,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Tu próximo",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 197,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "recorrido"
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 197,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 197,
                                columnNumber: 84
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 197,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "panel-copy",
                        children: "Cada viaje empieza eligiendo un lugar."
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 197,
                        columnNumber: 136
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `selected ${country ? 'active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "symbol",
                                children: country ? '⌖' : '⌁'
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 198,
                                columnNumber: 62
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: country?.name ?? 'Elige un país'
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 198,
                                        columnNumber: 120
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: country ? 'Seleccionado. Acércate para explorar sus carreteras y crear una ruta.' : 'Haz clic en el mapa para empezar a explorar.'
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 198,
                                        columnNumber: 171
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 198,
                                columnNumber: 115
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 198,
                        columnNumber: 7
                    }, this),
                    country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "save",
                        onClick: saveTrip,
                        disabled: saving,
                        children: saving ? 'Guardando…' : 'Guardar en mis viajes'
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 199,
                        columnNumber: 19
                    }, this),
                    !userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "access",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                children: "Guarda tus rutas"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 200,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "email",
                                        type: "email",
                                        value: email,
                                        onChange: (event)=>setEmail(event.target.value),
                                        placeholder: "tu@email.com"
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 200,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: requestAccess,
                                        children: "Entrar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/travel-map.tsx",
                                        lineNumber: 200,
                                        columnNumber: 220
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 200,
                                columnNumber: 90
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 200,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "status",
                        children: authMessage || (country?.code ? `DESTINO · ${country.code}` : 'LISTO PARA EXPLORAR')
                    }, void 0, false, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 201,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "REISE / 2026"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 201,
                                columnNumber: 146
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$7_$40$babel$2b$core$40$7$2e$2_269ee813736a388ced6d04715d5af9cc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "01 — 01"
                            }, void 0, false, {
                                fileName: "[project]/components/travel-map.tsx",
                                lineNumber: 201,
                                columnNumber: 171
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/travel-map.tsx",
                        lineNumber: 201,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/travel-map.tsx",
                lineNumber: 197,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/travel-map.tsx",
        lineNumber: 190,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$117$2e$2$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.117.2/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const url = ("TURBOPACK compile-time value", "https://naumfeqqrmbfgofckirg.supabase.co");
const key = ("TURBOPACK compile-time value", "sb_publishable_BckbOor80AUiMnmFQiep8A_VoiR-bu5");
const supabase = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$117$2e$2$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, key) : "TURBOPACK unreachable";
}),
];

//# sourceMappingURL=_1lexm-s._.js.map