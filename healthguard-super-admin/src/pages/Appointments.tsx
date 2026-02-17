
import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Stethoscope, 
  MoreVertical, 
  XCircle, 
  RefreshCw, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { Card, Button, StatusChip, Drawer, Modal } from '../components/UI';
import { mockAppointments } from '../mockData';
import { Appointment, AppStatus } from '../types';
import { useToast } from '../components/Toast';

const Appointments: React.FC = () => {
  const { showToast } = useToast();
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);
  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleRowClick = (appt: Appointment) => {
    setSelectedAppt(appt);
    setIsDetailDrawerOpen(true);
  };

  const handleCancel = (e: React.MouseEvent, appt: Appointment) => {
    e.stopPropagation();
    setSelectedAppt(appt);
    setIsCancelModalOpen(true);
  };

  const confirmCancel = () => {
    showToast('Appointment cancelled and refund initiated', 'success');
    setIsCancelModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Appointments</h2>
          <p className="text-gray-500">Monitor and manage all patient-doctor consultations.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Schedule View</Button>
          <Button>Reassign Requests</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Calendar size={24} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Today</p>
                <h4 className="text-2xl font-bold text-gray-800">48</h4>
            </div>
        </Card>
        <Card className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <RefreshCw size={24} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Now</p>
                <h4 className="text-2xl font-bold text-gray-800">12</h4>
            </div>
        </Card>
        <Card className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <CheckCircle size={24} />
            </div>
            <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Completed</p>
                <h4 className="text-2xl font-bold text-gray-800">1,204</h4>
            </div>
        </Card>
      </div>

      <Card className="p-0 border-none shadow-premium">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">ID</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Patient</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Doctor</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Schedule</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockAppointments.map((appt) => (
              <tr 
                key={appt.id} 
                className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
                onClick={() => handleRowClick(appt)}
              >
                <td className="px-6 py-4 font-mono text-xs font-bold text-gray-500">{appt.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-gray-400" />
                    <span className="text-sm font-bold text-gray-800">{appt.userName}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Stethoscope size={14} className="text-primary" />
                    <span className="text-sm font-medium text-gray-700">{appt.doctorName}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-gray-800">{appt.date}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">{appt.time}</p>
                </td>
                <td className="px-6 py-4">
                  <StatusChip status={appt.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={(e) => handleCancel(e, appt)}
                    className="p-2 text-gray-400 hover:text-danger hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <XCircle size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Drawer isOpen={isDetailDrawerOpen} onClose={() => setIsDetailDrawerOpen(false)} title="Appointment Details">
        {selectedAppt && (
          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-premium border border-primary/10">
                <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-mono text-primary font-bold">{selectedAppt.id}</p>
                    <StatusChip status={selectedAppt.status} />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Video Consultation</h4>
                <p className="text-sm text-gray-500">{selectedAppt.date} at {selectedAppt.time}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <p className="text-xs text-gray-400 uppercase font-bold">Patient</p>
                    <p className="text-sm font-bold text-gray-800">{selectedAppt.userName}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-gray-400 uppercase font-bold">Doctor</p>
                    <p className="text-sm font-bold text-gray-800">{selectedAppt.doctorName}</p>
                </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
                <h5 className="font-bold text-gray-800">Financial Transaction</h5>
                <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-500">Consultation Fee</span>
                    <span className="font-bold text-gray-800">${selectedAppt.amount}.00</span>
                </div>
                <div className="flex justify-between text-sm py-2">
                    <span className="text-gray-500">Platform Service Tax</span>
                    <span className="font-bold text-gray-800">$12.50</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-100">
                    <span className="text-gray-800">Total Charged</span>
                    <span className="text-primary">${selectedAppt.amount + 12.50}</span>
                </div>
            </div>

            <div className="space-y-3 pt-8">
                <Button className="w-full" variant="outline">
                    <FileText size={18} className="mr-2" />
                    Download Invoice
                </Button>
                <Button className="w-full" variant="ghost">
                    <RefreshCw size={18} className="mr-2" />
                    Reassign to Another Doctor
                </Button>
                <Button className="w-full" variant="danger" onClick={() => setIsCancelModalOpen(true)}>
                    Cancel Appointment
                </Button>
            </div>
          </div>
        )}
      </Drawer>

      <Modal isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)} title="Cancel Appointment">
        <div className="p-6">
            <p className="text-gray-600 mb-6">Are you sure you want to cancel this appointment? This will automatically process a full refund of <span className="font-bold text-primary">${(selectedAppt?.amount || 0) + 12.50}</span> to the patient's original payment method.</p>
            <textarea className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm mb-4" placeholder="Reason for cancellation (optional)" rows={3}></textarea>
            <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setIsCancelModalOpen(false)}>Back</Button>
                <Button variant="danger" onClick={confirmCancel}>Confirm Cancellation</Button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default Appointments;
