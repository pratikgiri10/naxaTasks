import React, { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
const GeoJson = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const geoJsonData = {
        'type': 'geojson',
        'data': {
            'type': 'FeaturesCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [-121.353637, 40.584978],
                                [-121.284551, 40.584758],
                                [-121.275349, 40.541646],
                                [-121.246768, 40.541017],
                                [-121.251343, 40.423383],
                                [-121.32687, 40.423768],
                                [-121.360619, 40.43479],
                                [-121.363694, 40.409124],
                                [-121.439713, 40.409197],
                                [-121.439711, 40.423791],
                                [-121.572133, 40.423548],
                                [-121.577415, 40.550766],
                                [-121.539486, 40.558107],
                                [-121.520284, 40.572459],
                                [-121.487219, 40.550822],
                                [-121.446951, 40.56319],
                                [-121.370644, 40.563267],
                                [-121.353637, 40.584978]
                            ]
                        ]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-121.415061, 40.506229]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-121.505184, 40.488084]
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-121.354465, 40.488737]
                    }
                },

            ]
        }
    }

    useEffect(() => {
        if(!mapRef.current) return
        const map = new maplibregl.Map({
            container: mapRef.current as HTMLDivElement,
            style: 'https://api.maptiler.com/maps/streets/style.json?key=ELjN45lPd5hxHKYh3mwy',
            center: [-121.403732, 40.492392],
            zoom: 10
        })
        map.addControl(new maplibregl.NavigationControl(), 'top-left')
        map.on('load', () => {
            map.addSource('rio-de-janerio', {
                'type': 'geojson',
                'data': 'https://api.maptiler.com/data/019647e7-c759-7b1f-87a8-11ee814f156c/features.json?key=ELjN45lPd5hxHKYh3mwy'
            })
            map.addLayer({
                'id': 'brazil',
                'type': 'fill',
                'source': 'rio-de-janerio',
                'paint': {
                    'fill-color': '#FFAA01',
                    'fill-opacity': 0.5
                }
            })
            map.addLayer({
                'id': 'brazil-line',
                'type': 'line',
                'source': 'rio-de-janerio',
                'paint': {
                    'line-color': '#00f',
                    'line-width': 2
                }
            })
            map.addSource('national-park',  {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Polygon',
                                'coordinates': [
                                    [
                                        [-121.353637, 40.584978],
                                        [-121.284551, 40.584758],
                                        [-121.275349, 40.541646],
                                        [-121.246768, 40.541017],
                                        [-121.251343, 40.423383],
                                        [-121.32687, 40.423768],
                                        [-121.360619, 40.43479],
                                        [-121.363694, 40.409124],
                                        [-121.439713, 40.409197],
                                        [-121.439711, 40.423791],
                                        [-121.572133, 40.423548],
                                        [-121.577415, 40.550766],
                                        [-121.539486, 40.558107],
                                        [-121.520284, 40.572459],
                                        [-121.487219, 40.550822],
                                        [-121.446951, 40.56319],
                                        [-121.370644, 40.563267],
                                        [-121.353637, 40.584978]
                                    ]
                                ]
                            },
                            properties: null
                        },
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-121.415061, 40.506229]
                            },
                            properties: null
                        },
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-121.505184, 40.488084]
                            },
                            properties: null
                        },
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-121.354465, 40.488737]
                            },
                            properties: null
                        },
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'LineString',
                                'coordinates': [[-121.354465, 40.488737], [-121.505184, 40.488084]]
                            },
                            properties: null
                        }
                    ]
                }
            })
            map.addLayer({
                'id': 'park-boundary',
                'type': 'fill',
                'source': 'national-park',
                'paint': {
                    'fill-color': '#888888',
                    'fill-opacity': 0.4
                },
                'filter': ['==', '$type', 'Polygon']
            });
    
            map.addLayer({
                'id': 'park-volcanoes',
                'type': 'circle',
                'source': 'national-park',
                'paint': {
                    'circle-radius': 6,
                    'circle-color': '#B42222'
                },
                'filter': ['==', '$type', 'Point']
            });
            map.addLayer({
                'id': 'line',
                'type': 'line',
                'source': 'national-park',
                'paint': {
                    'line-color': '#198EC8'
                },
                'filter': ['==', '$type', 'LineString']
            });
            
        })

        return () => map.remove()
    },[])
  return (
    <div className='min-h-screen' ref={mapRef}></div>
  )
}

export default GeoJson