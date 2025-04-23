import Map from 'ol/Map';


import View from 'ol/View';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Link from 'ol/interaction/Link';
import FullScreen from 'ol/control/FullScreen.js';
import {defaults as defaultControls} from 'ol/control/defaults.js';
import { OSM, StadiaMaps, Vector } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import LayerGroup from 'ol/layer/Group';
import { LineString, MultiPoint, Point, Polygon } from 'ol/geom';
import { Feature } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle'
import { fromLonLat } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';


const OpenLayerMap = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const [mapData, setMapData] = useState<Map>()
    const [baseLayer, setBaseLayer] = useState('osm')
    const handleZoomIn = () => {
      const view = mapData?.getView()
      const zoom = view?.getZoom()
      console.log(zoom)
      view?.setZoom(zoom! + 1)
    }
    const handleZoomOut = () => {
      const view = mapData?.getView()
      const zoom = view?.getZoom()
      view?.setZoom(zoom! - 1)
    }
    const baseLayerSwitcher = (e: ChangeEvent<HTMLInputElement>) => {
     setBaseLayer(e.target.value)
    }
    useEffect(() => {
  
      mapData?.getAllLayers().forEach((elem) => {
        const baseLayerTitle = elem.getProperties().title
        elem.setVisible(baseLayer == baseLayerTitle)      
      })
  
    },[baseLayer])
      
     
    
    useEffect(() => {
      const map = new Map({
        controls: defaultControls().extend([new FullScreen()]),
        target: mapRef.current as HTMLDivElement,
        // layers: [
        //   new TileLayer({
        //     source: new OSM()
        //   }),
         
        // ],
        view: new View({        
          center: [0,0],
          zoom: 2,
        }),
      });
      map.on('click', (e) => {
        console.log(e.coordinate)
       })
  
       const styles = new Style({
        image: new CircleStyle({
         radius: 5,
         fill: new Fill({
           color: 'orange'
         })
        })
        
       })
       //geojson object
      
     
       const line = new LineString([fromLonLat([85.3240, 27.7172]),
       fromLonLat([77.2090, 28.6139])])
        const point = new MultiPoint( [[-2e6, -1e6],
          [-1e6, 1e6],
          [0, -1e6],
          [-2e6, -1e6]])
        const polygon = new Polygon([
          [
            [-2e6, -1e6],
            [-1e6, 1e6],
            [0, -1e6],
            [-2e6, -1e6],
          ],
        ])
        const lineFeature = new Feature({
          geometry: line
        })
        const polyFeature = new Feature({
          geometry: polygon
        })
        const feature = new Feature({
          geometry: point
        })
        
        const lineVectorSource = new VectorSource({
          features: [lineFeature]
        })
        const polyVectorSource = new VectorSource({
          features: [polyFeature]
        })
        const vectorSource = new VectorSource({
          features: [feature]
        })
  
        const lineVectorLayer = new VectorLayer({
          source: lineVectorSource
        })
        const polyVectorLayer = new VectorLayer({
          source: polyVectorSource,
          
        })
        const vectorLayer = new VectorLayer({
          source: vectorSource,
          style: styles
        })
      
      const openStreetMap = new TileLayer({
        source: new OSM(),
        visible: true,
        properties: {title: 'osm'}
      })
      const stadiaMap = new TileLayer({
        source: new StadiaMaps({
          layer: 'stamen_toner',
          retina: true
        }),
        visible: false,
        properties: {title: 'stadia'}
      })
      // map.addLayer(vectorLayer)
      const baseLayerGroup = new LayerGroup({
        layers: [
          openStreetMap, stadiaMap,
           vectorLayer, polyVectorLayer, lineVectorLayer
        ]
      })
      map.addLayer(baseLayerGroup)
      setMapData(map)
      
      return () => map.setTarget(undefined);
    }, [])
  return (
    <div className='w-full flex gap-8 px-8 py-4'>

    <div className='bg-amber-500 px-8 py-4 rounded-xl max-h-fit'>
      <h1 className='text-2xl font-semibold'>BaseLayer Switcher</h1>
      <div className='flex flex-col'>
        <div>
          <input
          value='osm' 
          onChange={baseLayerSwitcher}
          type="radio"
          name="baseLayer" 
          checked={baseLayer === 'osm'}/>OSM Standard
        </div>
        <div>
          <input
          value='stadia'  
          onChange={baseLayerSwitcher}
          type="radio" 
          name="baseLayer" 
          checked={baseLayer === 'stadia'}/>Stadia Retina
        </div>       
      </div>      
    </div>  

    <div className='flex flex-col gap-4 w-full'>      
      <div className=' overflow-hidden h-[500px]' ref={mapRef}>
        {/* <RenderLineChart /> */}
      </div>
      <div>
        <button
        className='bg-black text-white px-4 py-2 '
          onClick={handleZoomIn}
          >Zoom In</button>
          <button 
          className='bg-black text-white px-4 py-2 ml-2'
          onClick={handleZoomOut}
          >Zoom Out</button>
      </div>
    </div>  
   </div>
  )
}

export default OpenLayerMap