import React, { useState } from 'react';
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Clock,
  MessageSquare,
  Wallet,
  Star,
  UserCircle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, isCollapsed, toggleCollapse }) => {
  const { user, logout } = useAuth();
  const [isOnline, setIsOnline] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Appointments', icon: <CalendarDays size={20} /> },
    { name: 'Patients', icon: <Users size={20} /> },
    { name: 'Schedule', icon: <Clock size={20} /> },
    { name: 'Messages', icon: <MessageSquare size={20} /> },
    { name: 'Earnings', icon: <Wallet size={20} /> },
    { name: 'Reviews', icon: <Star size={20} /> },
  ];

  const handleNavigation = (name: string) => {
    if (name === 'Logout') {
      if (confirm('Are you sure you want to logout?')) {
        logout();
      }
    } else {
      setActivePage(name);
    }
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white border-r border-slate-200 z-50 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
    >
      <div className="flex flex-col h-full py-6">
        {/* Logo & Toggle */}
        <div className="px-6 mb-8 flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex items-center gap-2 text-[#2EB8A1]">
              <ShieldCheck size={28} className="text-[#2EB8A1]" />
              <span className="font-bold text-xl tracking-tight text-slate-900">HealthGuard</span>
            </div>
          ) : (
            <div className="w-full flex justify-center mb-4"><ShieldCheck size={28} className="text-[#2EB8A1]" /></div>
          )}
          {!isCollapsed && (
            <button
              onClick={toggleCollapse}
              className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
          )}
        </div>

        {isCollapsed && (
          <button
            onClick={toggleCollapse}
            className="self-center mb-6 p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        )}


        {/* Doctor Identity */}
        {!isCollapsed && (
          <div className="px-6 mb-8">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                {user?.full_name?.charAt(0) || 'D'}
              </div>
              <div className="overflow-hidden">
                <p className="font-semibold text-sm truncate">{user?.full_name || 'Doctor'}</p>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                  <span className="text-xs text-slate-500">{isOnline ? 'Online' : 'Offline'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="flex-1 space-y-1 overflow-y-auto px-3">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name)}
              className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl transition-all relative group
                ${activePage === item.name
                  ? 'bg-[#E0F2F1] text-[#2EB8A1]'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }
                ${isCollapsed ? 'justify-center' : ''}
                `}
            >
              {item.icon}
              {!isCollapsed && <span className="font-medium text-[15px]">{item.name}</span>}
              {!isCollapsed && activePage === item.name && (
                <div className="absolute left-0 w-1 h-6 bg-[#2EB8A1] rounded-r-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom Items */}
        <div className="pt-6 border-t border-slate-100 space-y-1 px-3">
          <button
            onClick={() => setActivePage('Profile')}
            className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl transition-all text-slate-500 hover:bg-slate-50 hover:text-slate-900 ${isCollapsed ? 'justify-center' : ''}`}
          >
            <UserCircle size={20} />
            {!isCollapsed && <span className="font-medium text-[15px]">Profile</span>}
          </button>
          <button
            onClick={() => setActivePage('Settings')}
            className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl transition-all text-slate-500 hover:bg-slate-50 hover:text-slate-900 ${isCollapsed ? 'justify-center' : ''}`}
          >
            <Settings size={20} />
            {!isCollapsed && <span className="font-medium text-[15px]">Settings</span>}
          </button>
          <button
            onClick={() => handleNavigation('Logout')}
            className={`w-full flex items-center gap-4 py-3 px-4 rounded-xl transition-all text-slate-500 hover:bg-red-50 hover:text-red-500 ${isCollapsed ? 'justify-center' : ''}`}
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="font-medium text-[15px]">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
