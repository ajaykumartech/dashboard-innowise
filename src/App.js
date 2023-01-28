import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Customer from './Components/Customer'
import Dashboard from './Components/Dashboard'
import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" exact element={ <Dashboard/>} />
        <Route path="/dashboard" element={ <Dashboard/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    
    </BrowserRouter>
  
  )
}

export default App