
import React, { useState } from 'react';
import { Star, Search, Filter, MessageSquare, ThumbsUp, AlertCircle, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';

const MOCK_REVIEWS = [
  { id: '1', patient: 'Emily Stone', avatar: 'https://picsum.photos/seed/p10/100', rating: 5, text: 'Dr. Sarah was extremely patient and explained my condition in detail. The treatment plan is working perfectly!', type: 'Video Consult', date: '2 hours ago', replied: true },
  { id: '2', patient: 'James Wilson', avatar: 'https://picsum.photos/seed/p11/100', rating: 4, text: 'Great experience, though the clinic wait time was a bit longer than expected. Doctor is top notch.', type: 'Clinic Visit', date: 'Yesterday', replied: false },
  { id: '3', patient: 'Sarah Connor', avatar: 'https://picsum.photos/seed/p12/100', rating: 5, text: 'Very professional. I felt heard and cared for throughout the consultation.', type: 'Follow-up', date: '2 days ago', replied: true },
  { id: '4', patient: 'Michael Scott', avatar: 'https://picsum.photos/seed/p13/100', rating: 3, text: 'Doctor was good but the prescription was hard to read. Had to call back for clarification.', type: 'General Checkup', date: '3 days ago', replied: false },
];

const ReviewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [replyId, setReplyId] = useState<string | null>(null);

  const starStats = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Reviews & Ratings</h2>
          <p className="text-slate-500 text-sm">Monitor your patient feedback and reputation</p>
        </div>
      </div>

      {/* 1. RATING SUMMARY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow flex flex-col items-center justify-center text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Overall Rating</p>
          <div className="text-6xl font-black text-slate-900 mb-2">4.8</div>
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} fill="#2EB8A1" className="text-[#2EB8A1]" />
            ))}
          </div>
          <p className="text-slate-500 text-sm font-medium">Based on 1,284 patient reviews</p>
        </div>

        <div className="lg:col-span-2 bg-white premium-radius p-8 border border-slate-100 custom-shadow">
          <div className="space-y-4">
            {starStats.map((stat) => (
              <div key={stat.stars} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-12">
                  <span className="text-sm font-bold text-slate-600">{stat.stars}</span>
                  <Star size={14} fill="#cbd5e1" className="text-slate-300" />
                </div>
                <div className="flex-1 h-2.5 bg-slate-50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#2EB8A1] rounded-full transition-all duration-1000" 
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
                <div className="w-10 text-right">
                  <span className="text-sm font-bold text-slate-400">{stat.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Reviews', value: '1,284', icon: <MessageSquare size={20} />, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'This Month', value: '+42', icon: <TrendingUp size={20} />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Positive Rate', value: '96.2%', icon: <CheckCircle2 size={20} />, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Response Rate', value: '84%', icon: <BarChart3 size={20} />, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white premium-radius p-6 border border-slate-100 custom-shadow">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-bold text-slate-900 leading-tight">{stat.value}</p>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 3. FILTER & LIST */}
      <div className="bg-white premium-radius border border-slate-100 custom-shadow overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by patient name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#2EB8A1] outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-slate-50 border-none rounded-xl py-2.5 px-4 text-sm font-bold text-slate-600 outline-none">
              <option>All Ratings</option>
              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars & Below</option>
            </select>
            <button className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-600">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="divide-y divide-slate-50">
          {MOCK_REVIEWS.map((review) => (
            <div key={review.id} className="p-8 hover:bg-[#F1FDFB] transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src={review.avatar} className="w-12 h-12 rounded-2xl object-cover" alt="" />
                  <div>
                    <h4 className="font-bold text-slate-900">{review.patient}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star 
                            key={s} 
                            size={12} 
                            fill={s <= review.rating ? "#F59E0B" : "transparent"} 
                            className={s <= review.rating ? "text-orange-400" : "text-slate-200"} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{review.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-lg bg-slate-100 text-[10px] font-bold text-slate-500 uppercase">
                    {review.type}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">
                {review.text}
              </p>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setReplyId(replyId === review.id ? null : review.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${review.replied ? 'bg-emerald-50 text-emerald-600' : 'bg-[#2EB8A1] text-white shadow-lg shadow-[#2EB8A1]/20 hover:bg-[#26a08c]'}`}
                >
                  {review.replied ? <CheckCircle2 size={14} /> : <MessageSquare size={14} />}
                  {review.replied ? 'Replied' : 'Reply to Review'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-600 text-xs font-bold transition-all">
                  <ThumbsUp size={14} /> Mark Helpful
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-400 hover:text-red-500 text-xs font-bold transition-all">
                  <AlertCircle size={14} /> Report
                </button>
              </div>

              {replyId === review.id && (
                <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
                  <textarea 
                    placeholder="Write your professional response..."
                    className="w-full h-32 p-4 bg-white border border-slate-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#2EB8A1] transition-all resize-none mb-3"
                  />
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => setReplyId(null)}
                      className="px-6 py-2 rounded-xl text-slate-500 text-sm font-bold hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button className="px-6 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 shadow-lg">
                      Send Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-50/50 text-center">
          <button className="text-sm font-bold text-[#2EB8A1] hover:underline">
            Load more reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
