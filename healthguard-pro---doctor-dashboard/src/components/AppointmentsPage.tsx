
import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Download, Plus } from 'lucide-react';
import { Appointment } from '../types';
import AppointmentCard from './AppointmentCard';
import AppointmentDrawer from './AppointmentDrawer';

const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'APT-101',
    patientName: 'John Cooper',
    time: '09:00 AM',
    date: '24 May 2024',
    type: 'General Checkup',
    status: 'Completed',
    location: 'Clinic',
    avatar: 'https://picsum.photos/seed/p1/100',
    age: 34,
    gender: 'Male',
    reason: 'Routine checkup for cardiovascular health monitoring.',
    bookingId: '#B-82910',
    phone: '+1 (555) 001-2233',
    paymentStatus: 'Paid'
  },
  {
    id: 'APT-102',
    patientName: 'Sarah Miller',
    time: '10:30 AM',
    date: '24 May 2024',
    type: 'Consultation',
    status: 'In Progress',
    location: 'Online',
    avatar: 'https://picsum.photos/seed/p2/100',
    age: 28,
    gender: 'Female',
    reason: 'Follow-up on recent blood test results.',
    bookingId: '#B-82911',
    phone: '+1 (555) 001-4455',
    paymentStatus: 'Paid'
  },
  {
    id: 'APT-103',
    patientName: 'Mike Ross',
    time: '11:45 AM',
    date: '24 May 2024',
    type: 'Follow-up',
    status: 'Scheduled',
    location: 'Clinic',
    avatar: 'https://picsum.photos/seed/p3/100',
    age: 29,
    gender: 'Male',
    reason: 'Post-operative checkup on left knee.',
    bookingId: '#B-82912',
    phone: '+1 (555) 001-6677',
    paymentStatus: 'Paid'
  },
  {
    id: 'APT-104',
    patientName: 'Emily Blunt',
    time: '02:00 PM',
    date: '25 May 2024',
    type: 'General Checkup',
    status: 'Pending',
    location: 'Online',
    avatar: 'https://picsum.photos/seed/p4/100',
    age: 41,
    gender: 'Female',
    reason: 'Initial consultation regarding chronic fatigue.',
    bookingId: '#B-82913',
    phone: '+1 (555) 001-8899',
    paymentStatus: 'Unpaid'
  },
  {
    id: 'APT-105',
    patientName: 'Marcus Wright',
    time: '04:30 PM',
    date: '25 May 2024',
    type: 'Emergency',
    status: 'Scheduled',
    location: 'Clinic',
    avatar: 'https://picsum.photos/seed/p5/100',
    age: 52,
    gender: 'Male',
    reason: 'Acute lower back pain after lifting weights.',
    bookingId: '#B-82914',
    phone: '+1 (555) 002-1122',
    paymentStatus: 'Paid'
  },
  {
    id: 'APT-106',
    patientName: 'Julia Roberts',
    time: '09:00 AM',
    date: '26 May 2024',
    type: 'Follow-up',
    status: 'Cancelled',
    location: 'Online',
    avatar: 'https://picsum.photos/seed/p6/100',
    age: 38,
    gender: 'Female',
    reason: 'Allergy test results discussion.',
    bookingId: '#B-82915',
    phone: '+1 (555) 002-3344',
    paymentStatus: 'Paid'
  }
];

const AppointmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Today' | 'Upcoming' | 'Completed' | 'Cancelled'>('Today');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const tabs = [
    { name: 'Today', count: MOCK_APPOINTMENTS.filter(a => a.date === '24 May 2024').length },
    { name: 'Upcoming', count: MOCK_APPOINTMENTS.filter(a => a.status === 'Pending' || (a.status === 'Scheduled' && a.date !== '24 May 2024')).length },
    { name: 'Completed', count: MOCK_APPOINTMENTS.filter(a => a.status === 'Completed').length },
    { name: 'Cancelled', count: MOCK_APPOINTMENTS.filter(a => a.status === 'Cancelled').length }
  ];

  const filteredAppointments = useMemo(() => {
    return MOCK_APPOINTMENTS.filter(apt => {
      const matchesSearch = apt.patientName.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      switch (activeTab) {
        case 'Today':
          return apt.date === '24 May 2024';
        case 'Upcoming':
          return apt.status === 'Pending' || (apt.status === 'Scheduled' && apt.date !== '24 May 2024');
        case 'Completed':
          return apt.status === 'Completed';
        case 'Cancelled':
          return apt.status === 'Cancelled';
        default:
          return true;
      }
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Appointments</h2>
          <p className="text-slate-500">Manage and track all patient bookings</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2EB8A1] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search patient..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#2EB8A1] focus:border-transparent transition-all w-full md:w-64 outline-none"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all">
            <Filter size={20} />
          </button>
          <button className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all">
            <Calendar size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all font-medium text-sm">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Segmented Control Tabs */}
      <div className="bg-slate-100/50 p-1.5 rounded-2xl inline-flex w-full md:w-auto mb-8 border border-slate-200/50">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name as any)}
            className={`flex items-center gap-3 px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex-1 md:flex-none justify-center
              ${activeTab === tab.name 
                ? 'bg-white text-slate-900 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800'
              }`}
          >
            {tab.name}
            <span className={`px-2 py-0.5 rounded-md text-[10px] ${activeTab === tab.name ? 'bg-[#F0FDF9] text-[#2EB8A1]' : 'bg-slate-200 text-slate-500'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      {filteredAppointments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAppointments.map((apt) => (
            <AppointmentCard 
              key={apt.id} 
              appointment={apt} 
              onClick={() => setSelectedAppointment(apt)} 
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-300">
            <Calendar size={48} strokeWidth={1} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">No appointments scheduled yet</h3>
          <p className="text-slate-500 max-w-xs mx-auto mb-8">It looks like there's nothing on your list for this category at the moment.</p>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2EB8A1] text-white hover:bg-[#26a08c] transition-all font-bold shadow-lg shadow-[#2EB8A1]/20">
            <Plus size={20} />
            <span>Set Availability</span>
          </button>
        </div>
      )}

      {/* Detail Drawer */}
      <AppointmentDrawer 
        appointment={selectedAppointment} 
        onClose={() => setSelectedAppointment(null)} 
      />
    </div>
  );
};

export default AppointmentsPage;
