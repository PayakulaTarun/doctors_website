
import React, { useState } from 'react';
import { X, Phone, Mail, History, Calendar, Clock, Video, FileText, CheckCircle, CreditCard, AlertCircle } from 'lucide-react';
import { Appointment } from '../types';

interface AppointmentDrawerProps {
  appointment: Appointment | null;
  onClose: () => void;
}

const AppointmentDrawer: React.FC<AppointmentDrawerProps> = ({ appointment, onClose }) => {
  const [notes, setNotes] = useState('');
  const [isRescheduling, setIsRescheduling] = useState(false);

  if (!appointment) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] transition-opacity duration-300 ${appointment ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-[420px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform ${appointment ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900">Appointment Details</h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Section 1: Patient Profile */}
          <div className="bg-slate-50/50 rounded-3xl p-5 mb-8 border border-slate-100">
            <div className="flex items-center gap-4 mb-5">
              <img src={appointment.avatar} alt="" className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white shadow-sm" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{appointment.patientName}</h4>
                <p className="text-sm text-slate-500 font-medium">Patient ID: P-82901</p>
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{appointment.age} Yrs • {appointment.gender}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white border border-slate-100 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-all shadow-sm">
                <Phone size={14} className="text-[#2EB8A1]" /> Call
              </button>
              <button className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white border border-slate-100 text-slate-600 hover:bg-slate-50 text-xs font-bold transition-all shadow-sm">
                <Mail size={14} className="text-[#2EB8A1]" /> Message
              </button>
              <button className="col-span-2 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#F0FDF9] text-[#2EB8A1] hover:bg-[#d9f9ef] text-xs font-bold transition-all">
                <History size={14} /> View Medical History
              </button>
            </div>
          </div>

          {/* Section 2: Appointment Info */}
          <div className="space-y-6 mb-8">
            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">Consultation Information</h5>
            
            <div className="grid grid-cols-1 gap-5 px-1">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Date & Time</p>
                  <p className="text-sm font-bold text-slate-800">{appointment.date} at {appointment.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Consultation Type</p>
                  <p className="text-sm font-bold text-slate-800">{appointment.location} Video Call</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${appointment.paymentStatus === 'Paid' ? 'bg-emerald-50 text-emerald-500' : 'bg-orange-50 text-orange-500'}`}>
                  {appointment.paymentStatus === 'Paid' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Payment Status</p>
                  <p className="text-sm font-bold text-slate-800">{appointment.paymentStatus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Clinical Reason & Notes */}
          <div className="mb-8">
            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1 mb-3">Reason for Visit</h5>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-sm leading-relaxed mb-6">
              {appointment.reason}
            </div>

            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1 mb-3">Doctor's Private Notes</h5>
            <textarea 
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your notes about the upcoming session..."
              className="w-full h-32 p-4 rounded-2xl bg-white border border-slate-200 text-sm focus:ring-2 focus:ring-[#2EB8A1] focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Section 4: Actions */}
          <div className="space-y-3 pt-4 sticky bottom-0 bg-white border-t border-slate-100 -mx-6 px-6 pb-6 mt-auto">
            <button className="w-full py-4 rounded-2xl bg-[#2EB8A1] text-white font-bold text-sm hover:bg-[#26a08c] transition-all shadow-xl shadow-[#2EB8A1]/20 flex items-center justify-center gap-2">
              <Video size={18} /> Start Consultation
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setIsRescheduling(true)}
                className="py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all"
              >
                Reschedule
              </button>
              <button className="py-3.5 rounded-2xl border border-red-50 text-red-500 font-bold text-sm hover:bg-red-50 transition-all">
                Cancel
              </button>
            </div>
            <button className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
               <FileText size={18} /> Mark as Completed
            </button>
          </div>
        </div>
      </div>

      {/* Reschedule Mini Overlay */}
      {isRescheduling && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-6">
           <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsRescheduling(false)} />
           <div className="bg-white rounded-[32px] w-full max-w-sm p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="text-center mb-6">
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Reschedule Appointment</h4>
                 <p className="text-slate-500 text-sm">Select a new date and time for Dr. Sarah Jenkins</p>
              </div>

              <div className="space-y-4 mb-8">
                 <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Select Date</p>
                    <input type="date" className="w-full bg-transparent font-bold text-slate-800 outline-none" defaultValue="2024-05-28" />
                 </div>
                 <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Select Time</p>
                    <select className="w-full bg-transparent font-bold text-slate-800 outline-none appearance-none">
                       <option>09:00 AM</option>
                       <option>10:30 AM</option>
                       <option>11:45 AM</option>
                       <option>02:00 PM</option>
                       <option>04:30 PM</option>
                    </select>
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setIsRescheduling(false);
                    // Add success notification logic here if needed
                  }}
                  className="w-full py-4 rounded-2xl bg-[#2EB8A1] text-white font-bold hover:bg-[#26a08c] transition-all shadow-lg shadow-[#2EB8A1]/20"
                >
                  Confirm New Schedule
                </button>
                <button 
                  onClick={() => setIsRescheduling(false)}
                  className="w-full py-4 rounded-2xl text-slate-400 font-bold text-sm hover:text-slate-600 transition-all"
                >
                  Go Back
                </button>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default AppointmentDrawer;
