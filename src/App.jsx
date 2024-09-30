import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import View from './Pages/View'
import Pnf from './Pages/Pnf'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Wishlist' element={<Wishlist/>} />
        <Route path='/Cart' element={<Cart/>} />
        
        <Route path='/:id/View' element={<View/>} />
        <Route path='/*' element={<Pnf/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
