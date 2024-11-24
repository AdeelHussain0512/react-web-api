import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import SingleProduct from "./components/SingleProduct";
import Home from './components/Home'
import Navbar from './components/Navbar' 
import Products from './components/Products'
import  Productdata from './components/Productdata'

function App() {

  const [Counter, setCounter] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
  
    <Route path='/'                       element={<Home/> }/>
    <Route path='/products/:category/:id' element={<SingleProduct/> }/>
    <Route path='products'                element={<Products/>} />
    <Route path='/data'            element={<Productdata/>} />    
    </Routes>
    </>
  )
}

export default App
