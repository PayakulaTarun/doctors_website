import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    FaSearch, FaMapMarkerAlt, FaVideo, FaStar, FaFilter,
    FaCheckCircle, FaHeart, FaUserMd, FaShieldAlt, FaRegStar
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import './FindDoctors.css';
import Footer from '../components/Footer';
import { FaHeartbeat, FaArrowRight } from 'react-icons/fa';

const FindDoctors = () => {
    const navigate = useNavigate();

    // Mock data fallback for when backend is unavailable
    const mockDoctors = [
        {
            id: 1,
            full_name: 'Dr. Sarah Johnson',
            specialization: 'General Physician',
            experience_years: 8,
            rating: 4.8,
            consultation_fee: '$80',
            languages: ['English', 'Spanish'],
            next_slot: '10:00 AM',
            image: '/dr_sarah_johnson_1.png'
        },
        {
            id: 2,
            full_name: 'Dr. Michael Chen',
            specialization: 'Cardiologist',
            experience_years: 12,
            rating: 4.9,
            consultation_fee: '$120',
            languages: ['English', 'Mandarin'],
            next_slot: '11:30 AM',
            image: '/dr_sarah_johnson_1.png'
        },
        {
            id: 3,
            full_name: 'Dr. Emily Rodriguez',
            specialization: 'Dermatologist',
            experience_years: 6,
            rating: 4.7,
            consultation_fee: '$90',
            languages: ['English', 'Spanish'],
            next_slot: '2:00 PM',
            image: '/dr_sarah_johnson_1.png'
        },
        {
            id: 4,
            full_name: 'Dr. James Williams',
            specialization: 'Pediatrician',
            experience_years: 10,
            rating: 4.9,
            consultation_fee: '$100',
            languages: ['English'],
            next_slot: '3:30 PM',
            image: '/dr_sarah_johnson_1.png'
        },
        {
            id: 5,
            full_name: 'Dr. Priya Sharma',
            specialization: 'Neurologist',
            experience_years: 15,
            rating: 4.8,
            consultation_fee: '$150',
            languages: ['English', 'Hindi'],
            next_slot: '4:00 PM',
            image: '/dr_sarah_johnson_1.png'
        }
    ];

    // Fetch doctors with TanStack Query, fallback to mock data on error
    const { data: doctors, isLoading, isError } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const { data } = await api.get('/doctors/');
            return data;
        },
        // Use mock data as fallback when API fails
        placeholderData: mockDoctors,
        retry: 1
    });

    // Use mock data if API fails
    const displayDoctors = isError ? mockDoctors : (doctors || mockDoctors);

    if (isLoading) {
        return (
            <div className="find-doctors-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ fontSize: '24px', color: '#2EB8A1' }}>Loading Doctors...</div>
            </div>
        );
    }

    return (
        <div className="find-doctors-container">
            {/* Navbar (Duplicated for consistency) */}
            <nav className="navbar" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
                <div className="nav-logo">
                    <div className="nav-logo-icon"><FaHeartbeat /></div>
                    <span className="nav-logo-text">Healthcare</span>
                    <span className="nav-logo-sub">Medical Services</span>
                </div>
                <ul className="nav-links">
                    <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a></li>
                    <li><a href="#" className="active" style={{ color: '#27B992' }}>Find Doctors</a></li>
                    <li><a onClick={() => navigate('/specialties')} style={{ cursor: 'pointer' }}>Specialities</a></li>
                    <li><a onClick={() => navigate('/symptoms')} style={{ cursor: 'pointer' }}>Symptoms</a></li>
                    <li><a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About Us</a></li>
                    <li><a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
                </ul>
                <div className="nav-actions">
                    <a className="login-link" onClick={() => navigate('/login')}>Login / Sign Up</a>
                    <button className="btn-primary" onClick={() => navigate('/booking')}>Book Appointment <FaArrowRight /></button>
                </div>
            </nav>

            {/* Header Section */}
            <header className="finder-header">
                <h1 className="finder-title">Find Doctors <span style={{ color: '#27B992' }}>Near You</span></h1>
                <p className="finder-subtitle">Search doctors by speciality, symptoms, or location with ease. Get expert medical care anytime, anywhere you need it.</p>

                <div className="finder-search-box">
                    <div className="finder-search-field">
                        <label>Search</label>
                        <div className="finder-input-wrapper">
                            <FaSearch />
                            <input type="text" placeholder="Ex. Doctor, speciality or symptoms..." />
                        </div>
                    </div>
                    <div className="finder-search-field">
                        <label>Location</label>
                        <div className="finder-input-wrapper">
                            <FaMapMarkerAlt />
                            <input type="text" placeholder="Select location (via GPS)..." />
                        </div>
                    </div>
                    <div className="finder-search-field">
                        <label>Consultation Type</label>
                        <div className="finder-input-wrapper">
                            <FaVideo />
                            <select>
                                <option>Online</option>
                                <option>Clinic</option>
                            </select>
                        </div>
                    </div>
                    <button className="finder-btn">Search</button>
                </div>
            </header>

            {/* Main Content */}
            <div className="finder-content">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-header">
                        <h3>Filters</h3>
                        <button className="clear-btn">Clear All</button>
                    </div>

                    {/* Speciality */}
                    <div className="filter-group">
                        <div className="checkbox-list">
                            <label className="checkbox-item"><input type="checkbox" defaultChecked /> General Physician</label>
                            <label className="checkbox-item"><input type="checkbox" /> Cardiologist</label>
                            <label className="checkbox-item"><input type="checkbox" /> Dermatologist</label>
                            <label className="checkbox-item"><input type="checkbox" /> Neurologist</label>
                            <label className="checkbox-item"><input type="checkbox" /> Pediatrician</label>
                            <label className="checkbox-item"><input type="checkbox" /> Psychiatrist</label>
                            <label className="checkbox-item"><input type="checkbox" /> Gastroenterologist</label>
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div className="filter-group">
                        <h4>Symptoms</h4>
                        <input type="text" className="search-input-small" placeholder="Symptoms..." />
                    </div>

                    {/* Consultation Type */}
                    <div className="filter-group">
                        <h4>Consultation Type</h4>
                        <div className="checkbox-list">
                            <label className="checkbox-item"><input type="checkbox" /> All</label>
                            <label className="checkbox-item"><input type="checkbox" /> Online</label>
                            <label className="checkbox-item"><input type="checkbox" /> Clinic</label>
                            <label className="checkbox-item"><input type="checkbox" /> Both</label>
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="filter-group">
                        <h4>Availability</h4>
                        <div className="availability-toggles">
                            <button className="toggle-btn active">All</button>
                            <button className="toggle-btn">Today</button>
                            <button className="toggle-btn">Tomorrow</button>
                        </div>
                    </div>

                    {/* Experience Slider */}
                    <div className="filter-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <h4>Experience</h4>
                            <span style={{ fontSize: '12px', color: '#27B992' }}>0+ Yrs</span>
                        </div>
                        <div className="range-slider-container">
                            <input type="range" min="0" max="20" defaultValue="0" className="range-slider" />
                        </div>
                    </div>

                    {/* Fees Slider */}
                    <div className="filter-group">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <h4>Fees Max</h4>
                            <span style={{ fontSize: '12px', color: '#27B992' }}>$500</span>
                        </div>
                        <div className="range-slider-container">
                            <input type="range" min="0" max="1000" defaultValue="500" className="range-slider" />
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="filter-group">
                        <h4>Minimum Rating</h4>
                        <div className="rating-select">
                            <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                        </div>
                    </div>

                    <button className="apply-btn">Apply Filters</button>
                </aside>

                {/* Doctors List */}
                <main className="doctors-list-section">
                    <div className="list-header">
                        <span className="doctors-found"><b>{displayDoctors?.length || 0}</b> Doctors Found</span>
                        <div className="sort-options">
                            <span className="sort-item active">Relevance</span>
                            <span className="sort-item">Experience</span>
                            <span className="sort-item">Fees</span>
                            <span className="sort-item">Rating</span>
                            <span className="sort-item">Availability</span>
                        </div>
                    </div>

                    {displayDoctors && displayDoctors.map((doctor) => (
                        <div className="doctor-card-horizontal" key={doctor.id}>
                            <div className="card-image-col">
                                <img src={'/dr_sarah_johnson_1.png'} alt={doctor.full_name} />
                                <span className="availability-tag">Now Available</span>
                            </div>
                            <div className="card-info-col">
                                <h3>{doctor.full_name}</h3>
                                <span className="doc-specialty">{doctor.specialization || 'General Physician'}</span>
                                <div className="doc-details">
                                    <div className="doc-detail-row">
                                        <span><FaUserMd color="#aaa" /> {doctor.experience_years || '5'} yrs experience</span>
                                        <span style={{ margin: '0 10px', color: '#ccc' }}>|</span>
                                        <span><FaStar color="orange" /> 4.8</span>
                                    </div>
                                    <div className="doc-detail-row">
                                        <span style={{ color: '#999' }}><span style={{ marginRight: '5px' }}>Aa</span> Languages: English</span>
                                    </div>
                                </div>
                                <div className="card-tags">
                                    <span className="tag">Fever</span>
                                    <span className="tag">Fatigue</span>
                                </div>
                            </div>
                            <div className="card-action-col">
                                <div className="price-row">
                                    <span className="fee-label">Consultation Fee</span>
                                    <span className="fee-value">$80</span>
                                </div>
                                <div className="slot-container">
                                    <span className="slot-label">Next Slot</span>
                                    <span className="slot-value">10:00 AM</span>
                                </div>
                                <div style={{ width: '100%' }}>
                                    {/* Pass flattened doctor object for simpler handling in Booking page */}
                                    <button className="btn-book-sm" onClick={() => navigate('/booking', { state: { doctor: { name: doctor.full_name, id: doctor.id, specialty: doctor.specialization, image: '/dr_sarah_johnson_1.png', consultation_fee: '$80', location: 'Heartcare Specialist Center' } } })}>Book Appointment</button>
                                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                                        <a onClick={() => navigate('/doctor-profile')} className="view-profile" style={{ cursor: 'pointer' }}>View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {!displayDoctors.length && <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>No doctors found.</div>}
                </main>
            </div>

            {/* Trust Banner */}
            <div className="trust-banner">
                <div className="trust-item">
                    <div className="trust-icon-box"><FaShieldAlt /></div>
                    <h4>Verified Doctors Only</h4>
                    <p>Stringent background checks for your peace of mind.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaCheckCircle /></div>
                    <h4>Instant Booking</h4>
                    <p>Book slots in real-time with zero waiting time.</p>
                </div>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaHeartbeat /></div>
                    <h4>Secure Medical Data</h4>
                    <p>Your privacy is our priority with HIPAA compliance.</p>
                </div>
            </div>

            {/* Footer reused from Home via styles */}
            <Footer />
        </div>
    );
};

export default FindDoctors;
