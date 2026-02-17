
import React, { useState, useMemo } from 'react';
import { Plus, Download, Search, Filter, MoreVertical, Eye, Calendar, FileText, Users, UserPlus, Clock, AlertTriangle } from 'lucide-react';
import { Patient } from '../types';
import MedicalHistoryDrawer from './MedicalHistoryDrawer';

const MOCK_PATIENTS: Patient[] = [
  { id: 'P-001', name: 'Alicia Keys', phone: '+1 (555) 123-4567', avatar: 'https://picsum.photos/seed/p1/100', visitsCount: 12, lastAppointment: '24 May 2024, 09:00 AM', condition: 'Stable', age: 28, gender: 'Female', status: 'Active', visitReason: 'Fever & Cough', lastVisit: '2 hours ago' },
  { id: 'P-002', name: 'Robert Fox', phone: '+1 (555) 234-5678', avatar: 'https://picsum.photos/seed/p2/100', visitsCount: 5, lastAppointment: '23 May 2024, 02:30 PM', condition: 'Critical', age: 45, gender: 'Male', status: 'Active', visitReason: 'Annual Checkup', lastVisit: 'Yesterday' },
  { id: 'P-003', name: 'Esther Howard', phone: '+1 (555) 345-6789', avatar: 'https://picsum.photos/seed/p3/100', visitsCount: 8, lastAppointment: '22 May 2024, 11:15 AM', condition: 'Follow-up', age: 34, gender: 'Female', status: 'Active', visitReason: 'Skin Rash', lastVisit: '2 days ago' },
  { id: 'P-004', name: 'Jenny Wilson', phone: '+1 (555) 456-7890', avatar: 'https://picsum.photos/seed/p4/100', visitsCount: 3, lastAppointment: '21 May 2024, 04:00 PM', condition: 'Stable', age: 29, gender: 'Female', status: 'Active', visitReason: 'Migraine', lastVisit: '3 days ago' },
  { id: 'P-005', name: 'Cameron Williamson', phone: '+1 (555) 567-8901', avatar: 'https://picsum.photos/seed/p5/100', visitsCount: 15, lastAppointment: '20 May 2024, 10:45 AM', condition: 'Critical', age: 52, gender: 'Male', status: 'Active', visitReason: 'Hypertension', lastVisit: '4 days ago' },
  { id: 'P-006', name: 'Kristin Watson', phone: '+1 (555) 678-9012', avatar: 'https://picsum.photos/seed/p6/100', visitsCount: 7, lastAppointment: '19 May 2024, 01:20 PM', condition: 'Follow-up', age: 41, gender: 'Female', status: 'Active', visitReason: 'Post-op checkup', lastVisit: '5 days ago' },
];

const PatientsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const filteredPatients = useMemo(() => {
    return MOCK_PATIENTS.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.phone.includes(searchQuery)
    );
  }, [searchQuery]);

  const stats = [
    { label: 'Total Patients', value: '1,284', icon: <Users size={20} />, bg: 'bg-emerald-50', color: 'text-emerald-600' },
    { label: 'New This Week', value: '32', icon: <UserPlus size={20} />, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Follow-ups Pending', value: '18', icon: <Clock size={20} />, bg: 'bg-orange-50', color: 'text-orange-600' },
    { label: 'Critical Cases', value: '04', icon: <AlertTriangle size={20} />, bg: 'bg-red-50', color: 'text-red-600' },
  ];

  const getConditionStyle = (condition: string) => {
    switch (condition) {
      case 'Stable': return 'bg-[#D1FAE5] text-emerald-700';
      case 'Critical': return 'bg-[#FEE2E2] text-red-700';
      case 'Follow-up': return 'bg-[#FEF9C3] text-orange-700';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Patients</h2>
          <p className="text-slate-500 text-sm">Manage patient records & medical history</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 font-bold text-sm transition-all">
            <Download size={18} />
            <span>Export List</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2EB8A1] text-white hover:bg-[#26a08c] font-bold text-sm transition-all shadow-lg shadow-[#2EB8A1]/20">
            <Plus size={18} />
            <span>Add Patient</span>
          </button>
        </div>
      </div>

      {/* Quick Stats Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white premium-radius p-5 border border-slate-100 custom-shadow flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900 leading-tight">{stat.value}</p>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/50 custom-shadow flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2EB8A1] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search patient by name or phone..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50/50 border border-slate-100 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#2EB8A1] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <select className="appearance-none bg-slate-50/50 border border-slate-100 rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-[#2EB8A1] outline-none w-full">
              <option>Condition: All</option>
              <option>Stable</option>
              <option>Critical</option>
              <option>Follow-up</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-500 text-sm font-bold hover:bg-slate-50 transition-all whitespace-nowrap">
            Recent Patients
          </button>
        </div>
      </div>

      {/* Patient Table Card */}
      <div className="bg-white premium-radius border border-slate-100 custom-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">👤 Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">📊 Visits</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">📅 Last Appointment</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">🩺 Condition</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">⚡ Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredPatients.map((patient) => (
                <tr 
                  key={patient.id} 
                  onClick={() => setSelectedPatient(patient)}
                  className="group hover:bg-[#F1FDFB] transition-colors cursor-pointer h-[72px]"
                >
                  <td className="px-6">
                    <div className="flex items-center gap-3">
                      <img src={patient.avatar} alt={patient.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#2EB8A1]/20 transition-all" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#2EB8A1] transition-colors">{patient.name}</p>
                        <p className="text-[11px] text-slate-500">{patient.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6">
                    <span className="inline-flex items-center justify-center min-w-[32px] px-2 py-1 rounded-lg bg-[#ECFDF5] text-[#2EB8A1] text-xs font-bold">
                      {patient.visitsCount}
                    </span>
                  </td>
                  <td className="px-6">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                        <Calendar size={12} className="text-slate-400" />
                        {patient.lastAppointment.split(',')[0]}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <Clock size={12} className="text-slate-400" />
                        {patient.lastAppointment.split(',')[1]}
                      </div>
                    </div>
                  </td>
                  <td className="px-6">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${getConditionStyle(patient.condition)}`}>
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button title="View History" className="p-2 rounded-lg bg-[#F0FDF9] text-[#2EB8A1] hover:bg-[#2EB8A1] hover:text-white transition-all">
                        <Eye size={16} />
                      </button>
                      <button title="Book Appointment" className="p-2 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all">
                        <Calendar size={16} />
                      </button>
                      <button title="Add Notes" className="p-2 rounded-lg bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all">
                        <FileText size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="bg-white px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>Show</span>
            <select className="bg-slate-50 border-none rounded-lg px-2 py-1 text-slate-900 outline-none">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
            <span>patients per page</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold hover:bg-slate-100 transition-all">Previous</button>
            <button className="w-8 h-8 rounded-lg bg-[#2EB8A1] text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold hover:bg-slate-100">2</button>
            <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold hover:bg-slate-100">3</button>
            <button className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold hover:bg-slate-100 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* History Drawer */}
      <MedicalHistoryDrawer 
        patient={selectedPatient} 
        onClose={() => setSelectedPatient(null)} 
      />
    </div>
  );
};

export default PatientsPage;
