
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import Finance from './pages/Finance';
import Plans from './pages/Plans';
import Users from './pages/Users';
import { ToastProvider } from './components/Toast';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/doctors" element={<Doctors />} />
            <Route path="/admin/doctors/approvals" element={<Doctors filter="pending" />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/appointments" element={<Appointments />} />
            <Route path="/admin/earnings" element={<Finance tab="earnings" />} />
            <Route path="/admin/transactions" element={<Finance tab="transactions" />} />
            <Route path="/admin/payouts" element={<Finance tab="payouts" />} />
            <Route path="/admin/plans" element={<Plans />} />
            <Route path="*" element={<div className="p-8 text-center text-gray-500">Page under construction...</div>} />
          </Routes>
        </Layout>
      </HashRouter>
    </ToastProvider>
  );
};

export default App;
