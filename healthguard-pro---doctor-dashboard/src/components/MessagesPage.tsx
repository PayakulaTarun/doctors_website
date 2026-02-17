
import React, { useState } from 'react';
import { 
  Search, 
  Video, 
  Paperclip, 
  MoreVertical, 
  Send, 
  Mic, 
  Image as ImageIcon, 
  FileText, 
  Plus, 
  CheckCheck,
  Phone,
  User,
  Activity,
  Calendar,
  Pill
} from 'lucide-react';
import { Conversation, ChatMessage } from '../types';

const MOCK_CONVERSATIONS: Conversation[] = [
  { id: '1', patientId: 'P-001', patientName: 'Alicia Keys', avatar: 'https://picsum.photos/seed/p1/100', lastMessage: 'Thank you doctor, the pills are working well.', timestamp: '10:25 AM', unreadCount: 2, isOnline: true, consultationType: 'Follow-up' },
  { id: '2', patientId: 'P-002', patientName: 'Robert Fox', avatar: 'https://picsum.photos/seed/p2/100', lastMessage: 'Should I continue the exercises?', timestamp: '09:12 AM', unreadCount: 0, isOnline: false, consultationType: 'General' },
  { id: '3', patientId: 'P-003', patientName: 'Esther Howard', avatar: 'https://picsum.photos/seed/p3/100', lastMessage: 'My lab results came in.', timestamp: 'Yesterday', unreadCount: 0, isOnline: true, consultationType: 'Video Call' },
  { id: '4', patientId: 'P-004', patientName: 'Jenny Wilson', avatar: 'https://picsum.photos/seed/p4/100', lastMessage: 'The rash is spreading.', timestamp: 'Yesterday', unreadCount: 1, isOnline: false, consultationType: 'Emergency' },
  { id: '5', patientId: 'P-005', patientName: 'David Blake', avatar: 'https://picsum.photos/seed/p5/100', lastMessage: 'See you on Monday!', timestamp: '2 days ago', unreadCount: 0, isOnline: false, consultationType: 'Clinic Visit' },
];

const MOCK_MESSAGES: ChatMessage[] = [
  { id: 'm1', text: 'Hello Alicia, how are you feeling today?', timestamp: '10:15 AM', sender: 'doctor', type: 'text' },
  { id: 'm2', text: 'I am feeling much better now. The headache is gone.', timestamp: '10:18 AM', sender: 'patient', type: 'text' },
  { id: 'm3', text: 'That is great news. Have you noticed any other symptoms?', timestamp: '10:20 AM', sender: 'doctor', type: 'text' },
  { id: 'm4', text: 'Not really, just some mild fatigue.', timestamp: '10:22 AM', sender: 'patient', type: 'text' },
  { id: 'm5', text: 'Thank you doctor, the pills are working well.', timestamp: '10:25 AM', sender: 'patient', type: 'text' },
];

const MessagesPage: React.FC = () => {
  const [activeChatId, setActiveChatId] = useState('1');
  const [inputText, setInputText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const activeChat = MOCK_CONVERSATIONS.find(c => c.id === activeChatId) || MOCK_CONVERSATIONS[0];

  return (
    <div className="h-[calc(100vh-140px)] flex bg-white premium-radius border border-slate-200 overflow-hidden shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. LEFT - CHAT LIST PANEL (25%) */}
      <div className="w-1/4 min-w-[280px] border-r border-slate-100 flex flex-col">
        <div className="p-6 border-b border-slate-50">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Messages</h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full bg-slate-50 border-none rounded-xl py-2 pl-9 pr-4 text-sm focus:ring-1 focus:ring-[#2EB8A1] outline-none"
            />
          </div>
        </div>
        
        <div className="flex gap-4 px-6 py-3 border-b border-slate-50 overflow-x-auto no-scrollbar">
          {['All', 'Unread', 'Patients', 'Staff'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold whitespace-nowrap transition-colors ${activeTab === tab ? 'text-[#2EB8A1]' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {MOCK_CONVERSATIONS.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`px-6 py-4 flex items-center gap-3 cursor-pointer transition-all border-l-4 ${activeChatId === chat.id ? 'bg-[#F0FDF9] border-[#2EB8A1]' : 'border-transparent hover:bg-slate-50'}`}
            >
              <div className="relative">
                <img src={chat.avatar} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                {chat.isOnline && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{chat.patientName}</h4>
                  <span className="text-[10px] text-slate-400 font-medium">{chat.timestamp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-slate-500 truncate mr-2">{chat.lastMessage}</p>
                  {chat.unreadCount > 0 && (
                    <span className="bg-[#2EB8A1] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[18px] text-center">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. CENTER - CONVERSATION PANEL (45%) */}
      <div className="flex-1 flex flex-col min-w-[400px]">
        {/* Chat Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={activeChat.avatar} alt="" className="w-10 h-10 rounded-xl object-cover" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{activeChat.patientName}</h3>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${activeChat.isOnline ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {activeChat.isOnline ? 'Online' : 'Offline'} • {activeChat.consultationType}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-[#F0FDF9] text-[#2EB8A1] hover:bg-[#2EB8A1] hover:text-white transition-all">
              <Video size={18} />
            </button>
            <button className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all">
              <Phone size={18} />
            </button>
            <button className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 transition-all">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto bg-slate-50/30 custom-scrollbar space-y-6">
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-400 uppercase">Today</span>
          </div>
          
          {MOCK_MESSAGES.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] ${msg.sender === 'doctor' ? 'order-2 ml-3' : 'order-1 mr-3'}`}>
                <div className={`p-4 rounded-2xl shadow-sm text-sm ${msg.sender === 'doctor' ? 'bg-[#ECFDF5] text-slate-800 rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'}`}>
                  {msg.text}
                </div>
                <div className={`flex items-center gap-1.5 mt-1.5 ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-[10px] text-slate-400 font-medium">{msg.timestamp}</span>
                  {msg.sender === 'doctor' && <CheckCheck size={12} className="text-[#2EB8A1]" />}
                </div>
              </div>
            </div>
          ))}

          {/* Inline Action Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl custom-shadow flex items-center gap-3 group hover:border-[#2EB8A1] cursor-pointer transition-all">
               <div className="p-2 bg-emerald-50 text-emerald-500 rounded-xl group-hover:bg-[#2EB8A1] group-hover:text-white transition-all"><Pill size={18} /></div>
               <div>
                  <p className="text-xs font-bold text-slate-800">Send Prescription</p>
                  <p className="text-[10px] text-slate-400">Medication update</p>
               </div>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl custom-shadow flex items-center gap-3 group hover:border-[#2EB8A1] cursor-pointer transition-all">
               <div className="p-2 bg-blue-50 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all"><FileText size={18} /></div>
               <div>
                  <p className="text-xs font-bold text-slate-800">Lab Request</p>
                  <p className="text-[10px] text-slate-400">Order diagnostics</p>
               </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-2 flex items-center gap-2 border border-slate-100">
            <div className="flex items-center gap-1 px-2">
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-all"><Paperclip size={20} /></button>
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-all"><ImageIcon size={20} /></button>
            </div>
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your medical response..." 
              className="flex-1 bg-transparent border-none py-2 px-1 text-sm outline-none focus:ring-0"
            />
            <div className="flex items-center gap-2 px-2">
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-all"><Mic size={20} /></button>
              <button 
                className={`p-3 rounded-xl transition-all shadow-lg ${inputText.trim() ? 'bg-[#2EB8A1] text-white shadow-[#2EB8A1]/30' : 'bg-slate-200 text-slate-400'}`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. RIGHT - PATIENT INFO PANEL (30%) */}
      <div className="w-[30%] min-w-[300px] border-l border-slate-100 bg-white p-6 hidden xl:block overflow-y-auto custom-scrollbar">
        <div className="text-center mb-8">
          <img src={activeChat.avatar} alt="" className="w-24 h-24 rounded-[32px] mx-auto object-cover mb-4 ring-4 ring-[#F0FDF9] shadow-md" />
          <h3 className="text-lg font-bold text-slate-900">{activeChat.patientName}</h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Patient ID: {activeChat.patientId}</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-2xl bg-slate-50 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Age</p>
                <p className="text-sm font-bold text-slate-800">28 Yrs</p>
             </div>
             <div className="p-4 rounded-2xl bg-slate-50 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Gender</p>
                <p className="text-sm font-bold text-slate-800">Female</p>
             </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Activity size={14} className="text-[#2EB8A1]" /> Quick Details
            </h4>
            
            <div className="space-y-3">
               <div className="flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-3">
                     <Calendar size={16} className="text-slate-400" />
                     <span className="text-xs font-medium text-slate-600">Last Appt.</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800">May 12, 2024</span>
               </div>
               <div className="flex items-center justify-between p-3 rounded-xl border border-slate-50 hover:bg-slate-50 transition-all">
                  <div className="flex items-center gap-3">
                     <Activity size={16} className="text-slate-400" />
                     <span className="text-xs font-medium text-slate-600">Condition</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold">Stable</span>
               </div>
            </div>
          </div>

          <div className="pt-4 space-y-4 border-t border-slate-50">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Active Prescriptions</h4>
            <div className="space-y-2">
               {['Amoxicillin 500mg', 'Paracetamol'].map(med => (
                 <div key={med} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#2EB8A1] shadow-sm"><Pill size={14} /></div>
                    <span className="text-xs font-bold text-slate-700">{med}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <button className="w-full py-3.5 rounded-2xl bg-[#2EB8A1] text-white font-bold text-sm hover:bg-[#26a08c] transition-all shadow-lg shadow-[#2EB8A1]/20">
              View Full Profile
            </button>
            <button className="w-full py-3.5 rounded-2xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
               <Plus size={18} /> Add Private Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
