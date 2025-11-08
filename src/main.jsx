import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header.jsx'
import Register from './pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Header />
      <Register/>
    </BrowserRouter>
  </React.StrictMode>
)
