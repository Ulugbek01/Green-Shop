import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { navbar } from '../utils/navbar';

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            {navbar.map((item) => 
                <Route key={item.id} path={item.path} element={item.Element}/>
            )}
        </Routes>
    </div>
  )
}

export default Root