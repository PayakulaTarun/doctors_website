
import React, { useState } from 'react';
import { 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Filter, 
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';
import { Card, Button, StatusChip, Drawer } from '../components/UI';
import { mockTransactions } from '../mockData';
import { useToast } from '../components/Toast';

const Finance: React.FC<{ tab: 'earnings' | 'transactions' | 'payouts' }> = ({ tab }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState(tab);
  const [selectedTxn, setSelectedTxn] = useState<any>(null);
  const [isTxnDrawerOpen, setIsTxnDrawerOpen] = useState(false);

  const stats = [
    { label: 'Total Revenue', value: '$248,390', change: '+12.4%', icon: DollarSign, color: 'text-primary' },
    { label: 'Platform Comission', value: '$37,258', change: '+8.1%', icon: ArrowUpRight, color: 'text-blue-500' },
    { label: 'Pending Payouts', value: '$12,400', change: '-2.4%', icon: ArrowDownRight, color: 'text-amber-500' },
  ];

  const handleTxnClick = (txn: any) => {
    setSelectedTxn(txn);
    setIsTxnDrawerOpen(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Financial Management</h2>
          <p className="text-gray-500">Track earnings, transactions, and manage doctor payouts.</p>
        </div>
        <div className="flex gap-3">
            <Button variant="outline">
                <Download size={18} className="mr-2" />
                Report Settings
            </Button>
            <Button>
                Initiate Bulk Payout
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <Card key={i} className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
              <h3 className="text-3xl font-bold text-gray-800">{s.value}</h3>
              <p className={`text-xs font-bold mt-1 ${s.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {s.change} <span className="text-gray-400 font-normal">from last month</span>
              </p>
            </div>
            <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center ${s.color}`}>
              <s.icon size={28} />
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-0 border-none shadow-premium overflow-hidden">
        <div className="flex border-b border-border">
          <button 
            onClick={() => setActiveTab('earnings')}
            className={`px-8 py-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'earnings' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('transactions')}
            className={`px-8 py-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'transactions' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}
          >
            All Transactions
          </button>
          <button 
            onClick={() => setActiveTab('payouts')}
            className={`px-8 py-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'payouts' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}
          >
            Doctor Payouts
          </button>
        </div>

        <div className="p-4 bg-white border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                    <select className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold focus:ring-primary focus:border-primary">
                        <option>Status: All</option>
                        <option>Status: Success</option>
                        <option>Status: Pending</option>
                    </select>
                </div>
                <div className="text-xs font-bold text-gray-400">Date Range: Oct 1 - Oct 31, 2023</div>
            </div>
            <Button variant="ghost" size="sm">Download filtered list</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">TXN ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Patient / User</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Doctor / Payee</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockTransactions.map((txn) => (
                <tr 
                    key={txn.id} 
                    className="hover:bg-gray-50/80 transition-colors cursor-pointer"
                    onClick={() => handleTxnClick(txn)}
                >
                  <td className="px-6 py-4 font-mono text-xs font-bold text-gray-400">{txn.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">{txn.userName}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-600">{txn.doctorName}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-gray-800">${txn.amount.toFixed(2)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusChip status={txn.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" onClick={(e) => {
                        e.stopPropagation();
                        showToast('Invoice downloaded');
                    }}>
                        <Download size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Drawer isOpen={isTxnDrawerOpen} onClose={() => setIsTxnDrawerOpen(false)} title="Transaction Details">
        {selectedTxn && (
          <div className="space-y-6">
            <div className="text-center p-6 bg-gray-50 rounded-premium border border-border">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">Transaction Total</p>
                <h3 className="text-4xl font-bold text-gray-800">${selectedTxn.amount.toFixed(2)}</h3>
                <div className="mt-4 inline-block">
                    <StatusChip status={selectedTxn.status} />
                </div>
            </div>

            <div className="space-y-4">
                <h5 className="font-bold text-gray-800 border-b border-border pb-2">Information</h5>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Transaction Date</span>
                    <span className="font-medium text-gray-700">{selectedTxn.date}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Payment Method</span>
                    <span className="font-medium text-gray-700">Visa ending in •••• 4242</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Reference Number</span>
                    <span className="font-medium text-gray-700">REF-091283-X</span>
                </div>
            </div>

            <div className="space-y-4">
                <h5 className="font-bold text-gray-800 border-b border-border pb-2">Breakdown</h5>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Service Fee</span>
                    <span className="font-bold text-gray-800">${(selectedTxn.amount * 0.85).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform Commission (15%)</span>
                    <span className="font-bold text-gray-800">${(selectedTxn.amount * 0.15).toFixed(2)}</span>
                </div>
            </div>

            <div className="pt-8 space-y-3">
                <Button className="w-full" variant="outline">
                    <FileText size={18} className="mr-2" />
                    Download PDF Receipt
                </Button>
                {selectedTxn.status === 'Successful' && (
                    <Button className="w-full" variant="danger" onClick={() => {
                        showToast('Refund process initiated');
                        setIsTxnDrawerOpen(false);
                    }}>
                        Refund Payment
                    </Button>
                )}
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Finance;
