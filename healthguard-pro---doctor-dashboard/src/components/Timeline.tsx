
import React from 'react';

const Timeline: React.FC = () => {
  const slots = [
    { time: '09:00', period: 'Morning', title: 'Consultation', name: 'John Cooper', type: 'General', active: true },
    { time: '10:30', period: 'Morning', title: 'Follow-up', name: 'Sarah Miller', type: 'Video', active: false },
    { time: '13:00', period: 'Afternoon', title: 'Routine', name: 'Emma Watson', type: 'General', active: false },
    { time: '15:30', period: 'Afternoon', title: 'Review', name: 'David Blake', type: 'Emergency', active: false },
    { time: '18:00', period: 'Evening', title: 'Checkup', name: 'Mike Ross', type: 'General', active: false },
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2"></div>
      
      <div className="flex justify-between items-center relative overflow-x-auto pb-4 gap-8">
        {slots.map((slot, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[140px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              {slot.period}
            </span>
            
            <div className={`w-4 h-4 rounded-full border-4 border-white z-10 mb-4 shadow-sm transition-all duration-300 ${slot.active ? 'bg-[#2EB8A1] ring-4 ring-[#2EB8A1]/20 scale-125' : 'bg-slate-300 hover:bg-slate-400'}`}></div>
            
            <div className={`p-3 rounded-2xl w-full text-center transition-all ${slot.active ? 'bg-[#F0FDF9] border border-[#2EB8A1]/30 ring-1 ring-[#2EB8A1]/10' : 'bg-slate-50 border border-transparent'}`}>
              <p className="text-xs font-bold text-slate-900">{slot.time}</p>
              <p className="text-[11px] text-slate-500 font-medium truncate">{slot.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
