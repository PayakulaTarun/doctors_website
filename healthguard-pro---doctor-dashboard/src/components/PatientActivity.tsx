
import React from 'react';
import { Patient } from '../types';

// Fixed patient mock data to include all required properties from the Patient interface
const patients: Patient[] = [
  { 
    id: '1', 
    name: 'Alicia Keys', 
    visitReason: 'Fever & Cough', 
    lastVisit: '2 hours ago', 
    avatar: 'https://picsum.photos/seed/p6/40',
    phone: '+1 (555) 123-4567',
    visitsCount: 12,
    lastAppointment: '24 May 2024, 09:00 AM',
    condition: 'Stable',
    age: 28,
    gender: 'Female',
    status: 'Active'
  },
  { 
    id: '2', 
    name: 'Robert Fox', 
    visitReason: 'Annual Checkup', 
    lastVisit: 'Yesterday', 
    avatar: 'https://picsum.photos/seed/p7/40',
    phone: '+1 (555) 234-5678',
    visitsCount: 5,
    lastAppointment: '23 May 2024, 02:30 PM',
    condition: 'Critical',
    age: 45,
    gender: 'Male',
    status: 'Active'
  },
  { 
    id: '3', 
    name: 'Esther Howard', 
    visitReason: 'Skin Rash', 
    lastVisit: '2 days ago', 
    avatar: 'https://picsum.photos/seed/p8/40',
    phone: '+1 (555) 345-6789',
    visitsCount: 8,
    lastAppointment: '22 May 2024, 11:15 AM',
    condition: 'Follow-up',
    age: 34,
    gender: 'Female',
    status: 'Active'
  },
  { 
    id: '4', 
    name: 'Jenny Wilson', 
    visitReason: 'Migraine', 
    lastVisit: '3 days ago', 
    avatar: 'https://picsum.photos/seed/p9/40',
    phone: '+1 (555) 456-7890',
    visitsCount: 3,
    lastAppointment: '21 May 2024, 04:00 PM',
    condition: 'Stable',
    age: 29,
    gender: 'Female',
    status: 'Active'
  },
];

const PatientActivity: React.FC = () => {
  return (
    <div className="space-y-6">
      {patients.map((patient) => (
        <div key={patient.id} className="flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <img src={patient.avatar} alt={patient.name} className="w-10 h-10 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-[#2EB8A1]/20 transition-all" />
            <div>
              <p className="text-sm font-bold text-slate-900 leading-none mb-1">{patient.name}</p>
              <p className="text-xs text-slate-500">{patient.visitReason}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{patient.lastVisit}</p>
            <button className="text-[10px] font-bold text-[#2EB8A1] opacity-0 group-hover:opacity-100 transition-opacity">Profile &rarr;</button>
          </div>
        </div>
      ))}
      <button className="w-full py-3 rounded-2xl border-2 border-dashed border-slate-100 text-slate-400 text-xs font-bold hover:bg-slate-50 hover:border-[#2EB8A1]/30 transition-all">
        View All Patients
      </button>
    </div>
  );
};

export default PatientActivity;
