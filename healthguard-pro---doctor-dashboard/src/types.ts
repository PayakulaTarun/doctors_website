
export interface Appointment {
  id: string;
  patientName: string;
  time: string;
  date: string;
  type: 'General Checkup' | 'Follow-up' | 'Consultation' | 'Emergency';
  status: 'Pending' | 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled' | 'Rescheduled';
  location: 'Online' | 'Clinic';
  avatar: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  reason: string;
  bookingId: string;
  phone: string;
  paymentStatus: 'Paid' | 'Unpaid' | 'Partial';
}

export interface Patient {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  visitsCount: number;
  lastAppointment: string;
  condition: 'Stable' | 'Critical' | 'Follow-up';
  age: number;
  gender: string;
  status: 'Active' | 'Inactive';
  visitReason: string;
  lastVisit: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  sender: 'doctor' | 'patient';
  type: 'text' | 'file' | 'image';
  fileName?: string;
}

export interface Conversation {
  id: string;
  patientId: string;
  patientName: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  consultationType: string;
}

export interface DaySchedule {
  day: string;
  isEnabled: boolean;
  slots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  type: 'Available' | 'Break' | 'Blocked';
  label?: string;
}

export interface Transaction {
  id: string;
  patientName: string;
  avatar: string;
  date: string;
  type: 'Video' | 'Clinic' | 'Follow-up' | 'Emergency';
  amount: number;
  status: 'Completed' | 'Pending' | 'Refunded';
}
