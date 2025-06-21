// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Menu } from './menu.tsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import App from './App.tsx'
import Cart from './cart.tsx'
import Shop from  './shoping.tsx'
import { Reduce } from './componets/reduce/contextReduce.tsx'

createRoot(document.getElementById('root')!).render(
  <Reduce>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </Reduce>
)
