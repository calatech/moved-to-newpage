import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MovedPage } from './pages/MovedPage';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Primary route for the moved page */}
        <Route path="/moved" element={<MovedPage />} />

        {/* Default route redirects to moved page */}
        <Route path="/" element={<MovedPage />} />

        {/* Catch-all route for any other path */}
        <Route path="*" element={<MovedPage />} />
      </Routes>
    </BrowserRouter>);

}