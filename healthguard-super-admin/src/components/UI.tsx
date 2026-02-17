
import React from 'react';
import { X } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primaryHover shadow-sm',
    secondary: 'bg-secondary text-white hover:opacity-90',
    danger: 'bg-danger text-white hover:opacity-90',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:bg-gray-100'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-premium border border-border shadow-premium p-6 ${className}`}>
    {children}
  </div>
);

export const StatusChip: React.FC<{ status: string }> = ({ status }) => {
  const normalized = status.toLowerCase();
  let colors = 'bg-gray-100 text-gray-600';

  if (normalized === 'active' || normalized === 'completed' || normalized === 'successful') {
    colors = 'bg-green-100 text-green-700';
  } else if (normalized === 'pending' || normalized === 'processing') {
    colors = 'bg-amber-100 text-amber-700';
  } else if (normalized === 'suspended' || normalized === 'cancelled' || normalized === 'failed' || normalized === 'blocked') {
    colors = 'bg-red-100 text-red-700';
  }

  return (
    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${colors}`}>
      {status}
    </span>
  );
};

export const Modal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode 
}> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-premium shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export const Drawer: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode 
}> = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[90] transition-opacity" 
          onClick={onClose}
        />
      )}
      <div className={`fixed top-0 right-0 h-full w-[480px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-border ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="px-6 py-5 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-xl text-gray-800 tracking-tight">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
