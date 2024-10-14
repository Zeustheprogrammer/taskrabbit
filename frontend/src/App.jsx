import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const Layout = ()=>(
  <div> </div>
)

import './App.css'

function App() {

  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
