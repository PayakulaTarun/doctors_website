
import React from 'react';
import { 
  Users, 
  Stethoscope, 
  CalendarCheck, 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus
} from 'lucide-react';
import { Card, Button, StatusChip } from '../components/UI';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Mon', revenue: 4000, users: 2400 },
  { name: 'Tue', revenue: 3000, users: 1398 },
  { name: 'Wed', revenue: 2000, users: 9800 },
  { name: 'Thu', revenue: 2780, users: 3908 },
  { name: 'Fri', revenue: 1890, users: 4800 },
  { name: 'Sat', revenue: 2390, users: 3800 },
  { name: 'Sun', revenue: 3490, users: 4300 },
];

const StatCard: React.FC<{ 
  label: string; 
  value: string; 
  change: string; 
  isPositive: boolean; 
  icon: React.ElementType;
  iconBg: string;
}> = ({ label, value, change, isPositive, icon: Icon, iconBg }) => (
  <Card className="flex items-center justify-between group hover:border-primary transition-colors cursor-default">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <div className={`flex items-center gap-1 mt-2 text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
        <span className="text-gray-400 font-normal ml-1">vs last week</span>
      </div>
    </div>
    <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={28} />
    </div>
  </Card>
);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">System Overview</h2>
          <p className="text-gray-500">Welcome back, Super Admin. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => navigate('/admin/doctors/approvals')}>
            <Clock size={18} className="mr-2" />
            Pending Approvals (12)
          </Button>
          <Button onClick={() => navigate('/admin/plans')}>
            <Plus size={18} className="mr-2" />
            Create Plan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard label="Total Doctors" value="1,284" change="+12%" isPositive icon={Stethoscope} iconBg="bg-blue-500" />
        <StatCard label="Total Users" value="24.5k" change="+18%" isPositive icon={Users} iconBg="bg-indigo-500" />
        <StatCard label="Today Apps" value="482" change="-5%" isPositive={false} icon={CalendarCheck} iconBg="bg-emerald-500" />
        <StatCard label="Revenue" value="$42,390" change="+24%" isPositive icon={TrendingUp} iconBg="bg-primary" />
        <StatCard label="Approvals" value="12" change="Pending" isPositive icon={Clock} iconBg="bg-amber-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-800 text-lg">Revenue Growth</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold px-3 py-1.5 focus:ring-primary">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2EB8A1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2EB8A1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#2EB8A1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-gray-800 text-lg mb-6">Live Activity</h3>
          <div className="space-y-6">
            {[
              { type: 'Doctor Signup', user: 'Dr. Michael Chen', time: '2 mins ago', color: 'bg-blue-500' },
              { type: 'Payment Received', user: 'Patient #4920', time: '15 mins ago', color: 'bg-green-500' },
              { type: 'Complaint Raised', user: 'Patient #2102', time: '1 hour ago', color: 'bg-red-500' },
              { type: 'Doctor Approved', user: 'Dr. Sarah Smith', time: '2 hours ago', color: 'bg-primary' },
              { type: 'Refund Processed', user: 'Patient #8812', time: '5 hours ago', color: 'bg-amber-500' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${item.color} mt-1.5 relative z-10`}></div>
                  {idx !== 4 && <div className="absolute top-4 left-1.5 w-0.5 h-12 bg-gray-100 -z-0"></div>}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors cursor-pointer">{item.type}</p>
                  <p className="text-xs text-gray-500">{item.user}</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-6 text-xs" onClick={() => navigate('/admin/activity')}>View All Activity</Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
