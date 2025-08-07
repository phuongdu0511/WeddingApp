import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import Guest from '../pages/Guest';
// import Admin from '../pages/Admin';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/invite/:id" element={<Guest />} /> */}
      {/* <Route path="/admin" element={<Admin />} /> */}
    </Routes>
  );
};

export default AppRoutes;