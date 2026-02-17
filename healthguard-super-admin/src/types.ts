
export enum AppStatus {
  ACTIVE = 'Active',
  PENDING = 'Pending',
  SUSPENDED = 'Suspended',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled'
}

export interface Doctor {
  id: string;
  name: string;
  email: string;
  speciality: string;
  clinic: string;
  fees: number;
  plan: 'Basic' | 'Standard' | 'Premium';
  rating: number;
  status: AppStatus;
}

export interface Appointment {
  id: string;
  doctorName: string;
  userName: string;
  date: string;
  time: string;
  status: AppStatus;
  amount: number;
}

export interface Transaction {
  id: string;
  userName: string;
  doctorName: string;
  amount: number;
  status: 'Successful' | 'Pending' | 'Failed';
  date: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  doctorLimit: number;
  videoConsult: boolean;
  features: string[];
  active: boolean;
}
