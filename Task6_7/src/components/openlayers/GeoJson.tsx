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
import { fromLonLat, get, getTransformFromProjections, getUserProjection } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { getForProjection } from 'ol/tilegrid';


const OpenLayerMap = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const [mapData, setMapData] = useState<Map>()
   
     
    
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
       const geoJsonObj = {
        'type': 'FeatureCollection',
        'crs': {
          'type': 'name',
          'properties': {
            'name': 'EPSG:3857'
          },
        },
        'features': [
          {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [4e6, -2e6],
              [8e6, 2e6],
            ]
          }
        },
        {
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [
                [
                  [-5e6, -1e6],
                  [-3e6, -1e6],
                  [-4e6, 1e6],
                  [-5e6, -1e6],
                ],
              ],
            },
          },
          
      ]
       }
       const source = new VectorSource({
        features: new GeoJSON().readFeatures(geoJsonObj),
        
       })
       const layer = new VectorLayer({
        source: source,
        
       })
     
      const openStreetMap = new TileLayer({
        source: new OSM(),
        visible: true,
        properties: {title: 'osm'}
      })
     
      // map.addLayer(vectorLayer)
      const baseLayerGroup = new LayerGroup({
        layers: [
          openStreetMap, layer,
          
        ]
      })
      map.addLayer(baseLayerGroup)
      setMapData(map)
      
      return () => map.setTarget(undefined);
    }, [])
  return (

      <div className='absolute w-full h-full' ref={mapRef}>
       
      </div>
      
   
  )
}

export default OpenLayerMap