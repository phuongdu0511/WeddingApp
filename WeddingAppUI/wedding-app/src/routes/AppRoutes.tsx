import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import Admin from '../pages/Admin';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Route path="/admin" element={<Admin />} /> */}
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;