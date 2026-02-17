
import React from 'react';
import { Video, MapPin, Clock, Calendar, MoreVertical, Check, X } from 'lucide-react';
import { Appointment } from '../types';

interface AppointmentCardProps {
  appointment: Appointment;
  onClick: () => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'Scheduled': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'In Progress': return 'bg-[#F0FDF9] text-[#2EB8A1] border-[#2EB8A1]/20';
      case 'Completed': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Cancelled': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const isToday = appointment.date === '24 May 2024';

  return (
    <div 
      onClick={onClick}
      className="bg-white premium-radius border border-slate-100 custom-shadow p-5 hover:border-[#2EB8A1] transition-all cursor-pointer group flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex gap-4">
          <img 
            src={appointment.avatar} 
            alt={appointment.patientName} 
            className="w-14 h-14 rounded-2xl object-cover ring-2 ring-slate-50"
          />
          <div>
            <h4 className="font-bold text-slate-900 leading-tight group-hover:text-[#2EB8A1] transition-colors">{appointment.patientName}</h4>
            <p className="text-xs text-slate-500 mt-1">{appointment.age} yrs • {appointment.gender}</p>
            <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold mt-2 border ${getStatusColor(appointment.status)}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(appointment.status).split(' ')[1].replace('text-', 'bg-')}`}></span>
              {appointment.status}
            </div>
          </div>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); }} 
          className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-400"
        >
          <MoreVertical size={18} />
        </button>
      </div>

      <div className="space-y-3 mb-6 flex-1">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
          <Calendar size={14} className="text-slate-400" />
          <span>{appointment.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <Clock size={14} className="text-slate-400" />
          <span>{appointment.time}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[11px] font-bold ${appointment.location === 'Online' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
            {appointment.location === 'Online' ? <Video size={12} /> : <MapPin size={12} />}
            {appointment.location} Consultation
          </div>
          <span className="text-[10px] text-slate-400 font-mono">{appointment.bookingId}</span>
        </div>

        <p className="text-xs text-slate-500 line-clamp-2 italic">
          "{appointment.reason}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-50">
        {appointment.status === 'Pending' ? (
          <div className="flex items-center gap-3">
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="flex-1 py-2 rounded-xl border-2 border-emerald-100 text-emerald-600 text-xs font-bold hover:bg-emerald-50 transition-all flex items-center justify-center gap-2"
            >
              <Check size={14} /> Accept
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="flex-1 py-2 rounded-xl border-2 border-red-50 text-red-500 text-xs font-bold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
            >
              <X size={14} /> Reject
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {(isToday && (appointment.status === 'Scheduled' || appointment.status === 'In Progress')) ? (
              <button 
                onClick={(e) => { e.stopPropagation(); }}
                className="flex-1 py-2.5 rounded-xl bg-[#2EB8A1] text-white text-xs font-bold hover:bg-[#26a08c] transition-all shadow-md shadow-[#2EB8A1]/20 flex items-center justify-center gap-2"
              >
                <Video size={14} /> Start Consultation
              </button>
            ) : (
              <button 
                onClick={(e) => { e.stopPropagation(); }}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Reschedule
              </button>
            )}
            <button 
              onClick={(e) => { e.stopPropagation(); }}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all text-xs font-bold"
            >
              Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
