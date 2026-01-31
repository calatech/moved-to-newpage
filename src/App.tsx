import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovedPage } from './pages/MovedPage';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovedPage />} />
        <Route path="/moved" element={<MovedPage />} />
        <Route path="*" element={<MovedPage />} />
      </Routes>
    </BrowserRouter>);

}