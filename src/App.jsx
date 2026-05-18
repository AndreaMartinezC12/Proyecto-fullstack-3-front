import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateOrder from './pages/CreateOrder'
import SearchOrder from './pages/SearchOrder'
import EditOrder from './pages/EditOrder'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-order" element={<CreateOrder />} />
          <Route path="/search-order" element={<SearchOrder />} />
          <Route path="/edit-order/:id" element={<EditOrder />} />


        </Routes>
      </BrowserRouter>

    </>
      
  )
}

export default App
