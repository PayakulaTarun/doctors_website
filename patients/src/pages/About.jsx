import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaHeartbeat, FaCheckCircle, FaSearch, FaCalendarCheck, FaShieldAlt } from 'react-icons/fa';
import { FaUserMd, FaBone } from 'react-icons/fa'; // Substituting bones/icons
import Footer from '../components/Footer';
import './About.css';
import { FaHeartbeat as LogoIcon } from 'react-icons/fa';

const About = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Vision');

    return (
        <div className="about-page">
            {/* Navbar */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                <nav className="navbar-pill">
                    <div className="nav-logo">
                        <div className="nav-logo-icon"><LogoIcon /></div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="nav-logo-text" style={{ fontSize: '18px', lineHeight: '1' }}>HEALTHCARE</span>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li><a onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#333' }}>Home</a></li>
                        <li><a onClick={() => navigate('/find-doctors')} style={{ cursor: 'pointer', color: '#333' }}>Find Doctors</a></li>
                        <li><a onClick={() => navigate('/specialties')} style={{ cursor: 'pointer', color: '#333' }}>Specialities</a></li>
                        <li><a onClick={() => navigate('/symptoms')} style={{ cursor: 'pointer', color: '#333' }}>Symptoms</a></li>
                        <li><a href="#" className="active" style={{ fontWeight: 'bold', color: '#555' }}>About Us</a></li>
                        <li><a onClick={() => navigate('/contact')} style={{ cursor: 'pointer', color: '#333' }}>Contact</a></li>
                        <li><a className="login-link" onClick={() => navigate('/login')} style={{ fontWeight: 'bold', color: '#333', cursor: 'pointer' }}>Login / Sign Up</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button className="btn-primary" onClick={() => navigate('/booking')} style={{ borderRadius: '50px', padding: '10px 25px', background: '#27B992', color: 'white', border: 'none' }}>Book Appointment <FaArrowRight /></button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>Modern Healthcare,<br />Designed <span>Around You</span></h1>
                    <p>A trusted platform that connects patients with verified doctors, making appointments and consultations simple, fast, and reliable.</p>
                    <button className="btn-primary-about">Find Doctors</button>
                </div>
                <div className="about-hero-image">
                    <img src="/about_image_1.png" alt="Doctors Team" />
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stat-card">
                    <h3>50,000+</h3>
                    <p>Patients Served</p>
                </div>
                <div className="stat-card">
                    <h3>2,000+</h3>
                    <p>Verified Doctors</p>
                </div>
                <div className="stat-card">
                    <h3>25+</h3>
                    <p>Medical Specialties</p>
                </div>
                <div className="stat-card">
                    <h3>4.7★</h3>
                    <p>Average Rating</p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="who-we-are">
                <div className="who-image">
                    <img src="/about_image_2.png" alt="Elderly Patient with Doctor" />
                </div>
                <div className="who-content">
                    <h2>Who We <span>Are</span></h2>
                    <p>We are a healthcare technology platform focused on simplifying how patients find doctors, book appointments, and access medical care. Our goal is to remove confusion and create a seamless healthcare experience for everyone.</p>

                    <div className="who-tabs">
                        <div className={`who-tab ${activeTab === 'Vision' ? 'active' : ''}`} onClick={() => setActiveTab('Vision')}>Vision</div>
                        <div className={`who-tab ${activeTab === 'Goal' ? 'active' : ''}`} onClick={() => setActiveTab('Goal')}>Goal</div>
                    </div>
                    {/* Content could change based on tab, but static text used for visual match */}
                </div>
            </section>

            {/* Different Section */}
            <section className="features-section">
                <h2>What Makes Us <span>Different</span></h2>
                <p>Excellence built into every step of your health journey.</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><FaHeartbeat color="#e74c3c" size={24} /></div>
                        <h4>Verified Medical Network</h4>
                        <p>Every doctor is carefully verified for credentials and experience.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaSearch color="#e74c3c" size={24} /></div>
                        <h4>Smart Discovery</h4>
                        <p>Find doctors by specialty, symptoms, or location effortlessly.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaCalendarCheck color="#e74c3c" size={24} /></div>
                        <h4>Flexible Consultations</h4>
                        <p>Book in-clinic or online consultations with ease.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><FaShieldAlt color="#e74c3c" size={24} /></div>
                        <h4>Secure & Private</h4>
                        <p>Your health data is protected with industry-grade security.</p>
                    </div>
                </div>
            </section>

            {/* Trusted By Professionals */}
            <section className="trusted-section">
                <h2 className="trusted-title">Trusted By <span>Professionals</span></h2>
                <p style={{ color: '#888', marginBottom: '40px' }}>Connecting patients with the top medical minds.</p>

                <div className="trusted-grid">
                    {/* Card 1 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sarah_johnson.png" alt="Dr Sarah" />
                            <div className="verified-badge">4.5 ★</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Sarah Johnson</div>
                            <div className="doc-spec">Cardiology Specialist</div>
                            <div className="doc-meta">
                                <span>📍 New York</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-book-sm">Book Appointment</button>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sarah_johnson_1.png" alt="Dr Sarah" />
                            <div className="verified-badge">4.9 ★</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Sarah Johnson</div>
                            <div className="doc-spec">Cardiology Specialist</div>
                            <div className="doc-meta">
                                <span>📍 New York</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-book-sm">Book Appointment</button>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="doc-card-about">
                        <div className="doc-img-about">
                            <img src="/dr_sarah_johnson_2.png" alt="Dr Sarah" />
                            <div className="verified-badge">4.6 ★</div>
                        </div>
                        <div className="doc-info-about">
                            <div className="doc-name">Dr. Sarah Johnson</div>
                            <div className="doc-spec">Cardiology Specialist</div>
                            <div className="doc-meta">
                                <span>📍 New York</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-book-sm">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2 className="section-head-center">How It <span style={{ color: '#27B992' }}>Works</span></h2>
                <p style={{ color: '#888' }}>A simple path to better health.</p>

                <div className="how-steps">
                    <div className="how-step">
                        <FaSearch className="step-icon-dynamic" />
                        <h4>Search Doctor Or Symptom</h4>
                        <p>Find specialized care in seconds.</p>
                    </div>
                    <div className="how-step">
                        <FaCalendarCheck className="step-icon-dynamic" />
                        <h4>Compare Availability</h4>
                        <p>Pick a time that works for you.</p>
                    </div>
                    <div className="how-step">
                        <FaUserMd className="step-icon-dynamic" />
                        <h4>Book & Consult</h4>
                        <p>Consult with confidence and ease.</p>
                    </div>
                </div>
            </section>

            {/* Safety & Compliance */}
            <div className="safety-section">
                <div className="safety-icon">🚨</div>
                <div>
                    <h4 style={{ marginBottom: '15px', fontSize: '18px' }}>Safety & Compliance</h4>
                    <div className="safety-grid">
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Secure Payments Encrypted</div>
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Data Privacy Compliance</div>
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Verified Medical Profiles</div>
                        <div className="safety-item"><FaCheckCircle className="check-icon" /> Transparent Patient Reviews</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
