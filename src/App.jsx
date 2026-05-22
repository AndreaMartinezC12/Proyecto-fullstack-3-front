import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateOrder from './pages/CreateOrder'
import SearchOrder from './pages/SearchOrder'
import EditOrder from './pages/EditOrder'
import Register from './pages/Register'
import Login from './pages/Login'
import Start from './pages/Start'
import UserPedido from './pages/UserPedido'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/new-order" element={<CreateOrder />} />
          <Route path="/search-order" element={<SearchOrder />} />
          <Route path="/edit-order/:id" element={<EditOrder />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mi-pedido" element={<UserPedido />} />



        </Routes>
      </BrowserRouter>

    </>
      
  )
}

export default App
