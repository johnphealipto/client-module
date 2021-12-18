import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import LoanInquiry from './pages/LoanInquiry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/loan-inquiry/:id" element={<LoanInquiry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;