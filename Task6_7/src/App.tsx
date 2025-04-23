import { Route, Routes } from "react-router-dom"
import RenderLineChart  from "./components/recharts/LineChart"
import OpenLayerMap from "./components/openlayers/OpenLayerMap"
import MapLibre from "./components/maplibre/MapLibre"
import BaselayerSwitcher from "./components/maplibre/BaselayerSwitcher"
import GeoJsonMapLibre  from "./components/maplibre/GeoJson"
import GeoJsonOpenLayer  from "./components/openlayers/GeoJson"


function App() {
 
  return (
   <Routes>
      <Route path="/" element={<MapLibre />}/>
      <Route path="/maplibre/geojson" element={<GeoJsonMapLibre />}/>
      <Route path="/maplibre/switcher" element={<BaselayerSwitcher />}/>
      <Route path="/recharts" element={<RenderLineChart />}/>
      <Route path="/openlayer" element={<OpenLayerMap />}/>
      <Route path="/openlayer/geojson" element={<GeoJsonOpenLayer />}/>
   </Routes>
  )
}

export default App
