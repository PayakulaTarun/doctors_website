
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  Edit2, 
  Trash2, 
  Ban,
  Mail,
  Phone,
  MapPin,
  Star,
  Download
} from 'lucide-react';
import { Card, Button, StatusChip, Drawer, Modal } from '../components/UI';
import { mockDoctors } from '../mockData';
import { AppStatus, Doctor } from '../types';
import { useToast } from '../components/Toast';

const Doctors: React.FC<{ filter?: string }> = ({ filter }) => {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);

  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            doc.speciality.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'pending' ? doc.status === AppStatus.PENDING : true;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter]);

  const handleRowClick = (doc: Doctor) => {
    setSelectedDoctor(doc);
    setIsDrawerOpen(true);
  };

  const handleAction = (e: React.MouseEvent, type: string, doc: Doctor) => {
    e.stopPropagation();
    setSelectedDoctor(doc);
    if (type === 'delete') setIsDeleteModalOpen(true);
    if (type === 'suspend') setIsSuspendModalOpen(true);
    if (type === 'edit') {
        setSelectedDoctor(doc);
        setIsAddDrawerOpen(true);
    }
  };

  const confirmAction = (action: string) => {
    showToast(`Doctor successfully ${action}ed`, 'success');
    setIsDeleteModalOpen(false);
    setIsSuspendModalOpen(false);
  };

  const saveDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Doctor information saved successfully', 'success');
    setIsAddDrawerOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            {filter === 'pending' ? 'Doctor Approvals' : 'Doctors Directory'}
          </h2>
          <p className="text-gray-500">Manage, verify and monitor platform healthcare providers.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download size={18} className="mr-2" />
            Export CSV
          </Button>
          <Button onClick={() => setIsAddDrawerOpen(true)}>
            <Plus size={18} className="mr-2" />
            Add New Doctor
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden border-none shadow-premium p-0">
        <div className="p-4 border-b border-border flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by name, speciality..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm w-full focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter size={14} className="mr-2" />
              Filter
            </Button>
          </div>
          <div className="text-sm text-gray-400 font-medium">
            Showing {filteredDoctors.length} results
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Speciality</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDoctors.map((doc) => (
                <tr 
                  key={doc.id} 
                  className="hover:bg-gray-50/80 transition-colors cursor-pointer group"
                  onClick={() => handleRowClick(doc)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {doc.name.charAt(4)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800 leading-none">{doc.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{doc.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">{doc.speciality}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${doc.plan === 'Premium' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}>
                      {doc.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-gray-700">{doc.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusChip status={doc.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={(e) => handleAction(e, 'edit', doc)} className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-gray-500 hover:text-primary"><Edit2 size={16} /></button>
                      <button onClick={(e) => handleAction(e, 'suspend', doc)} className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-gray-500 hover:text-amber-600"><Ban size={16} /></button>
                      <button onClick={(e) => handleAction(e, 'delete', doc)} className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-gray-500 hover:text-danger"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Profile Detail Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Doctor Profile">
        {selectedDoctor && (
          <div className="space-y-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-premium border border-border">
              <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                {selectedDoctor.name.charAt(4)}
              </div>
              <h4 className="text-xl font-bold text-gray-800">{selectedDoctor.name}</h4>
              <p className="text-primary font-semibold">{selectedDoctor.speciality}</p>
              <div className="flex gap-2 mt-4">
                <StatusChip status={selectedDoctor.status} />
                <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase px-2 py-1 rounded-full">{selectedDoctor.plan}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-border rounded-xl">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Consultation Fee</p>
                    <p className="text-lg font-bold text-gray-800">${selectedDoctor.fees}</p>
                </div>
                <div className="p-4 bg-white border border-border rounded-xl">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Clinic</p>
                    <p className="text-sm font-bold text-gray-800 truncate">{selectedDoctor.clinic}</p>
                </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-bold text-gray-800 border-b border-border pb-2">Contact Details</h5>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <span>{selectedDoctor.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                <span>+1 (555) 012-3456</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                <span>722 Broadway, New York, NY 10003</span>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
                <Button className="w-full" variant="outline">Message Doctor</Button>
                {selectedDoctor.status === AppStatus.PENDING && (
                    <Button className="w-full" onClick={() => confirmAction('approve')}>Verify & Approve Doctor</Button>
                )}
                <div className="flex gap-3">
                    <Button className="flex-1" variant="ghost" onClick={() => setIsSuspendModalOpen(true)}>Suspend</Button>
                    <Button className="flex-1" variant="danger" onClick={() => setIsDeleteModalOpen(true)}>Delete Account</Button>
                </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* Add/Edit Drawer */}
      <Drawer isOpen={isAddDrawerOpen} onClose={() => setIsAddDrawerOpen(false)} title={selectedDoctor ? "Edit Doctor" : "Register New Doctor"}>
        <form onSubmit={saveDoctor} className="space-y-5">
            <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" defaultValue={selectedDoctor?.name} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm" placeholder="e.g. Dr. John Doe" required />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" defaultValue={selectedDoctor?.email} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm" placeholder="doctor@healthguard.com" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Speciality</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm">
                            <option>Cardiology</option>
                            <option>Dermatology</option>
                            <option>Pediatrics</option>
                            <option>Neurology</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Consultation Fee ($)</label>
                        <input type="number" defaultValue={selectedDoctor?.fees} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm" placeholder="100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Clinic / Hospital Name</label>
                    <input type="text" defaultValue={selectedDoctor?.clinic} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-sm" placeholder="Main Street Clinic" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Medical License Upload</label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                        <Download size={32} className="mx-auto text-gray-300 mb-2 group-hover:text-primary" />
                        <p className="text-xs text-gray-500 font-medium">Click to upload document (PDF, PNG up to 10MB)</p>
                    </div>
                </div>
            </div>
            <div className="pt-6 border-t border-border flex gap-3">
                <Button variant="outline" className="flex-1" type="button" onClick={() => setIsAddDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" className="flex-1" type="submit">Save Changes</Button>
            </div>
        </form>
      </Drawer>

      {/* Confirmation Modals */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Delete Doctor Account">
        <div className="p-6">
            <p className="text-gray-600 mb-6 font-medium">This will permanently delete the account for <span className="font-bold text-gray-800">{selectedDoctor?.name}</span>. All data including appointment history will be lost. This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
                <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => confirmAction('delete')}>Confirm Delete</Button>
            </div>
        </div>
      </Modal>

      <Modal isOpen={isSuspendModalOpen} onClose={() => setIsSuspendModalOpen(false)} title="Suspend Doctor">
        <div className="p-6 text-center">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ban size={32} />
            </div>
            <p className="text-gray-600 mb-6">Are you sure you want to temporarily suspend <span className="font-bold">{selectedDoctor?.name}</span>? They will not be able to accept new appointments.</p>
            <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setIsSuspendModalOpen(false)}>Back</Button>
                <Button variant="secondary" onClick={() => confirmAction('suspend')}>Yes, Suspend</Button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default Doctors;
