import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import LoanInquiry from './pages/LoanInquiry';

function App() {
  return (
    <div className="App">
      <div className="lg-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/loan-inquiry/:id" element={<LoanInquiry />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="md-screen">
        <div className="md-screen_container">
          <p>Only available on desktop 😊</p>
        </div>
      </div>
    </div>
  );
}

export default App;