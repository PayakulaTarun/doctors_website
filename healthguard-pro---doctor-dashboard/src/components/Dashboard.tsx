
import React from 'react';
import StatsCards from './StatsCards';
import ScheduleList from './ScheduleList';
import Timeline from './Timeline';
import EarningsChart from './EarningsChart';
import PatientActivity from './PatientActivity';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Quick Stats Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-800">Overview</h2>
          <button className="text-sm font-semibold text-[#2EB8A1] hover:underline">View Analytics</button>
        </div>
        <StatsCards />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Focus: Today's Schedule */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white premium-radius p-6 border border-slate-100 custom-shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-800">Today's Schedule</h2>
              <button className="text-sm font-medium px-4 py-2 rounded-xl bg-[#F0FDF9] text-[#2EB8A1] hover:bg-[#d9f9ef] transition-colors">
                Add New
              </button>
            </div>
            <ScheduleList />
          </section>

          <section className="bg-white premium-radius p-6 border border-slate-100 custom-shadow">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Upcoming Appointments</h2>
            <Timeline />
          </section>
        </div>

        {/* Secondary Column: Earnings & Activity */}
        <div className="space-y-8">
          <section className="bg-white premium-radius p-6 border border-slate-100 custom-shadow">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Earnings Summary</h2>
            <EarningsChart />
          </section>

          <section className="bg-white premium-radius p-6 border border-slate-100 custom-shadow">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Recent Patients</h2>
            <PatientActivity />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
