
import React, { useState } from 'react';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  ChevronDown, 
  MoreHorizontal, 
  Clock, 
  Coffee, 
  Ban,
  Save,
  Eye,
  Check
} from 'lucide-react';
import { DaySchedule, TimeSlot } from '../types';

const INITIAL_SCHEDULE: DaySchedule[] = [
  { day: 'Mon', isEnabled: true, slots: [{ id: '1', startTime: '09:00', endTime: '13:00', type: 'Available' }, { id: '2', startTime: '14:00', endTime: '18:00', type: 'Available' }] },
  { day: 'Tue', isEnabled: true, slots: [{ id: '3', startTime: '09:00', endTime: '18:00', type: 'Available' }] },
  { day: 'Wed', isEnabled: true, slots: [{ id: '4', startTime: '09:00', endTime: '18:00', type: 'Available' }] },
  { day: 'Thu', isEnabled: true, slots: [{ id: '5', startTime: '09:00', endTime: '18:00', type: 'Available' }] },
  { day: 'Fri', isEnabled: true, slots: [{ id: '6', startTime: '09:00', endTime: '16:00', type: 'Available' }] },
  { day: 'Sat', isEnabled: false, slots: [] },
  { day: 'Sun', isEnabled: false, slots: [] },
];

const SchedulePage: React.FC = () => {
  const [schedule, setSchedule] = useState<DaySchedule[]>(INITIAL_SCHEDULE);
  const [view, setView] = useState<'Week' | 'Day'>('Week');
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleDay = (dayIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].isEnabled = !newSchedule[dayIndex].isEnabled;
    setSchedule(newSchedule);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* LEFT SECTION: SMART CALENDAR PANEL */}
        <div className="flex-1 space-y-6">
          <div className="bg-white premium-radius p-6 border border-slate-200 custom-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all">
                    May 2024 <ChevronDown size={16} />
                  </button>
                </div>
                <div className="bg-slate-100 p-1 rounded-xl flex items-center">
                  <button 
                    onClick={() => setView('Week')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${view === 'Week' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Week
                  </button>
                  <button 
                    onClick={() => setView('Day')}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${view === 'Day' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                  >
                    Day
                  </button>
                </div>
              </div>

              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#2EB8A1] text-[#2EB8A1] hover:bg-[#F0FDF9] transition-all font-bold text-sm">
                <Plus size={18} />
                <span>Add Slot</span>
              </button>
            </div>

            {/* Premium Calendar Grid */}
            <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden mb-6">
              {schedule.map((day, idx) => (
                <div key={day.day} className={`min-h-[500px] bg-white p-4 flex flex-col ${!day.isEnabled ? 'bg-slate-50/50' : ''}`}>
                  <div className="text-center mb-6">
                    <p className={`text-[11px] font-bold uppercase tracking-widest ${day.isEnabled ? 'text-slate-400' : 'text-slate-300'}`}>
                      {day.day}
                    </p>
                    <p className={`text-xl font-bold mt-1 ${day.isEnabled ? 'text-slate-900' : 'text-slate-300'}`}>
                      {20 + idx}
                    </p>
                  </div>

                  <div className="flex-1 space-y-3">
                    {!day.isEnabled ? (
                      <div className="flex flex-col items-center justify-center h-full gap-2 text-slate-300">
                        <Ban size={24} />
                        <span className="text-[10px] font-bold uppercase">Closed</span>
                      </div>
                    ) : (
                      <>
                        {day.slots.map(slot => (
                          <div 
                            key={slot.id} 
                            className={`p-3 rounded-xl border border-transparent cursor-pointer group hover:border-[#2EB8A1] transition-all
                              ${slot.type === 'Available' ? 'bg-[#F0FDF9] text-[#2EB8A1]' : 'bg-orange-50 text-orange-600'}`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold uppercase">{slot.type}</span>
                              <MoreHorizontal size={14} className="text-slate-300 group-hover:text-[#2EB8A1]" />
                            </div>
                            <p className="text-xs font-bold text-slate-800">{slot.startTime} - {slot.endTime}</p>
                          </div>
                        ))}
                        {/* Interactive Drag Target Simulation */}
                        <div className="h-16 border-2 border-dashed border-slate-100 rounded-xl hover:border-[#2EB8A1]/30 hover:bg-[#F0FDF9]/30 transition-all flex items-center justify-center cursor-pointer text-slate-300 hover:text-[#2EB8A1]">
                           <Plus size={16} />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#2EB8A1]"></div>
                <span className="text-xs font-medium text-slate-500">Available Slots</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <span className="text-xs font-medium text-slate-500">Lunch Break</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-xs font-medium text-slate-500">Blocked / Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: CONTROL PANEL */}
        <div className="w-full xl:w-[380px] space-y-6">
          {/* Working Days Card */}
          <div className="bg-white premium-radius p-6 border border-slate-200 custom-shadow">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CalendarIcon size={16} className="text-[#2EB8A1]" /> Working Days
            </h3>
            <div className="flex flex-wrap gap-2">
              {schedule.map((day, idx) => (
                <button
                  key={day.day}
                  onClick={() => toggleDay(idx)}
                  className={`w-11 h-11 rounded-xl font-bold text-xs transition-all flex items-center justify-center
                    ${day.isEnabled 
                      ? 'bg-[#2EB8A1] text-white shadow-md shadow-[#2EB8A1]/20' 
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                    }`}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot Creator */}
          <div className="bg-white premium-radius p-6 border border-slate-200 custom-shadow">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock size={16} className="text-[#2EB8A1]" /> Create Time Slot
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Start Time</label>
                  <input type="time" defaultValue="09:00" className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm font-bold text-slate-700 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">End Time</label>
                  <input type="time" defaultValue="18:00" className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm font-bold text-slate-700 outline-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Consultation Type</label>
                <select className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm font-bold text-slate-700 outline-none appearance-none">
                  <option>General Checkup</option>
                  <option>Video Consultation</option>
                  <option>Surgery</option>
                </select>
              </div>
              <button className="w-full py-3 rounded-xl border-2 border-[#2EB8A1] text-[#2EB8A1] font-bold text-xs hover:bg-[#F0FDF9] transition-all mt-2">
                + Add Time Range
              </button>
            </div>
          </div>

          {/* Break & Block Panel */}
          <div className="bg-white premium-radius p-6 border border-slate-200 custom-shadow">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Coffee size={16} className="text-orange-500" /> Breaks & Closures
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-800">Daily Lunch Break</p>
                  <p className="text-[10px] text-orange-600 font-medium">13:00 - 14:00</p>
                </div>
                <button className="text-slate-400 hover:text-red-500 transition-colors">
                  <Ban size={16} />
                </button>
              </div>
              
              <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-600 font-bold text-xs hover:bg-slate-100 transition-all border border-slate-200 border-dashed">
                + Add Custom Break
              </button>

              <div className="pt-4 border-t border-slate-100">
                 <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3">Blocked Dates</h4>
                 <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg border border-red-100">
                      May 30 - Surgery Day
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg border border-red-100">
                      Jun 12 - Vacation
                    </span>
                 </div>
              </div>
            </div>
          </div>

          {/* Sticky Save Actions */}
          <div className="sticky bottom-8 z-20">
            <div className="bg-slate-900 rounded-2xl p-4 shadow-xl shadow-slate-900/30 space-y-3">
               <button 
                onClick={handleSave}
                disabled={isSaving}
                className="w-full py-3.5 rounded-xl bg-[#2EB8A1] text-white font-bold text-sm hover:bg-[#26a08c] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
               >
                 {isSaving ? (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                 ) : (
                   <><Save size={18} /> Save Availability</>
                 )}
               </button>
               <button className="w-full py-3.5 rounded-xl border border-white/10 text-white/70 font-bold text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                 <Eye size={18} /> Preview Patient View
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Check size={14} />
             </div>
             <p className="font-bold text-sm">Schedule updated successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulePage;
