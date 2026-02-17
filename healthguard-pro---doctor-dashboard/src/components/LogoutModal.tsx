
import React from 'react';
import { LogOut, X } from 'lucide-react';

interface LogoutModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="bg-white rounded-[32px] w-full max-w-sm p-8 relative shadow-2xl animate-in zoom-in-95 fade-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl hover:bg-slate-50 text-slate-400"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-[32px] flex items-center justify-center mb-6">
            <LogOut size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Confirm Logout</h3>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Are you sure you want to sign out from your doctor dashboard? You will need to login again to access your records.
          </p>

          <div className="flex flex-col w-full gap-3">
            <button 
              onClick={onConfirm}
              className="w-full py-4 rounded-2xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-all shadow-xl shadow-red-500/20"
            >
              Sign Out
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 rounded-2xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all"
            >
              Stay Logged In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
