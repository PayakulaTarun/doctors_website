import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaUserMd, FaTooth, FaHeartbeat, FaBone,
    FaStethoscope, FaBaby, FaFemale, FaRunning, FaBrain,
    FaEye, FaLungs, FaAllergies, FaPills, FaCheckCircle,
    FaArrowRight, FaCalendarCheck, FaFolderOpen, FaClock, FaShieldAlt,
    FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { FcSearch, FcFolder, FcAlarmClock } from "react-icons/fc";
import { FaHeartPulse, FaUserDoctor } from "react-icons/fa6"; // For more variety if needed
import './Specialties.css';
import Footer from '../components/Footer';
// Reusing standard layout components via copy/paste to ensure exact match without refactor risk
import { FaHeartbeat as LogoIcon } from 'react-icons/fa';

const Specialties = () => {
    const navigate = useNavigate();

    return (
        <div className="specialties-page">
            {/* Navbar */}
            <nav className="navbar" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
                <div className="nav-logo">
                    <div className="nav-logo-icon"><LogoIcon /></div>
                    <span className="nav-logo-text">Healthcare</span>
                    <span className="nav-logo-sub">Medical Services</span>
                </div>
                <ul className="nav-links">
                    <li><a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a></li>
                    <li><a onClick={() => navigate('/find-doctors')} style={{ cursor: 'pointer' }}>Find Doctors</a></li>
                    <li><a onClick={() => navigate('/specialties')} className="active" style={{ color: '#27B992', cursor: 'pointer' }}>Specialities</a></li>
                    <li><a onClick={() => navigate('/symptoms')} style={{ cursor: 'pointer' }}>Symptoms</a></li>
                    <li><a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About Us</a></li>
                    <li><a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
                </ul>
                <div className="nav-actions">
                    <a className="login-link" onClick={() => navigate('/login')}>Login / Sign Up</a>
                    <button className="btn-primary" onClick={() => navigate('/booking')}>Book Appointment <FaArrowRight /></button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="spec-hero">
                <div className="spec-hero-content">
                    <h1>Explore Specialties<br />Designed <span style={{ color: '#27B992' }}>Around You</span></h1>
                    <p>From everyday wellness to advanced medical treatments, find the exact specialist your health deserves in seconds.</p>
                    <div className="spec-tags">
                        <span className="spec-tag-pill">20+ Specialties</span>
                        <span className="spec-tag-pill">Verified Doctors</span>
                        <span className="spec-tag-pill">Online & Clinic Care</span>
                    </div>
                </div>
                <div className="spec-hero-image">
                    {/* Updated image as per user request */}
                    <img src="/speclist_page_image.png" alt="Medical Specialists" />
                </div>
            </header>

            {/* Browse By Section */}
            <section className="browse-section">
                <h2 className="section-head">How Would You <span style={{ color: '#27B992' }}>Like To Browse?</span></h2>
                <div className="browse-grid">
                    <div className="browse-card">
                        <div className="browse-icon-box"><FcSearch size={45} /></div>
                        <h4>By Symptoms</h4>
                        <p>Let our AI guide you</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                    <div className="browse-card">
                        <div className="browse-icon-box"><FcFolder size={45} /></div>
                        <h4>By Specialty</h4>
                        <p>Browse full directory</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                    <div className="browse-card">
                        <div className="browse-icon-box"><FcAlarmClock size={45} /></div>
                        <h4>By Availability</h4>
                        <p>Find who is free today</p>
                        <span className="browse-link">Explore <FaArrowRight size={12} /></span>
                    </div>
                </div>
            </section>

            {/* Featured Excellence */}
            <section className="featured-section">
                <h2 className="section-head">Featured <span style={{ color: '#27B992' }}>Excellence</span></h2>
                <p style={{ marginTop: '-30px', marginBottom: '40px', color: '#777' }}>Our most requested departments, led by board-certified specialists.</p>

                <div className="featured-grid">
                    {/* Left Column */}
                    <div className="featured-col col-left">
                        <div className="feature-card">
                            <div className="feature-icon-box" style={{ background: '#F0F8FF' }}>👨‍⚕️</div>
                            <div className="feature-content">
                                <h3>General Physician</h3>
                                <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                            </div>
                            <div className="feature-footer">
                                <a href="#" className="feature-link">450+ Specialists</a>
                                <button className="btn-book-feature" onClick={() => navigate('/booking')}>Book Now</button>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon-box" style={{ background: '#FFF0F5' }}>🫀</div>
                            <div className="feature-content">
                                <h3>Cardiologist</h3>
                                <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                            </div>
                            <div className="feature-footer">
                                <a href="#" className="feature-link">150+ Specialists</a>
                                <button className="btn-book-feature" onClick={() => navigate('/booking')}>Book Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Offset) */}
                    <div className="featured-col col-right">
                        <div className="feature-card">
                            <div className="feature-icon-box" style={{ background: '#F5F5F5' }}>🦷</div>
                            <div className="feature-content">
                                <h3>Dentist</h3>
                                <p>Advanced oral health treatments from routine cleaning to complex surgery.</p>
                            </div>
                            <div className="feature-footer">
                                <a href="#" className="feature-link">280+ Specialists</a>
                                <button className="btn-book-feature" onClick={() => navigate('/booking')}>Book Now</button>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon-box" style={{ background: '#FFFACD' }}>🦴</div>
                            <div className="feature-content">
                                <h3>Orthopedic</h3>
                                <p>Specialized treatment for musculoskeletal injuries and bone health.</p>
                            </div>
                            <div className="feature-footer">
                                <a href="#" className="feature-link">190+ Specialists</a>
                                <button className="btn-book-feature" onClick={() => navigate('/booking')}>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Care Stages */}
            <section className="stage-section">
                <div className="stages-container">
                    <h2 className="section-head" style={{ textAlign: 'center', marginBottom: '60px' }}>Care For Every <span style={{ color: '#27B992' }}>Stage</span></h2>

                    {/* For Children */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Children</h4>
                        <div className="stage-grid">
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#0984e3' }}><FaTooth size={20} /></div>
                                <h4>Dentist</h4>
                                <p>Advanced oral health treatments from routine cleaning to complex surgery.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#fdcb6e' }}><FaBone size={20} /></div>
                                <h4>Orthopedic</h4>
                                <p>Specialized treatment for musculoskeletal injuries and bone health.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#e84393' }}><FaBaby size={20} /></div>
                                <h4>Pediatrician</h4>
                                <p>Gentle and expert medical care tailored specifically for growing children.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                        </div>
                    </div>

                    {/* For Women */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Women</h4>
                        <div className="stage-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' /* Just showing one as per image implies list */ }}>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#e84393' }}><FaFemale size={20} /></div>
                                <h4>Gynecologist</h4>
                                <p>Personalized reproductive and wellness care for women of every stage.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            {/* Empty slots to match layout feel or just one item */}
                            <div style={{ background: 'transparent', border: 'none' }}></div>
                            <div style={{ background: 'transparent', border: 'none' }}></div>
                        </div>
                    </div>

                    {/* For Adults */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Adults</h4>
                        <div className="stage-grid">
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#00cec9' }}><FaUserMd size={20} /></div>
                                <h4>General Physician</h4>
                                <p>Expert primary care for everyday health concerns and preventive wellness.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#0984e3' }}><FaTooth size={20} /></div>
                                <h4>Dentist</h4>
                                <p>Advanced oral health treatments from routine cleaning.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#d63031' }}><FaHeartbeat size={20} /></div>
                                <h4>Cardiologist</h4>
                                <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                        </div>
                    </div>

                    {/* For Seniors */}
                    <div className="stage-group">
                        <h4 className="stage-title">For Seniors</h4>
                        <div className="stage-grid">
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#00cec9' }}><FaUserMd size={20} /></div>
                                <h4>General Physician</h4>
                                <p>Expert primary care for everyday health concerns.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#0984e3' }}><FaTooth size={20} /></div>
                                <h4>Dentist</h4>
                                <p>Advanced oral health treatments from routine cleaning.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                            <div className="stage-card">
                                <div style={{ marginBottom: '10px', color: '#d63031' }}><FaHeartbeat size={20} /></div>
                                <h4>Cardiologist</h4>
                                <p>Comprehensive heart and vascular care using state-of-the-art diagnostics.</p>
                                <span className="stage-link">Clinical Care</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Directory Section */}
            <section className="directory-section">
                <div className="directory-container">
                    <div className="directory-header-row">
                        <h2 className="section-head" style={{ textAlign: 'left', margin: 0 }}>Complete <span style={{ color: '#27B992' }}>Directory</span></h2>
                        <div className="directory-search">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search specialty..." />
                        </div>
                    </div>

                    <div className="directory-list">
                        <div className="directory-item"><span className="dir-icon-img">👨‍⚕️</span> General Physician</div>
                        <div className="directory-item"><span className="dir-icon-img">🦷</span> Dentist</div>
                        <div className="directory-item"><span className="dir-icon-img">🫀</span> Cardiologist</div>
                        <div className="directory-item"><span className="dir-icon-img">🦴</span> Orthopedic</div>
                        <div className="directory-item"><span className="dir-icon-img">👶</span> Pediatrician</div>
                        <div className="directory-item"><span className="dir-icon-img">🧴</span> Dermatologist</div>
                        <div className="directory-item"><span className="dir-icon-img">♀️</span> Gynecologist</div>
                        <div className="directory-item"><span className="dir-icon-img">🧠</span> Neurologist</div>
                        <div className="directory-item"><span className="dir-icon-img">🧩</span> Psychiatrist</div>
                        <div className="directory-item"><span className="dir-icon-img">🧬</span> Endocrinologist</div>
                        <div className="directory-item"><span className="dir-icon-img">👁️</span> Ophthalmologist</div>
                        <div className="directory-item"><span className="dir-icon-img">👂</span> ENT Specialist</div>
                    </div>
                </div>
            </section>

            {/* Trust Banner Reuse */}
            <div className="trust-banner" style={{ maxWidth: '1300px', margin: '50px auto' }}>
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
                    <div className="trust-icon-box"><LogoIcon /></div>
                    <h4>Secure Medical Data</h4>
                    <p>Your privacy is our priority with HIPAA compliance.</p>
                </div>
            </div>

            {/* Footer reused */}
            <Footer />
        </div>
    );
};

export default Specialties;
