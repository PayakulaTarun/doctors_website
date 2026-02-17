
import React from 'react';
import { User, Phone, Mail, MapPin, Award, BookOpen, Globe, ShieldCheck, Edit3, Eye, CheckCircle2, MoreVertical } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* LEFT PANEL: PROFILE CARD */}
        <div className="w-full xl:w-[400px] space-y-6">
          <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-[#F0FDF9]"></div>
            
            <div className="relative text-center mt-6">
              <div className="relative inline-block mb-4">
                <img 
                  src="https://picsum.photos/seed/doc/200" 
                  alt="Dr. Sarah" 
                  className="w-32 h-32 rounded-[40px] object-cover ring-8 ring-white shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 text-white rounded-full border-4 border-white shadow-lg">
                  <ShieldCheck size={18} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Dr. Sarah Jenkins</h3>
              <p className="text-[#2EB8A1] font-bold text-sm uppercase tracking-widest mt-1">General Physician</p>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-800">10+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Exp Yrs</p>
                </div>
                <div className="w-px h-8 bg-slate-100"></div>
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-800">1.2k</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Patients</p>
                </div>
                <div className="w-px h-8 bg-slate-100"></div>
                <div className="text-center">
                  <p className="text-xl font-bold text-slate-800">4.8</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Rating</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full py-3.5 rounded-2xl bg-[#2EB8A1] text-white font-bold text-sm hover:bg-[#26a08c] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#2EB8A1]/20">
                  <Edit3 size={18} /> Edit Profile
                </button>
                <button className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  <Eye size={18} /> Preview Public View
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white premium-radius p-6 border border-slate-100 custom-shadow">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center justify-between">
              Profile Completion
              <span className="text-[#2EB8A1]">85%</span>
            </h4>
            <div className="h-2 bg-slate-50 rounded-full mb-6">
              <div className="h-full bg-[#2EB8A1] rounded-full w-[85%]"></div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Basic Info', done: true },
                { label: 'Medical Certifications', done: true },
                { label: 'Experience Details', done: true },
                { label: 'Clinic Address', done: false },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.done ? 'bg-emerald-50 text-emerald-500' : 'bg-slate-50 text-slate-300'}`}>
                    <CheckCircle2 size={14} />
                  </div>
                  <span className={`text-xs font-bold ${step.done ? 'text-slate-700' : 'text-slate-400'}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: EDITABLE SECTIONS */}
        <div className="flex-1 space-y-8">
          {/* Section: Basic Information */}
          <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <User size={20} />
                </div>
                Basic Information
              </h3>
              <button className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:text-[#2EB8A1] hover:bg-[#F0FDF9] transition-all">
                <Edit3 size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Full Name</p>
                <p className="text-sm font-bold text-slate-800">Dr. Sarah Jenkins</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Speciality</p>
                <p className="text-sm font-bold text-slate-800">General Physician, Internal Medicine</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Bio</p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Experienced General Physician with over 10 years in clinical practice. Specialized in internal medicine and cardiovascular health. Committed to providing holistic care through telemedicine and in-person consultations.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Contact & Clinic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  Contact Info
                </h3>
                <button className="text-xs font-bold text-[#2EB8A1]">Edit</button>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400"><Mail size={16} /></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                    <p className="text-xs font-bold text-slate-800">sarah.jenkins@healthguard.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400"><Phone size={16} /></div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                    <p className="text-xs font-bold text-slate-800">+1 (555) 829-1000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  Clinic Details
                </h3>
                <button className="text-xs font-bold text-[#2EB8A1]">Edit</button>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                  <p className="text-xs font-bold text-slate-800 leading-relaxed">
                    124 Healthcare Avenue, Suite 402<br />
                    Central District, NY 10001
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Consult Fee</p>
                    <p className="text-sm font-bold text-[#2EB8A1]">$150.00</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Follow-up</p>
                    <p className="text-sm font-bold text-slate-800">$80.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Certifications & Experience */}
          <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award size={20} />
                </div>
                Certifications & Education
              </h3>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-all">
                Add New
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-400 shadow-sm">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Doctor of Medicine (MD)</h5>
                  <p className="text-xs text-slate-500 font-medium">Harvard Medical School • 2010 - 2014</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-400 shadow-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-sm">Board Certified in Internal Medicine</h5>
                  <p className="text-xs text-slate-500 font-medium">American Board of Internal Medicine • 2016</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Languages */}
          <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow">
             <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe size={18} />
                </div>
                Languages Spoken
             </h3>
             <div className="flex flex-wrap gap-3">
                {['English (Fluent)', 'Spanish (Professional)', 'French (Conversational)'].map(lang => (
                  <span key={lang} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-700">
                    {lang}
                  </span>
                ))}
                <button className="px-4 py-2 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 text-xs font-bold hover:bg-slate-50 hover:border-[#2EB8A1] transition-all">
                  + Add Language
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
