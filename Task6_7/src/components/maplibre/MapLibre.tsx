import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

const MapLibre = () => {
 
    const mapRef = useRef<HTMLDivElement>(null)
    const [map, setMap] = useState<maplibregl.Map>()
    
    useEffect(() => {
        if (!mapRef.current) return;
        const map = new maplibregl.Map({
            container: mapRef.current as HTMLDivElement,
            style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=ELjN45lPd5hxHKYh3mwy',
            center: [85.3205817, 27.708317], // starting position [lng, lat]
            zoom: 1 // starting zoom
        })
         // Add zoom and rotation controls to the map.
         let nav = new maplibregl.NavigationControl();
         map.addControl(nav, 'top-left');
         map.addControl(new maplibregl.FullscreenControl())
        new maplibregl.Marker().setLngLat([85.3205817, 27.708317]).addTo(map)
     
        
      
        
        
          //   map.addSource('vector-tiles', {

          //     type: 'vector',
          //     tiles: [
          //       'https://api.maptiler.com/tiles/countries/{z}/{x}/{y}.pbf?key=ELjN45lPd5hxHKYh3mwy'
          //     ],
          //     minzoom: 6,
          //     maxzoom: 14
          //   });
      
          //   map.addLayer({
          //     id: 'landuse-fill',
          //     source: 'vector-tiles',
          //     'source-layer': 'landuse', // Common source layer name in many vector tile schemas
          //     type: 'fill',
          //     paint: {
          //       'fill-color': 'rgba(0, 255, 0, 0.5)',
          //       'fill-opacity': 0.5
          //     }
          //   });
          //   // Add the POI layer with a more obvious styling
          // map.addLayer({
          //   id: 'points-of-interest',
          //   source: 'vector-tiles',
          //   'source-layer': 'poi', // This is one common name, but it may be different
          //   type: 'circle',
          //   paint: {
          //     'circle-radius': 8,
          //     'circle-color': '#FF0000',
          //     'circle-stroke-color': '#FFFFFF',
          //     'circle-stroke-width': 2
          //   }
          // });

  
        

         
      setMap(map)
        
        return () => map.remove()
    },[])

   
  return (   
      <div className='min-h-screen' ref={mapRef}></div>
  )
}

export default MapLibre