
import React from 'react';
import { Search, Bell, Mail, ChevronDown } from 'lucide-react';

interface NavbarProps {
  pageTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ pageTitle }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-8 flex-1">
        <h1 className="text-xl font-bold text-slate-900 hidden md:block">{pageTitle}</h1>
        
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search patients, appointments..." 
            className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#2EB8A1] transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 relative transition-all">
          <Mail size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#2EB8A1] rounded-full border-2 border-white"></span>
        </button>
        
        <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 relative transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        <button className="flex items-center gap-3 hover:bg-slate-50 p-1.5 rounded-xl transition-all">
          <img 
            src="https://picsum.photos/seed/doc/40" 
            alt="User" 
            className="w-10 h-10 rounded-full object-cover border-2 border-[#2EB8A1]/20"
          />
          <div className="text-left hidden lg:block">
            <p className="text-sm font-semibold text-slate-900 leading-none">Dr. Sarah Jenkins</p>
            <p className="text-xs text-slate-500 mt-1">General Physician</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
