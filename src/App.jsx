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
import AdminRoute from './components/AdminRoute'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/new-order" element={<ProtectedRoute><CreateOrder /></ProtectedRoute>} />
          <Route path="/search-order" element={<AdminRoute><SearchOrder /></AdminRoute>} />
          <Route path="/edit-order/:id" element={<ProtectedRoute><EditOrder /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mi-pedido" element={<ProtectedRoute><UserPedido /></ProtectedRoute>} />



        </Routes>
      </BrowserRouter>

    </>
      
  )
}

export default App
