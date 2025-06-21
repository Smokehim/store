import { createRoot } from 'react-dom/client';
import './index.css';
import { Menu } from './menu.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Cart from './cart.tsx';
import Shop from './shopping.tsx'; // corrected typo
import { Reduce } from './components/reduce/contextReduce.tsx'; // corrected typo

createRoot(document.getElementById('root')!).render(
  <Reduce>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        {/* Optional default redirect */}
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      </Routes>
    </BrowserRouter>
  </Reduce>
);
