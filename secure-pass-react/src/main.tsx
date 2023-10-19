import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes} from "react-router-dom"
// import App from './App.tsx'
import './index.css'
import Home from './pages/Home'
import BiometriaFacial from './pages/BiometriaFacial'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/BiometriaFacial' element={<BiometriaFacial/>}/>
    
    {/* <BiometriaFacial/> */}

    {/* <App /> */}
    </Routes>

    </BrowserRouter>
    </React.StrictMode>
)
