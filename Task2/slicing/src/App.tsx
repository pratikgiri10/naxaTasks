import {Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'

function App() {
 

  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/data' element='#'/>
    <Route path='/about' element='#'/>
  </Routes>
  )
}

export default App
