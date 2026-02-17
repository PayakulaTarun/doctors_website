
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 900 },
  { name: 'Sun', value: 1100 },
];

const EarningsChart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex gap-2 mb-6">
        {['Today', 'Week', 'Month'].map((tab) => (
          <button 
            key={tab}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${tab === 'Week' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="h-[180px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2EB8A1" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2EB8A1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#94a3b8' }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                fontSize: '12px'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#2EB8A1" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-[#F0FDF9] flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider font-bold text-[#2EB8A1] mb-1">Total Balance</p>
          <p className="text-xl font-bold text-slate-900">$12,840.50</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 mb-1">+14.2%</p>
          <p className="text-xs text-slate-500 font-medium">vs last week</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
