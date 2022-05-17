import './App.css'
import { useState } from 'react'
import Navbar from './component/nav_bar/NavBar'
import Header from './component/header/Header'
import Bill from './component/bill/Bill'
import Products from './component/Products/Products'
import { BillContext } from './Helper/Context'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [cart, setCart] = useState([])

  return (
    <BillContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </BillContext.Provider>
  )
}

export default App
