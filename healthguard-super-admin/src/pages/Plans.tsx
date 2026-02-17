
import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Settings, 
  Trash2, 
  Plus, 
  Monitor, 
  Smartphone, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Card, Button, Drawer, Modal } from '../components/UI';
import { mockPlans } from '../mockData';
import { Plan } from '../types';
import { useToast } from '../components/Toast';

const Plans: React.FC = () => {
  const { showToast } = useToast();
  const [plans, setPlans] = useState<Plan[]>(mockPlans);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const togglePlan = (id: string) => {
    setPlans(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p));
    showToast('Plan status updated successfully');
  };

  const handleEdit = (plan: Plan) => {
    setEditingPlan(plan);
    setIsDrawerOpen(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Subscription Plans</h2>
          <p className="text-gray-500">Configure pricing and feature limits for doctors.</p>
        </div>
        <Button onClick={() => {
            setEditingPlan(null);
            setIsDrawerOpen(true);
        }}>
            <Plus size={18} className="mr-2" />
            Create New Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.id} className={`relative overflow-hidden border-2 ${plan.name === 'Premium' ? 'border-primary' : 'border-border'}`}>
            {plan.name === 'Premium' && (
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl shadow-sm">
                Most Popular
              </div>
            )}
            
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-bold text-gray-800">${plan.price}</span>
                    <span className="text-gray-400 font-medium">/month</span>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                        <Check size={14} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Up to {plan.doctorLimit} Doctors</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className={plan.videoConsult ? "w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-500" : "w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500"}>
                        {plan.videoConsult ? <Check size={14} /> : <X size={14} />}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Video Consultation</span>
                </div>
                {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                            <Check size={14} />
                        </div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="pt-6 border-t border-border flex gap-2">
                <Button className="flex-1" variant="outline" size="sm" onClick={() => handleEdit(plan)}>
                    <Settings size={16} className="mr-2" />
                    Edit
                </Button>
                <Button 
                    className="flex-1" 
                    variant={plan.active ? "secondary" : "outline"} 
                    size="sm"
                    onClick={() => togglePlan(plan.id)}
                >
                    {plan.active ? 'Active' : 'Paused'}
                </Button>
            </div>
          </Card>
        ))}
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title={editingPlan ? "Edit Subscription Plan" : "New Subscription Plan"}>
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Plan Name</label>
                <input type="text" defaultValue={editingPlan?.name} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" placeholder="e.g. Enterprise" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Monthly Price ($)</label>
                    <input type="number" defaultValue={editingPlan?.price} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Doctor Limit</label>
                    <input type="number" defaultValue={editingPlan?.doctorLimit} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
                </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                    <p className="text-sm font-bold text-gray-800">Enable Video Consultations</p>
                    <p className="text-xs text-gray-500">Allow doctors to use build-in V-Calls</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer p-1">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
                </div>
            </div>
            
            <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700">Plan Features</label>
                <div className="space-y-2">
                    {editingPlan?.features.map((f, i) => (
                        <div key={i} className="flex gap-2">
                            <input type="text" defaultValue={f} className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
                            <button className="text-gray-400 hover:text-danger"><Trash2 size={18} /></button>
                        </div>
                    ))}
                    <button className="text-sm text-primary font-bold flex items-center gap-1 hover:underline">
                        <Plus size={16} /> Add Feature
                    </button>
                </div>
            </div>

            <div className="pt-8 flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" className="flex-1" onClick={() => {
                    showToast('Subscription plan saved');
                    setIsDrawerOpen(false);
                }}>Save Plan</Button>
            </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Plans;
