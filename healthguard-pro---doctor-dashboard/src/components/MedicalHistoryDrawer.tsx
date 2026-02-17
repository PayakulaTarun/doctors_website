
import React from 'react';
import { X, Phone, Mail, FileText, Plus, Calendar, Clock, Download, Video, History, Activity, ClipboardList } from 'lucide-react';
import { Patient } from '../types';

interface MedicalHistoryDrawerProps {
  patient: Patient | null;
  onClose: () => void;
}

const MedicalHistoryDrawer: React.FC<MedicalHistoryDrawerProps> = ({ patient, onClose }) => {
  if (!patient) return null;

  const timeline = [
    { date: '24 May 2024', event: 'General Consultation', doctor: 'Dr. Sarah Jenkins', notes: 'Patient reports persistent cough and mild fever. Prescribed antibiotics.' },
    { date: '12 Apr 2024', event: 'Laboratory Tests', type: 'Blood Panel', result: 'All parameters normal, vitamin D deficiency noted.' },
    { date: '05 Feb 2024', event: 'Follow-up Visit', doctor: 'Dr. James Wilson', notes: 'Recovery from seasonal flu. Lung clearance confirmed.' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-[480px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform translate-x-0 overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900">Medical History</h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Profile Header Card */}
          <div className="bg-[#F0FDF9] rounded-[24px] p-6 mb-8 border border-[#2EB8A1]/10">
            <div className="flex items-center gap-5 mb-6">
              <img src={patient.avatar} alt="" className="w-20 h-20 rounded-3xl object-cover ring-4 ring-white shadow-md" />
              <div>
                <h4 className="font-bold text-slate-900 text-xl">{patient.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{patient.age} Yrs • {patient.gender}</p>
                <div className="flex items-center gap-2 mt-2">
                   <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${patient.condition === 'Stable' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                    {patient.condition}
                   </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-[#2EB8A1]/20 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-sm">
                <Phone size={14} className="text-[#2EB8A1]" /> Call
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-[#2EB8A1]/20 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all shadow-sm">
                <Mail size={14} className="text-[#2EB8A1]" /> Message
              </button>
            </div>
          </div>

          {/* Action Tabs Quick Strip */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#2EB8A1] transition-all custom-shadow">
               <div className="p-2 rounded-lg bg-blue-50 text-blue-500"><Video size={18} /></div>
               <span className="text-sm font-bold text-slate-700">Tele-consult</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#2EB8A1] transition-all custom-shadow">
               <div className="p-2 rounded-lg bg-emerald-50 text-emerald-500"><Plus size={18} /></div>
               <span className="text-sm font-bold text-slate-700">New Record</span>
            </button>
          </div>

          {/* Medical Timeline */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Medical Timeline</h5>
              <button className="text-xs font-bold text-[#2EB8A1] hover:underline">View All</button>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-100">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-white border-2 border-[#2EB8A1] flex items-center justify-center z-10 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2EB8A1]"></div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                       <span className="text-[10px] font-bold text-slate-400 uppercase">{item.date}</span>
                       <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{item.event}</span>
                    </div>
                    {item.notes && <p className="text-sm text-slate-700 leading-relaxed font-medium mb-2">{item.notes}</p>}
                    {item.result && (
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <p className="text-xs text-slate-500 italic">Result: {item.result}</p>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                       <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                       <span className="text-[11px] text-slate-500 font-bold">{item.doctor || 'Lab Report'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Actions Fixed */}
          <div className="sticky bottom-0 -mx-8 px-8 py-6 bg-white border-t border-slate-50 mt-10 space-y-3">
            <button className="w-full py-4 rounded-2xl bg-[#2EB8A1] text-white font-bold text-sm hover:bg-[#26a08c] transition-all shadow-xl shadow-[#2EB8A1]/20 flex items-center justify-center gap-2">
              <Plus size={18} /> Add New Consultation
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Calendar size={18} /> Schedule
              </button>
              <button className="py-3.5 rounded-2xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <FileText size={18} /> Lab Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalHistoryDrawer;
