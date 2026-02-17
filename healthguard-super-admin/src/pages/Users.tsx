
import React from 'react';
import { Card, Button, StatusChip } from '../components/UI';
import { User, Search, Filter, Mail, Trash2 } from 'lucide-react';

const Users: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Patient Directory</h2>
          <p className="text-gray-500">Manage patient accounts and records.</p>
        </div>
        <Button>Export List</Button>
      </div>

      <Card className="p-0 border-none shadow-premium overflow-hidden">
        <div className="p-4 border-b border-border bg-white flex items-center gap-4">
            <div className="relative flex-1 max-w-xs">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search users..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm w-full" />
            </div>
            <Button variant="outline" size="sm"><Filter size={14} className="mr-2" />Filter</Button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">User Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Email</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Joined Date</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="hover:bg-gray-50/50">
                <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                            U{i}
                        </div>
                        <span className="text-sm font-bold text-gray-800">Patient User #{1024 + i}</span>
                    </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 font-medium">user{i}@example.com</td>
                <td className="px-6 py-4 text-sm text-gray-500">Oct {i + 10}, 2023</td>
                <td className="px-6 py-4">
                    <StatusChip status="Active" />
                </td>
                <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Mail size={16} /></button>
                        <button className="p-2 text-gray-400 hover:text-danger transition-colors"><Trash2 size={16} /></button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Users;
