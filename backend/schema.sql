
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Doctors Table
create table doctors (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  password text not null, -- Hashed password
  specialization text,
  experience integer,
  phone text,
  address text,
  bio text,
  image_url text, -- URL to Supabase Storage
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Patients Table
create table patients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  password text not null, -- Hashed password
  age integer,
  phone text,
  address text,
  medical_history text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Appointments Table
create table appointments (
  id uuid primary key default uuid_generate_v4(),
  doctor_id uuid references doctors(id) not null,
  patient_id uuid references patients(id) not null,
  appointment_date date not null,
  appointment_time time not null,
  status text check (status in ('scheduled', 'completed', 'cancelled', 'rescheduled')) default 'scheduled',
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Schedules (Doctor Availability)
create table schedules (
  id uuid primary key default uuid_generate_v4(),
  doctor_id uuid references doctors(id) not null,
  day_of_week text not null, -- e.g., 'Monday', 'Tuesday'
  start_time time not null,
  end_time time not null,
  is_available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews
create table reviews (
  id uuid primary key default uuid_generate_v4(),
  doctor_id uuid references doctors(id) not null,
  patient_id uuid references patients(id) not null,
  rating integer check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
