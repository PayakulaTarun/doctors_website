
import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AppointmentsPage from './components/AppointmentsPage';
import SchedulePage from './components/SchedulePage';
import PatientsPage from './components/PatientsPage';
import MessagesPage from './components/MessagesPage';
import EarningsPage from './components/EarningsPage';
import ReviewsPage from './components/ReviewsPage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import LogoutModal from './components/LogoutModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Appointments':
        return <AppointmentsPage />;
      case 'Schedule':
        return <SchedulePage />;
      case 'Patients':
        return <PatientsPage />;
      case 'Messages':
        return <MessagesPage />;
      case 'Earnings':
        return <EarningsPage />;
      case 'Reviews':
        return <ReviewsPage />;
      case 'Profile':
        return <ProfilePage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-slate-400">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">{currentPage} Page</p>
              <p>Content for this section is coming soon in the premium update.</p>
            </div>
          </div>
        );
    }
  };

  const handleSidebarAction = (page: string) => {
    if (page === 'Logout') {
      setShowLogoutModal(true);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <AuthProvider>
      <div className="flex min-h-screen">
        <Sidebar
          activePage={currentPage}
          setActivePage={handleSidebarAction}
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-0 md:ml-64'}`}>
          <Navbar pageTitle={currentPage} />
          <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
            {renderContent()}
          </main>
        </div>

        {showLogoutModal && (
          <LogoutModal
            onClose={() => setShowLogoutModal(false)}
            onConfirm={() => {
              setShowLogoutModal(false);
              window.location.reload(); // Simple simulation of logout
            }}
          />
        )}
      </div>
    </AuthProvider>
  );
};

export default App;
