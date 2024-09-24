// src/router/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import PatientDetailsPage from '../pages/PatientDetailsPage';
import PatientsList from '../components/PatientsList';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientsList />} />
        <Route path="/patients/:id" element={<PatientDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
