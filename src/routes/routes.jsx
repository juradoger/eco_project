import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Card from '../components/cards';
import Inicio from '../pages/inicio';
import Explora from '../pages/explorar';
import Misiones from '../pages/misiones';
import Galeria from '../pages/galeria';
import EcoTips from '../pages/ecotips';
import Participa from '../pages/participar';



function Rutas(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/explora" element={<Explora />} />
                <Route path="/misiones" element={<Misiones />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/ecotips" element={<EcoTips />} />
                <Route path="/participar" element={<Participa/>}/>
                <Route path="/cards" element={<Card />} />    
               
            </Routes>
            <Footer />
        </Router>
    )
}
export default Rutas;