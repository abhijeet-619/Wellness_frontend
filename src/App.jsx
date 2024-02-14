import { useState } from 'react'
import backgroundImage from "/background.jpg";
import { Routes,Route,Navigate } from "react-router-dom";
import AdminLogin from './pages/login/AdminLogin';
import HospitalLogin from './pages/login/HospitalLogin';
import ChemistLogin from './pages/login/ChemistLogin';
import Home from './pages/home/Home';
import './App.css'
function App() {
  return (
    <>
          <img
                className="bgImg"
                src={backgroundImage}
                alt='background image'
            />

<Routes>
  <Route exact path='/' className="navName" element={<Home/>}/>
  <Route path='/login/admin' className="navName" element={<AdminLogin/>}/>
  <Route path='/login/hospital' className="navName" element={ <HospitalLogin/> }/>
  <Route path='/login/chemist' className="navName"  element={ <ChemistLogin/> }/>
 </Routes>

       
    </>
  )
}

export default App
