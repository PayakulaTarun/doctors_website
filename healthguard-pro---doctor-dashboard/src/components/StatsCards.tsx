import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Calendar, Users, Video, DollarSign, ArrowUpRight } from 'lucide-react';
import api from '../lib/api';

const StatsCards: React.FC = () => {
    const { data: stats, isLoading, isError } = useQuery({
        queryKey: ['doctorStats'],
        queryFn: async () => {
            const { data } = await api.get('/doctor/stats');
            return data;
        },
        refetchInterval: 60000 // Refresh every minute
    });

    const cards = [
        {
            title: "Today's Appointments",
            value: isLoading ? "..." : stats?.today_appointments ?? 0,
            change: "Updated just now", // In real version compare with yesterday
            icon: <Calendar className="text-blue-500" size={24} />,
            bg: "bg-blue-50",
            trend: "neutral"
        },
        {
            title: "Total Patients",
            value: isLoading ? "..." : stats?.total_patients ?? 0,
            change: "All time unique",
            icon: <Users className="text-[#2EB8A1]" size={24} />,
            bg: "bg-emerald-50",
            trend: "up"
        },
        {
            title: "Upcoming Consultations",
            value: isLoading ? "..." : stats?.upcoming_consultations ?? 0,
            change: "Scheduled",
            icon: <Video className="text-purple-500" size={24} />,
            bg: "bg-purple-50",
            trend: "neutral"
        },
        {
            title: "Today's Earnings",
            value: isLoading ? "..." : `$${stats?.today_earnings ?? 0}`,
            change: "Est. based on bookings",
            icon: <DollarSign className="text-orange-500" size={24} />,
            bg: "bg-orange-50",
            trend: "up"
        }
    ];

    if (isError) {
        return <div className="p-4 text-red-500 bg-red-50 rounded-lg">Failed to load Dashboard KPIs.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {cards.map((stat, idx) => (
                <div
                    key={idx}
                    className="bg-white premium-radius p-6 border border-slate-100 custom-shadow group hover:border-[#2EB8A1] transition-all cursor-pointer"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${stat.bg}`}>
                            {stat.icon}
                        </div>
                        <div className="p-1 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-[#2EB8A1] group-hover:text-white transition-all">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                    <h3 className="text-slate-500 text-sm font-medium mb-1">{stat.title}</h3>
                    <p className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</p>
                    <p className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-slate-400'}`}>
                        {stat.change}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default StatsCards;
