import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Colossal from './pages/Colossal';
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
        <Route path="/colossal" element={<Colossal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
