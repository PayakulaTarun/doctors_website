import React from 'react';
import {
    FaArrowLeft, FaCheckCircle, FaStar, FaUserMd,
    FaGlobe, FaVideo, FaGraduationCap, FaMapMarkerAlt,
    FaLock, FaHeartbeat, FaArrowRight, FaShieldAlt
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './DoctorProfile.css';
import Footer from '../components/Footer';

const DoctorProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="profile-container">
            {/* Navbar (Duplicated for Consistency in this task) */}
            <nav className="navbar" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
                <div className="nav-logo">
                    <div className="nav-logo-icon"><FaHeartbeat /></div>
                    <span className="nav-logo-text">Healthcare</span>
                    <span className="nav-logo-sub">Medical Services</span>
                </div>
                <ul className="nav-links">
                    <li><a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a></li>
                    <li><a onClick={() => navigate('/find-doctors')} className="active" style={{ color: '#27B992', cursor: 'pointer' }}>Find Doctors</a></li>
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
            <div className="profile-header-area">
                <div className="back-btn-wrapper" onClick={() => navigate('/find-doctors')}>
                    <button className="back-btn"><FaArrowLeft /></button>
                    <span className="back-text">Back to Search</span>
                </div>
                <h1 className="page-title">Doctor Profile</h1>
            </div>

            {/* Main Content Grid */}
            <div className="profile-content">
                {/* Left Column: Info & Bio */}
                <div className="left-column">
                    {/* Basic Info Card */}
                    <div className="profile-card doctor-header-card">
                        <div className="verified-badge"><FaCheckCircle /></div>
                        <img src="/dr_sarah_johnson_1.png" alt="Dr. James Wilson" className="doc-profile-img" />
                        <div className="doc-info-main">
                            <h2>Dr. James Wilson</h2>
                            <span className="specialty-text">Cardiologist</span>
                            <div className="rating-row">
                                <div className="stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar style={{ color: '#ffd700' }} /> {/* 4 full + maybe half? Image shows 4.5 but stars look full. Keeping simpler */}
                                </div>
                                <span className="rating-count">4.9 (120+ Patient Reviews)</span>
                            </div>
                            <div className="badges-row">
                                <span className="status-badge">Available Today</span>
                                <span className="exp-badge">15+ Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="stats-grid">
                        <div className="stat-box">
                            <div className="stat-icon"><FaUserMd /></div>
                            <div className="stat-text">
                                <h5>Experience</h5>
                                <p>15 Yrs</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-icon"><FaGlobe /></div>
                            <div className="stat-text">
                                <h5>Languages</h5>
                                <p>English</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-icon"><FaVideo /></div>
                            <div className="stat-text">
                                <h5>Consultation</h5>
                                <p>Both</p>
                            </div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-icon"><FaStar /></div>
                            <div className="stat-text">
                                <h5>Rating</h5>
                                <p>4.9/5.0</p>
                            </div>
                        </div>
                    </div>

                    {/* About Doctor */}
                    <div className="profile-card">
                        <h3 className="section-header">About Doctor</h3>
                        <p className="about-text">
                            Dr. Sarah Mitchell is a world-renowned cardiologist specializing in preventive heart care and complex cardiac conditions. With over 15 years of experience, she combines cutting-edge technology with a compassionate, patient-centered approach to ensure the best outcomes for heart health.
                        </p>
                    </div>

                    {/* Education & Experience */}
                    <div className="profile-card">
                        <h3 className="section-header">Education & Experience</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-content">
                                    <h4>Doctor Of Medicine</h4>
                                    <p>Harvard Medical School • 2008</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-content">
                                    <h4>Residency In Cardiology</h4>
                                    <p>Johns Hopkins Hospital • 2012</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-icon"></div>
                                <div className="timeline-content">
                                    <h4>Fellowship In Interventional Cardiology</h4>
                                    <p>Mayo Clinic • 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services & Specialization */}
                    <div className="profile-card">
                        <h3 className="section-header">Services & Specialization</h3>
                        <div className="tags-container">
                            <span className="service-tag">Echocardiogram</span>
                            <span className="service-tag">Stress Testing</span>
                            <span className="service-tag">Cardiac Rehabilitation</span>
                            <span className="service-tag">Hypertension Management</span>
                        </div>
                    </div>

                    {/* Clinic & Location */}
                    <div className="profile-card">
                        <h3 className="section-header">Clinic & Location</h3>
                        <div className="clinic-card-content">
                            <div className="clinic-info">
                                <h4>Heart & Vascular Center</h4>
                                <div className="clinic-address">
                                    <FaMapMarkerAlt style={{ marginTop: '3px', color: '#27B992' }} />
                                    <span>452 Medical Parkway, Suite 100, New York</span>
                                </div>
                                <div className="clinic-hours">
                                    Consultation Hours<br />
                                    <strong>Mon - Fri, 09:00 AM - 06:00 PM</strong>
                                </div>
                            </div>
                            <div className="clinic-map">
                                {/* Placeholder map image or actual map integration would go here. */}
                                {/* Using a placeholder div pattern for map */}
                                <img src="/location_map.png" alt="Map Location" style={{ width: '100%', height: '100%', background: '#eee' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Booking & Details */}
                <div className="right-column">
                    {/* Booking Widget */}
                    <div className="booking-card">
                        <div className="booking-header">
                            <span>Consultation Fee</span>
                            <span className="booking-price">$150</span>
                        </div>

                        <div className="date-section">
                            <div className="date-header">
                                Select Date
                                <span className="view-cal">View Calendar</span>
                            </div>
                            <div className="dates-row">
                                <div className="date-item active">
                                    <h5>Mon</h5><p>12 Feb</p>
                                </div>
                                <div className="date-item">
                                    <h5>Tue</h5><p>13 Feb</p>
                                </div>
                                <div className="date-item">
                                    <h5>Wed</h5><p>14 Feb</p>
                                </div>
                                <div className="date-item">
                                    <h5>Thu</h5><p>15 Feb</p>
                                </div>
                            </div>
                        </div>

                        <div className="slots-section">
                            <div className="date-header">Available Slots</div>
                            <div className="slots-grid">
                                <div className="time-slot">09:00 AM</div>
                                <div className="time-slot">09:30 AM</div>
                                <div className="time-slot">10:00 AM</div>
                                <div className="time-slot">10:30 AM</div>
                                <div className="time-slot">09:00 AM</div>
                                <div className="time-slot">09:30 AM</div>
                                <div className="time-slot">10:00 AM</div>
                                <div className="time-slot">10:30 AM</div>
                            </div>
                        </div>

                        <button className="btn-book-lg" onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. James Wilson', specialty: 'Cardiologist', image: '/dr_sarah_johnson_1.png', location: 'Heart & Vascular Center', consultation_fee: '150' } } })}>Book Appointment</button>
                        <button className="btn-cancel">Cancel</button>

                        <div className="secure-note">
                            <FaLock /> Encrypted & Secure Booking
                        </div>
                    </div>

                    {/* Need Help */}
                    <div className="help-card">
                        <h3>Need Help?</h3>
                        <p>Our health advisors are here to assist you with your booking.</p>
                        <span className="chat-link">Chat With Us</span>
                    </div>

                    {/* Patient Reviews Widget */}
                    <div className="profile-card">
                        <div className="reviews-section-header">
                            <h3 className="section-header" style={{ margin: 0 }}>Patient Reviews</h3>
                            <span className="view-all-reviews">View All</span>
                        </div>

                        <div className="review-card">
                            <div className="review-user-header">
                                <div className="review-avatar">J</div>
                                <div className="review-meta">
                                    <h5>John Doe</h5>
                                    <span>Visited for Online Consultation</span>
                                </div>
                                <div className="review-stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                            <p className="review-text">"Dr. Mitchell is incredibly thorough and explained everything clearly."</p>
                        </div>

                        <div className="review-card">
                            <div className="review-user-header">
                                <div className="review-avatar">J</div>
                                <div className="review-meta">
                                    <h5>John Doe</h5>
                                    <span>Visited for Online Consultation</span>
                                </div>
                                <div className="review-stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                            <p className="review-text">"Dr. Mitchell is incredibly thorough and explained everything clearly."</p>
                        </div>

                        <div className="review-card">
                            <div className="review-user-header">
                                <div className="review-avatar">J</div>
                                <div className="review-meta">
                                    <h5>John Doe</h5>
                                    <span>Visited for Online Consultation</span>
                                </div>
                                <div className="review-stars">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                            <p className="review-text">"Dr. Mitchell is incredibly thorough and explained everything clearly."</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Trust Banner */}
            <div className="trust-banner" style={{ maxWidth: '1300px', margin: '0 auto 50px' }}>
                <div className="trust-item">
                    <div className="trust-icon-box"><FaShieldAlt /></div> {/* Using ShieldAlt for verified */}
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

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DoctorProfile;
