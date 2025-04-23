import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

type BaseLayerStyle = "street" | "street_dark"

const BaselayerSwitcher = () => {
     const [baseLayer, setBaseLayer] = useState<BaseLayerStyle>("street")
        const mapRef = useRef<HTMLDivElement>(null)
        const [map, setMap] = useState<maplibregl.Map>()
        
        const baseStyles: Record<BaseLayerStyle, string> = {
            street: 'https://api.maptiler.com/maps/streets-v2/style.json?key=ELjN45lPd5hxHKYh3mwy',
            street_dark:'https://api.maptiler.com/maps/streets-v2-dark/style.json?key=ELjN45lPd5hxHKYh3mwy'
        }
        useEffect(() => {
            if (!mapRef.current) return;
            const map = new maplibregl.Map({
                container: mapRef.current as HTMLDivElement,
                style: baseStyles[baseLayer],
                center: [85.3205817, 27.708317], // starting position [lng, lat]
                zoom: 1 // starting zoom
            })
             // Add zoom and rotation controls to the map.
             let nav = new maplibregl.NavigationControl();
             map.addControl(nav, 'top-left');
             map.addControl(new maplibregl.FullscreenControl())
            new maplibregl.Marker().setLngLat([85.3205817, 27.708317]).addTo(map)
          
            //  map.on('load', () => {
            //    // ✅ Add a Raster Source and Layer (like a tile service)
            //    map.addSource('satellite-raster', {
            //     type: 'raster',
            //     tiles: [
            //       'https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ELjN45lPd5hxHKYh3mwy'
            //     ],
            //     tileSize: 256,
            //     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            //   });
          
            //   map.addLayer({
            //     id: 'satellite',
            //     type: 'raster',
            //     source: 'satellite-raster',
                
            //   });
    
            //   map.addSource('osm-raster', {
            //     type: 'raster',
            //     tiles: [
            //      'https://api.maptiler.com/maps/streets-v2-dark/256/{z}/{x}/{y}.png?key=ELjN45lPd5hxHKYh3mwy'
            //     ],
            //     tileSize: 256,
            //     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            //   });
          
            //   map.addLayer({
            //     id: 'osm',
            //     type: 'raster',
            //     source: 'osm-raster'
            //   });
             
            
            // })
             
          setMap(map)
            
            return () => map.remove()
        },[baseLayer])
    const baseLayerSwitcher = (e: ChangeEvent<HTMLInputElement>) => {
            setBaseLayer(e.target.value as BaseLayerStyle)
        }
        // useEffect(() => {
        //   console.log(map?.getLayer('osm'))
        // }, [baseLayer])
  return (
    <div className= 'w-full flex justify-between gap-4'>
    <div className='bg-orange-500 h-fit text-white px-4 py-2 rounded-md'>
    <h1 className='text-xl'>Baselayer Switcher</h1>
    <div>
    <div>
        <input
        value='street'
        onChange={baseLayerSwitcher}
        type="radio"
        name="baseLayer" 
        checked={baseLayer === 'street'}/>Street
      </div>
      <div>
        <input
        value='street_dark'
        onChange={baseLayerSwitcher}
        type="radio" 
        name="baseLayer" 
        checked={baseLayer === 'street_dark'}/>Street Dark Mode
      </div>
       <div>
        <input
        value='street_dark'
        onChange={baseLayerSwitcher}
        type="radio" 
        name="baseLayer" 
        checked={baseLayer === 'street_dark'}/>Street Dark Mode
      </div>
    </div>
    </div>
    <div className='min-h-screen w-[1200px]' ref={mapRef}></div>
  </div>
  )
}

export default BaselayerSwitcher