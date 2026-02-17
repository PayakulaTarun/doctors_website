
import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  Calendar, 
  Download, 
  Wallet, 
  MoreVertical, 
  Eye, 
  FileText, 
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { Transaction } from '../types';

const MOCK_EARNINGS_DATA = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1100 },
];

const REVENUE_BREAKDOWN = [
  { name: 'Video Consultations', value: 45, color: '#2EB8A1' },
  { name: 'Clinic Visits', value: 30, color: '#3B82F6' },
  { name: 'Follow-ups', value: 15, color: '#F59E0B' },
  { name: 'Emergency Slots', value: 10, color: '#EF4444' },
];

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'TX-9021', patientName: 'John Cooper', avatar: 'https://picsum.photos/seed/p1/100', date: 'May 24, 2024', type: 'Video', amount: 120, status: 'Completed' },
  { id: 'TX-9022', patientName: 'Sarah Miller', avatar: 'https://picsum.photos/seed/p2/100', date: 'May 24, 2024', type: 'Clinic', amount: 150, status: 'Completed' },
  { id: 'TX-9023', patientName: 'Mike Ross', avatar: 'https://picsum.photos/seed/p3/100', date: 'May 23, 2024', type: 'Follow-up', amount: 80, status: 'Pending' },
  { id: 'TX-9024', patientName: 'Emma Watson', avatar: 'https://picsum.photos/seed/p4/100', date: 'May 22, 2024', type: 'Emergency', amount: 200, status: 'Completed' },
  { id: 'TX-9025', patientName: 'David Blake', avatar: 'https://picsum.photos/seed/p5/100', date: 'May 21, 2024', type: 'Clinic', amount: 150, status: 'Refunded' },
];

const EarningsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Weekly');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* 1. EARNINGS HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Earnings</h2>
          <p className="text-slate-500 text-sm">Track consultations, payments & payouts</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold text-slate-600 cursor-pointer hover:bg-slate-50 transition-all">
            <Calendar size={16} className="mr-2 text-slate-400" />
            May 1 - May 31, 2024
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 font-bold text-sm transition-all">
            <Download size={18} />
            <span>Download</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2EB8A1] text-white hover:bg-[#26a08c] font-bold text-sm transition-all shadow-lg shadow-[#2EB8A1]/20">
            <Wallet size={18} />
            <span>Request Payout</span>
          </button>
        </div>
      </div>

      {/* 2. INCOME SUMMARY (4 PREMIUM CARDS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Earnings', value: '$24,850.00', icon: <DollarSign size={20} />, trend: '+12.5%', bg: 'bg-emerald-50', color: 'text-emerald-600' },
          { label: 'This Month', value: '$8,240.50', icon: <TrendingUp size={20} />, trend: '+8.2%', bg: 'bg-blue-50', color: 'text-blue-600' },
          { label: "Today's Income", value: '$450.00', icon: <Calendar size={20} />, trend: '+2.4%', bg: 'bg-orange-50', color: 'text-orange-600' },
          { label: 'Pending Payout', value: '$1,240.00', icon: <Wallet size={20} />, trend: 'Next: Jun 01', bg: 'bg-purple-50', color: 'text-purple-600' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white premium-radius p-6 border border-slate-100 custom-shadow hover:translate-y-[-4px] transition-all duration-300">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-3xl font-bold text-slate-900 leading-tight mb-2">{stat.value}</p>
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${stat.color} ${stat.bg}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3. EARNINGS GRAPH CARD */}
        <div className="lg:col-span-2 bg-white premium-radius p-6 border border-slate-100 custom-shadow">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-800">Earnings Overview</h3>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {['Daily', 'Weekly', 'Monthly'].map((range) => (
                <button 
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${timeRange === range ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_EARNINGS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    fontSize: '14px',
                    fontWeight: '700'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2EB8A1" 
                  strokeWidth={4}
                  dot={{ r: 6, fill: '#2EB8A1', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 8, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-50">
             <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">124</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Consultations</p>
             </div>
             <div className="text-center border-l border-slate-100">
                <p className="text-2xl font-bold text-slate-900">$198.50</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Avg. Fee</p>
             </div>
          </div>
        </div>

        {/* 6. REVENUE BREAKDOWN */}
        <div className="bg-white premium-radius p-6 border border-slate-100 custom-shadow flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue Breakdown</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={REVENUE_BREAKDOWN}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {REVENUE_BREAKDOWN.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-3 mt-6">
            {REVENUE_BREAKDOWN.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs font-semibold text-slate-600">{item.name}</span>
                </div>
                <span className="text-xs font-bold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 4. TRANSACTIONS TABLE */}
        <div className="lg:col-span-2 bg-white premium-radius border border-slate-100 custom-shadow overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800">Recent Transactions</h3>
            <button className="text-xs font-bold text-[#2EB8A1] hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">👤 Patient</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">📅 Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">💻 Type</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">💰 Amount</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase">📌 Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase text-right">⚡ Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {MOCK_TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="group hover:bg-[#F1FDFB] transition-all cursor-pointer h-[72px]">
                    <td className="px-6">
                      <div className="flex items-center gap-3">
                        <img src={tx.avatar} className="w-9 h-9 rounded-xl object-cover" alt="" />
                        <p className="text-sm font-bold text-slate-800">{tx.patientName}</p>
                      </div>
                    </td>
                    <td className="px-6 text-xs font-medium text-slate-500">{tx.date}</td>
                    <td className="px-6 text-xs font-bold text-slate-700">{tx.type}</td>
                    <td className="px-6 text-sm font-bold text-slate-900">${tx.amount}</td>
                    <td className="px-6">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase ${
                        tx.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 
                        tx.status === 'Pending' ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 text-right">
                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                          <button className="p-2 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-[#2EB8A1] transition-all">
                             <Eye size={16} />
                          </button>
                          <button className="p-2 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-[#2EB8A1] transition-all">
                             <FileText size={16} />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. PAYOUT MANAGEMENT CARD */}
        <div className="bg-white premium-radius p-6 border border-slate-100 custom-shadow flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Payout Management</h3>
          <div className="bg-[#F0FDF9] rounded-2xl p-6 mb-8 border border-[#2EB8A1]/10">
             <p className="text-[10px] font-bold text-[#2EB8A1] uppercase tracking-widest mb-1">Available Balance</p>
             <h4 className="text-4xl font-bold text-slate-900 mb-4">$12,840.50</h4>
             <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Calendar size={14} /> Next payout: June 01, 2024
             </div>
          </div>

          <div className="space-y-6 flex-1">
             <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <CreditCard size={20} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-800">Bank of America</p>
                      <p className="text-[10px] text-slate-400 font-medium">**** 8291</p>
                   </div>
                </div>
                <ArrowRight size={16} className="text-slate-300" />
             </div>

             <div className="space-y-4">
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payout History</h5>
                {[
                  { date: 'May 15', amount: '$4,200', status: 'Paid' },
                  { date: 'May 01', amount: '$5,150', status: 'Paid' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                     <span className="text-slate-500 font-medium">{item.date}</span>
                     <span className="font-bold text-slate-800">{item.amount}</span>
                     <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{item.status}</span>
                  </div>
                ))}
             </div>
          </div>

          <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all mt-8 flex items-center justify-center gap-2">
             Request Withdrawal <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsPage;
