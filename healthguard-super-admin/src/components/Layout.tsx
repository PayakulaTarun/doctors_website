
import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Stethoscope, 
  Users, 
  Calendar, 
  Wallet, 
  Star, 
  Ticket, 
  FileText, 
  Megaphone, 
  ShieldCheck, 
  Settings, 
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Menu,
  Activity,
  LineChart,
  UserCheck,
  UserX,
  CreditCard,
  Layers,
  HeartPulse,
  Tag
} from 'lucide-react';
import { Button, Modal } from './UI';

const SidebarItem: React.FC<{ 
  to: string; 
  icon: React.ElementType; 
  label: string; 
  active: boolean;
  indent?: boolean;
}> = ({ to, icon: Icon, label, active, indent }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
      active 
        ? 'bg-primary text-white shadow-md' 
        : 'text-gray-600 hover:bg-gray-100'
    } ${indent ? 'ml-4 scale-95' : ''}`}
  >
    <Icon size={18} className={active ? 'text-white' : 'text-gray-400 group-hover:text-primary'} />
    <span className="font-medium text-sm">{label}</span>
  </Link>
);

const SectionHeader: React.FC<{ label: string }> = ({ label }) => (
  <div className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
    {label}
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r border-border fixed h-full z-20 overflow-y-auto custom-scrollbar">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
            <HeartPulse size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-800 tracking-tight leading-none">HealthGuard</h1>
            <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Super Admin</span>
          </div>
        </div>

        <nav className="px-3 pb-8">
          <SectionHeader label="Overview" />
          <SidebarItem to="/admin/dashboard" icon={LayoutDashboard} label="Dashboard" active={isActive('/admin/dashboard')} />
          <SidebarItem to="/admin/activity" icon={Activity} label="Live Activity" active={isActive('/admin/activity')} />
          <SidebarItem to="/admin/analytics" icon={LineChart} label="Analytics" active={isActive('/admin/analytics')} />

          <SectionHeader label="Management" />
          <SidebarItem to="/admin/doctors" icon={Stethoscope} label="Doctors" active={isActive('/admin/doctors')} />
          <SidebarItem to="/admin/doctors/approvals" icon={UserCheck} label="Approvals" active={isActive('/admin/doctors/approvals')} indent />
          <SidebarItem to="/admin/users" icon={Users} label="Users" active={isActive('/admin/users')} />
          <SidebarItem to="/admin/users/blocked" icon={UserX} label="Blocked Users" active={isActive('/admin/users/blocked')} indent />
          <SidebarItem to="/admin/appointments" icon={Calendar} label="Appointments" active={isActive('/admin/appointments')} />

          <SectionHeader label="Finance" />
          <SidebarItem to="/admin/earnings" icon={Wallet} label="Earnings" active={isActive('/admin/earnings')} />
          <SidebarItem to="/admin/transactions" icon={CreditCard} label="Transactions" active={isActive('/admin/transactions')} />
          <SidebarItem to="/admin/plans" icon={Layers} label="Subscription Plans" active={isActive('/admin/plans')} />

          <SectionHeader label="Content & Marketing" />
          <SidebarItem to="/admin/content" icon={FileText} label="Content" active={isActive('/admin/content')} />
          <SidebarItem to="/admin/promocodes" icon={Tag} label="Promo Codes" active={isActive('/admin/promocodes')} />
          <SidebarItem to="/admin/campaigns" icon={Megaphone} label="Campaigns" active={isActive('/admin/campaigns')} />

          <SectionHeader label="System" />
          <SidebarItem to="/admin/roles" icon={ShieldCheck} label="Admin Roles" active={isActive('/admin/roles')} />
          <SidebarItem to="/admin/settings" icon={Settings} label="Settings" active={isActive('/admin/settings')} />
          
          <button
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-4 py-2.5 mt-4 rounded-lg text-danger hover:bg-red-50 transition-all duration-200"
          >
            <LogOut size={18} />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[260px]">
        {/* Header */}
        <header className="h-20 bg-white border-b border-border sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl border border-border w-96">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-transparent border-none focus:ring-0 text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-primary transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">3</span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800 leading-none">Super Admin</p>
                <p className="text-xs text-gray-400">admin@healthguard.com</p>
              </div>
              <img 
                src="https://picsum.photos/seed/admin/40/40" 
                className="w-10 h-10 rounded-xl border-2 border-primary"
                alt="Profile"
              />
              <ChevronDown size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>

      {/* Logout Confirmation */}
      <Modal 
        isOpen={showLogoutModal} 
        onClose={() => setShowLogoutModal(false)}
        title="Confirm Logout"
      >
        <div className="p-4">
          <p className="text-gray-600 mb-6">Are you sure you want to log out of the Super Admin dashboard?</p>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setShowLogoutModal(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => {
              setShowLogoutModal(false);
              navigate('/');
            }}>Logout</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
