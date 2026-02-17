import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Sparkles, Loader2, Video, FileText } from 'lucide-react';
import api from '../lib/api';
import { getClinicalSummary } from '../services/geminiService';

const ScheduleList: React.FC = () => {
  const [generatingId, setGeneratingId] = useState<number | null>(null);
  const [summaries, setSummaries] = useState<Record<number, any>>({});
  const [error, setError] = useState<string | null>(null);

  const { data: appointments, isLoading, isError } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const { data } = await api.get('/appointments/');
      return data;
    },
    refetchInterval: 30000
  });

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-emerald-50 text-emerald-600';
      case 'in_progress': return 'bg-blue-50 text-blue-600';
      case 'scheduled': return 'bg-orange-50 text-orange-600';
      case 'cancelled': return 'bg-red-50 text-red-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  const handleGenerateSummary = async (appointmentId: number, notes: string) => {
    setGeneratingId(appointmentId);
    setError(null);
    try {
      const result = await getClinicalSummary(appointmentId, notes || "No notes provided. Please analyze patient history.");
      setSummaries(prev => ({ ...prev, [appointmentId]: result }));
    } catch (err: any) {
      if (err.response?.status === 429) {
        setError("Rate limit exceeded. Please wait a moment.");
      } else {
        setError("Failed to generate summary.");
      }
    } finally {
      setGeneratingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-16 bg-slate-100 rounded-xl w-full"></div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 text-sm p-4 text-center">Failed to load schedule.</div>;
  }

  if (!appointments || appointments.length === 0) {
    return <div className="text-slate-400 text-sm p-4 text-center">No appointments scheduled today.</div>;
  }

  return (
    <div className="overflow-x-auto">
      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg">{error}</div>}

      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-50">
            <th className="pb-4 font-semibold">Time</th>
            <th className="pb-4 font-semibold">Patient ID</th>
            <th className="pb-4 font-semibold">Status</th>
            <th className="pb-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {appointments.map((apt: any) => (
            <React.Fragment key={apt.id}>
              <tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="py-5">
                  <span className="text-sm font-semibold text-slate-700">{apt.appointment_time}</span>
                </td>
                <td className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                      P{apt.patient_id}
                    </div>
                    <span className="text-sm font-bold text-slate-900">Patient #{apt.patient_id}</span>
                  </div>
                </td>
                <td className="py-5">
                  <span className={`px-3 py-1.5 rounded-lg text-xs font-bold ${getStatusStyle(apt.status)}`}>
                    {apt.status}
                  </span>
                </td>
                <td className="py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      title="AI Summary"
                      onClick={() => handleGenerateSummary(apt.id, apt.notes)}
                      disabled={generatingId === apt.id}
                      className="p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors"
                    >
                      {generatingId === apt.id ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                    </button>
                    <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
                      <button title="Start Consultation" className="p-2 rounded-lg bg-[#2EB8A1] text-white hover:bg-[#26a08c] transition-colors">
                        <Video size={16} />
                      </button>
                      <button title="View Details" className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                        <FileText size={16} />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
              {summaries[apt.id] && (
                <tr>
                  <td colSpan={4} className="pb-6">
                    <div className="mx-4 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-sm animate-in fade-in slide-in-from-top-2">
                      <div className="flex gap-2 items-center mb-2 font-bold text-indigo-900 uppercase text-xs tracking-wider">
                        <Sparkles size={12} /> AI Clinical Summary
                      </div>
                      <p className="text-slate-700 mb-3">{summaries[apt.id].summary}</p>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-xs font-bold text-slate-500 mb-1">Key Symptoms</span>
                          <div className="flex flex-wrap gap-1">
                            {summaries[apt.id].key_symptoms.map((s: string, i: number) => (
                              <span key={i} className="px-2 py-0.5 bg-white border border-indigo-100 rounded text-xs text-indigo-600">{s}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-slate-500 mb-1">Suggested Actions</span>
                          <ul className="list-disc list-inside text-xs text-slate-600">
                            {summaries[apt.id].suggested_actions.map((a: string, i: number) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleList;
