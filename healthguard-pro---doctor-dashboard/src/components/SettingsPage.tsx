
import React, { useState } from 'react';
import { User, Bell, Clock, CreditCard, Shield, Share2, Mail, Smartphone, Globe, Lock, Key, SmartphoneIcon, LayoutGrid } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Account');

  const tabs = [
    { name: 'Account', icon: <User size={18} /> },
    { name: 'Notifications', icon: <Bell size={18} /> },
    { name: 'Payments', icon: <CreditCard size={18} /> },
    { name: 'Security', icon: <Shield size={18} /> },
    { name: 'Integrations', icon: <Share2 size={18} /> },
  ];

  const ToggleSwitch = ({ checked, label, desc }: { checked: boolean, label: string, desc: string }) => (
    <div className="flex items-center justify-between py-6 first:pt-0 last:pb-0 border-b border-slate-50 last:border-0">
      <div className="max-w-md">
        <h5 className="text-sm font-bold text-slate-800 mb-1">{label}</h5>
        <p className="text-xs text-slate-500 font-medium">{desc}</p>
      </div>
      <button className={`w-12 h-6 rounded-full relative transition-all duration-300 ${checked ? 'bg-[#2EB8A1]' : 'bg-slate-200'}`}>
        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 shadow-sm ${checked ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
          <p className="text-slate-500 text-sm">Manage your workspace preferences and security</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* NAV TABS */}
        <div className="w-full lg:w-72 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all
                ${activeTab === tab.name 
                  ? 'bg-white text-[#2EB8A1] custom-shadow border border-[#F0FDF9]' 
                  : 'text-slate-500 hover:bg-slate-100/50'
                }`}
            >
              <div className={`${activeTab === tab.name ? 'text-[#2EB8A1]' : 'text-slate-400'}`}>
                {tab.icon}
              </div>
              {tab.name}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1">
          <div className="bg-white premium-radius p-8 border border-slate-100 custom-shadow">
            {activeTab === 'Account' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Account Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <input type="text" defaultValue="Dr. Sarah Jenkins" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-slate-800 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Speciality</label>
                    <input type="text" defaultValue="General Physician" className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold text-slate-800 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="email" defaultValue="sarah.j@healthguard.pro" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-800 outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                    <div className="relative">
                      <Smartphone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input type="text" defaultValue="+1 (555) 829-1000" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-800 outline-none" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-50 flex justify-end gap-3">
                   <button className="px-6 py-3 rounded-xl text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all">Discard</button>
                   <button className="px-8 py-3 rounded-xl bg-[#2EB8A1] text-white font-bold text-sm hover:bg-[#26a08c] transition-all shadow-lg shadow-[#2EB8A1]/20">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'Notifications' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Notification Preferences</h3>
                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                  <ToggleSwitch label="Appointment Alerts" desc="Receive real-time notifications for new and rescheduled bookings." checked={true} />
                  <ToggleSwitch label="Review Notifications" desc="Get alerted whenever a patient leaves a rating or review." checked={true} />
                  <ToggleSwitch label="Earnings Report" desc="Weekly summary of your revenue and completed consultations." checked={false} />
                  <ToggleSwitch label="Clinical Summaries" desc="AI notifications for completed session summaries." checked={true} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-10 mb-6">Channel Settings</h3>
                <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                  <ToggleSwitch label="Email Notifications" desc="Major updates sent directly to your inbox." checked={true} />
                  <ToggleSwitch label="SMS / WhatsApp" desc="Instant alerts via mobile messaging." checked={false} />
                  <ToggleSwitch label="Push Notifications" desc="Browser and desktop app alerts." checked={true} />
                </div>
              </div>
            )}

            {activeTab === 'Security' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Security & Privacy</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="p-6 rounded-2xl bg-[#F0FDF9] border border-[#2EB8A1]/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#2EB8A1] shadow-sm"><Lock size={20} /></div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Two-Factor Authentication</h4>
                        <p className="text-xs text-slate-500 font-medium">Add an extra layer of security to your account.</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-[#2EB8A1] text-white text-xs font-bold shadow-lg">Enable</button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Login Activity</h4>
                    <div className="border border-slate-100 rounded-2xl overflow-hidden">
                       <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-all">
                          <div className="flex items-center gap-3">
                             <SmartphoneIcon size={18} className="text-slate-400" />
                             <div>
                                <p className="text-xs font-bold text-slate-800">iPhone 14 Pro • New York, US</p>
                                <p className="text-[10px] text-slate-400 font-medium">Active now • Your current session</p>
                             </div>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Online</span>
                       </div>
                       <div className="p-4 border-t border-slate-50 flex items-center justify-between hover:bg-slate-50 transition-all">
                          <div className="flex items-center gap-3">
                             <LayoutGrid size={18} className="text-slate-400" />
                             <div>
                                <p className="text-xs font-bold text-slate-800">Chrome on macOS • London, UK</p>
                                <p className="text-[10px] text-slate-400 font-medium">Last active: 2 hours ago</p>
                             </div>
                          </div>
                          <button className="text-[10px] font-bold text-red-500 hover:underline">Revoke</button>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900">Change Password</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="password" placeholder="Current Password" className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-slate-200" />
                    <input type="password" placeholder="New Password" className="w-full bg-slate-50 border-none rounded-xl p-3 text-sm outline-none focus:ring-1 focus:ring-slate-200" />
                  </div>
                  <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800">Update Password</button>
                </div>
              </div>
            )}

            {activeTab === 'Integrations' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Third-party Integrations</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { name: 'Google Calendar', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg', desc: 'Sync your consultations with your primary calendar.', connected: true },
                    { name: 'WhatsApp API', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', desc: 'Send automated reminders and medical reports via WhatsApp.', connected: false },
                    { name: 'Zoom Healthcare', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Zoom_app_icon.png', desc: 'High-quality encrypted video consultations.', connected: true },
                  ].map((app) => (
                    <div key={app.name} className="p-6 rounded-2xl border border-slate-100 flex items-center justify-between hover:bg-slate-50 transition-all">
                      <div className="flex items-center gap-5">
                         <img src={app.icon} className="w-10 h-10 object-contain" alt="" />
                         <div>
                            <h4 className="font-bold text-slate-900 text-sm">{app.name}</h4>
                            <p className="text-xs text-slate-500 font-medium">{app.desc}</p>
                         </div>
                      </div>
                      <button className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${app.connected ? 'bg-slate-100 text-slate-500' : 'bg-[#2EB8A1] text-white shadow-lg shadow-[#2EB8A1]/20'}`}>
                        {app.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
