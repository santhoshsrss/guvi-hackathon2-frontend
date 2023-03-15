import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import { Home } from './components/page/Home';
import { Contact } from './components/page/Contact';
import { Product } from './components/page/Product';

function App() {


  return (
    <div className="App">   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App
