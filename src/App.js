import React from 'react';
import './App.css';
import Layout from "./components/layout"

import Home from "./components/Home"
import ProductPage from "./components/ProductPage"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import NotFound from "./components/_404"
import About from './components/About';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/products" element={<ProductPage/>}>  
          <Route path="/" element={<Products/>}/>
          <Route path=":slug" element={<ProductDetail/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>  
        <Route path="*" element={<NotFound/>}/>  
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
