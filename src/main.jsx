import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Kamado from './pages/Kamado';
import Nezuko from './pages/Nezuko';
import Super from './pages/Super';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kamado" element={<Kamado />} />
        <Route path="/nezuko" element={<Nezuko />} />
        <Route path="/super" element={<Super />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
