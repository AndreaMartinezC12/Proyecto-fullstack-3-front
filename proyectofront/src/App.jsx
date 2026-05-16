import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateOrder from './pages/CreateOrder'
import SearchOrder from './pages/SearchOrder'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-order" element={<CreateOrder />} />
          <Route path="/search-order" element={<SearchOrder />} />

        </Routes>
      </BrowserRouter>

    </>
      
  )
}

export default App
