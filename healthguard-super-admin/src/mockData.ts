
import { Doctor, Appointment, Transaction, AppStatus, Plan } from './types';

export const mockDoctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Wilson', email: 'sarah.w@health.com', speciality: 'Cardiologist', clinic: 'Heart Care Center', fees: 150, plan: 'Premium', rating: 4.9, status: AppStatus.ACTIVE },
  { id: '2', name: 'Dr. James Miller', email: 'james.m@health.com', speciality: 'Dermatologist', clinic: 'Skin & Glow', fees: 100, plan: 'Standard', rating: 4.7, status: AppStatus.ACTIVE },
  { id: '3', name: 'Dr. Elena Rodriguez', email: 'elena.r@health.com', speciality: 'Pediatrician', clinic: 'Kids First Clinic', fees: 120, plan: 'Premium', rating: 4.8, status: AppStatus.PENDING },
  { id: '4', name: 'Dr. Mark Thompson', email: 'mark.t@health.com', speciality: 'General Physician', clinic: 'Unity Hospital', fees: 80, plan: 'Basic', rating: 4.5, status: AppStatus.SUSPENDED },
];

export const mockAppointments: Appointment[] = [
  { id: 'APT-001', doctorName: 'Dr. Sarah Wilson', userName: 'John Doe', date: '2023-10-25', time: '10:00 AM', status: AppStatus.COMPLETED, amount: 150 },
  { id: 'APT-002', doctorName: 'Dr. James Miller', userName: 'Jane Smith', date: '2023-10-25', time: '02:30 PM', status: AppStatus.ACTIVE, amount: 100 },
  { id: 'APT-003', doctorName: 'Dr. Sarah Wilson', userName: 'Mike Ross', date: '2023-10-26', time: '11:15 AM', status: AppStatus.ACTIVE, amount: 150 },
];

export const mockTransactions: Transaction[] = [
  { id: 'TXN-9901', userName: 'John Doe', doctorName: 'Dr. Sarah Wilson', amount: 150, status: 'Successful', date: '2023-10-25' },
  { id: 'TXN-9902', userName: 'Jane Smith', doctorName: 'Dr. James Miller', amount: 100, status: 'Successful', date: '2023-10-24' },
  { id: 'TXN-9903', userName: 'Mike Ross', doctorName: 'Dr. Elena Rodriguez', amount: 120, status: 'Pending', date: '2023-10-23' },
];

export const mockPlans: Plan[] = [
  { id: 'plan-1', name: 'Basic', price: 29, doctorLimit: 1, videoConsult: false, features: ['Email Support', 'Basic Scheduling'], active: true },
  { id: 'plan-2', name: 'Standard', price: 99, doctorLimit: 5, videoConsult: true, features: ['Phone Support', 'Multi-clinic Management', 'Patient History'], active: true },
  { id: 'plan-3', name: 'Premium', price: 249, doctorLimit: 20, videoConsult: true, features: ['24/7 Priority Support', 'Analytics Dashboard', 'Marketing Tools'], active: true },
];
