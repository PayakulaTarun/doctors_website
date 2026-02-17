import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaUserMd, FaTooth, FaHeartbeat, FaBone,
    FaNotesMedical, FaEye, FaVideo, FaMapMarkerAlt,
    FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
    FaCheckCircle, FaStar, FaPlus
} from 'react-icons/fa';
import { RiCalendarCheckLine, RiShieldCheckLine, RiServiceLine } from "react-icons/ri";
import Footer from '../components/Footer';

import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-logo">
                    <div className="nav-logo-icon"><FaHeartbeat /></div>
                    <span className="nav-logo-text">Healthcare</span>
                    <span className="nav-logo-sub">Medical Services</span>
                </div>
                <ul className="nav-links">
                    <li><a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a></li>
                    <li><a onClick={() => navigate('/find-doctors')} style={{ cursor: 'pointer' }}>Find Doctors</a></li>
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


            {/* Hero Section */}
            <header className="hero-section" id="home">
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Find The Right Doctor.<br />
                        Book <span className="green-text">Appointments Instantly.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Easily schedule appointments with the best doctors near you in India's best trusted medical network anytime, anywhere.
                    </p>
                </div>

                <div className="hero-search-box">
                    <div className="search-field">
                        <label>Search</label>
                        <div className="search-input-wrapper">
                            <FaSearch />
                            <input type="text" placeholder="Doctors, specialty or symptoms..." />
                        </div>
                    </div>
                    <div className="search-field">
                        <label>Location</label>
                        <div className="search-input-wrapper">
                            <FaMapMarkerAlt />
                            <input type="text" placeholder="Near by clinic, hospitals..." />
                        </div>
                    </div>
                    <div className="search-field">
                        <label>Consultation Type</label>
                        <div className="search-input-wrapper">
                            <FaVideo />
                            <select style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', color: '#555' }}>
                                <option>Online</option>
                                <option>Clinic Visit</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn-search">Search</button>
                </div>
            </header>

            {/* Stats Bar */}
            <div className="stats-bar">
                <div className="stat-item">
                    <div className="stat-icon bg-punk-light"><RiCalendarCheckLine /></div>
                    <div className="stat-info">
                        <h3>5,000+</h3>
                        <p>Verified Doctors</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon bg-peach-light"><FaHeartbeat /></div>
                    <div className="stat-info">
                        <h3>20+</h3>
                        <p>Medical Specialities</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon bg-purple-light"><FaUserMd /></div>
                    <div className="stat-info">
                        <h3>1M+</h3>
                        <p>Happy Patients</p>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon bg-yellow-light"><RiShieldCheckLine /></div>
                    <div className="stat-info">
                        <h3>24/7</h3>
                        <p>Booking Support</p>
                    </div>
                </div>
            </div>

            {/* Specialties Section */}
            <section className="section" id="specialists">
                <h2 className="section-title">Consult Doctors Across <span className="green-text">Top Specialties</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '50px', color: '#777' }}>Book appointments for any medical concern with verified specialists.</p>

                <div className="specialties-grid">
                    <div className="specialty-card">
                        <div className="specialty-icon"><FaUserMd /></div>
                        <h4>General Physician</h4>
                        <p>Diagnosis and treatment for common illnesses and preventive care.</p>
                        <a href="#" className="read-more">Read more <FaArrowRight size={12} /></a>
                    </div>
                    <div className="specialty-card">
                        <div className="specialty-icon"><FaTooth /></div>
                        <h4>Dentist</h4>
                        <p>Complete dental care including checkups and treatments.</p>
                        <a href="#" className="read-more">Read more <FaArrowRight size={12} /></a>
                    </div>
                    <div className="specialty-card">
                        <div className="specialty-icon"><FaHeartbeat /></div>
                        <h4>Cardiologist</h4>
                        <p>Heart health consultation and cardiac care.</p>
                        <a href="#" className="read-more">Read more <FaArrowRight size={12} /></a>
                    </div>
                    <div className="specialty-card">
                        <div className="specialty-icon"><FaBone /></div>
                        <h4>Orthopedic Care</h4>
                        <p>Specialized care for bone, joint, and muscle conditions.</p>
                        <a href="#" className="read-more">Read more <FaArrowRight size={12} /></a>
                    </div>
                    <div className="specialty-card">
                        <div className="specialty-icon"><FaNotesMedical /></div>
                        <h4>Pediatrician</h4>
                        <p>Medical care for infants and children. And growth</p>
                        <a href="#" className="read-more">Read more <FaArrowRight size={12} /></a>
                    </div>
                    <div className="specialty-card">
                        <div className="specialty-icon"><FaNotesMedical /></div>
                        <h4>Dermatologist</h4>
                        <p>Guided recovery programs for post-surgical patients.</p>
                        <a href="#" className="read-more">Read more <FaArrowRight size={12} /></a>
                    </div>
                </div>
            </section>

            {/* Booking Steps Section */}
            <section className="section booking-section section-bg-gray">
                <div className="booking-content">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                        How Appointment <span className="green-text">Booking Works</span>
                    </h2>
                    <div className="step-list">
                        <div className="step-item">
                            <div className="step-icon"><FaSearch /></div>
                            <div className="step-info">
                                <h4>Step 1 - Search Doctor</h4>
                                <p>Search specifically via specialty, location, or name.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-icon"><RiCalendarCheckLine /></div>
                            <div className="step-info">
                                <h4>Step 2 - Choose Slot</h4>
                                <p>Select available date and time as per convenience.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-icon"><FaUserMd /></div>
                            <div className="step-info">
                                <h4>Step 3 - Book Appointment</h4>
                                <p>Confirm your appointment instantly.</p>
                            </div>
                        </div>
                        <div className="step-item">
                            <div className="step-icon"><RiServiceLine /></div>
                            <div className="step-info">
                                <h4>Step 4 - Get Care</h4>
                                <p>Consult online or visit clinic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking-image">
                    {/* Using appointment_page.png as it seems most appropriate for 'booking context' visual */}
                    <img src="/appointment_page.png" alt="Booking Process" />
                </div>
            </section>

            {/* Trusted Partner Section */}
            <section className="section partner-section">
                <div className="image-side">
                    <img src="/health_care_partner_page.png" alt="Trusted Partner" />
                </div>
                <div className="content-side">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>
                        Your Trusted Digital<br />
                        <span className="green-text">Healthcare Partner</span>
                    </h2>
                    <p style={{ color: '#666', lineHeight: '1.6', fontSize: '15px', marginBottom: '30px' }}>
                        We make healthcare simple and accessible by connecting patients with verified doctors across multiple specialties. Book appointments, consult online, or visit clinics — all in one place.
                    </p>
                    <ul className="feature-list">
                        <li><FaCheckCircle className="check-circle" /> Verified & Experienced Doctors</li>
                        <li><FaCheckCircle className="check-circle" /> Easy Appointment Booking</li>
                        <li><FaCheckCircle className="check-circle" /> Online & In-Clinic Consultations</li>
                    </ul>
                    <button className="btn-primary" style={{ borderRadius: '50px', padding: '12px 35px' }}>Learn More <FaArrowRight style={{ marginLeft: '8px' }} /></button>
                </div>
            </section>

            {/* Not Sure Selection */}
            <section className="section" id="symptoms">
                <h2 className="section-title">Not Sure Which <span className="green-text">Doctor To Visit?</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '60px', color: '#777' }}>Book appointments for any medical concern with verified specialists.</p>

                <div className="symptoms-grid">
                    <div className="symptom-card">
                        <div className="symptom-icon bg-red-soft"><FaHeartbeat /></div>
                        <div className="symptom-info">
                            <h4>Fever</h4>
                            <p>Consult general physicians for diagnosis and care.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon bg-blue-soft"><FaBone /></div>
                        <div className="symptom-info">
                            <h4>Back Pain</h4>
                            <p>Find orthopedic specialists for relief.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon bg-blue-soft"><FaTooth /></div>
                        <div className="symptom-info">
                            <h4>Tooth Ache</h4>
                            <p>Book trusted dental professionals.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon bg-orange-soft"><FaNotesMedical /></div>
                        <div className="symptom-info">
                            <h4>Skin Allergy</h4>
                            <p>Consult dermatologists for skin issues.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon bg-red-soft"><FaHeartbeat /></div>
                        <div className="symptom-info">
                            <h4>Heart Issues</h4>
                            <p>Get expert cardiac consultation.</p>
                        </div>
                    </div>
                    <div className="symptom-card">
                        <div className="symptom-icon bg-orange-soft"><FaBone /></div>
                        <div className="symptom-info">
                            <h4>Joint Pain</h4>
                            <p>Orthopedic care for joints and muscles.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Doctors Section */}
            <section className="section" id="find-doctors">
                <h2 className="section-title">Top Rated Doctors <span className="green-text">Near You</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '60px', color: '#777' }}>Book with our highest-rated medical professionals trusted by the community.</p>

                <div className="doctors-grid">
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sarah_johnson_1.png" alt="Dr. Sarah Johnson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 4.8</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Sarah Johnson</h4>
                            <span className="doctor-specialty">Cardiology Specialist</span>
                            <div className="doctor-meta">
                                <span><FaMapMarkerAlt /> New York</span>
                                <span>12 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Sarah Johnson', specialty: 'Cardiology Specialist', image: '/dr_sarah_johnson_1.png', location: 'New York', consultation_fee: '150' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sarah_johnson.png" alt="Dr. Mark Wilson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 4.9</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Mark Wilson</h4>
                            <span className="doctor-specialty">Dental Specialist</span>
                            <div className="doctor-meta">
                                <span><FaMapMarkerAlt /> Seattle</span>
                                <span>8 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Mark Wilson', specialty: 'Dental Specialist', image: '/dr_sarah_johnson.png', location: 'Seattle', consultation_fee: '850' } } })}>Book Appointment</button>
                        </div>
                    </div>
                    <div className="doctor-card">
                        <div className="doctor-img-container">
                            <img src="/dr_sarah_johnson_2.png" alt="Dr. Emily Jones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="rating-badge"><FaStar size={10} /> 5.0</div>
                        </div>
                        <div className="doctor-card-content">
                            <h4>Dr. Emily Jones</h4>
                            <span className="doctor-specialty">Orthopedic specialist</span>
                            <div className="doctor-meta">
                                <span><FaMapMarkerAlt /> Miami</span>
                                <span>15 Years Experience</span>
                            </div>
                            <button className="btn-primary" style={{ width: '100%', borderRadius: '8px', justifyContent: 'center' }} onClick={() => navigate('/booking', { state: { doctor: { name: 'Dr. Emily Jones', specialty: 'Orthopedic specialist', image: '/dr_sarah_johnson_2.png', location: 'Miami', consultation_fee: '150' } } })}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section">
                <h2 className="section-title">What Our Patients <span className="green-text">Say</span></h2>
                <p style={{ marginTop: '-40px', marginBottom: '60px', color: '#777' }}>Real stories from our healthy community.</p>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <p className="testimonial-text">"LuxeService completely transformed our brand perception. Their attention to detail and premium approach is unmatched in the industry."</p>
                        <div className="testimonial-user">
                            <div className="user-avatar">R</div>
                            <div className="user-info">
                                <h4>Richard James</h4>
                                <span>CEO, TechCorp</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <p className="testimonial-text">"The level of care and professionalism displayed by the doctors here is outstanding. I felt heard and well taken care of throughout my visit."</p>
                        <div className="testimonial-user">
                            <div className="user-avatar">S</div>
                            <div className="user-info">
                                <h4>Sarah Williams</h4>
                                <span>Patient</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <p className="testimonial-text">"Booking an appointment was seamless, and the clinic's atmosphere is so calming. Highly recommend this healthcare provider to everyone."</p>
                        <div className="testimonial-user">
                            <div className="user-avatar">M</div>
                            <div className="user-info">
                                <h4>Michael Brown</h4>
                                <span>Entrepreneur</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Mode Section */}
            <section className="section">
                <div className="consultation-banner">
                    <div className="consult-mode-card online">
                        <div className="mode-icon"><FaVideo /></div>
                        <h3>Online Consultation</h3>
                        <p>Secure video calls from home with instant booking and direct prescription delivery.</p>
                        <div className="mode-feature"><FaCheckCircle /> High Definition Video</div>
                        <button className="btn-mode online-btn">Start Consultation</button>
                    </div>
                    <div className="consult-mode-card clinic">
                        <div className="mode-icon"><FaMapMarkerAlt /></div>
                        <h3>Clinic Visit</h3>
                        <p>Prefer face-to-face? Book an appointment at one of our nearby modern medical clinics.</p>
                        <div className="mode-feature"><FaCheckCircle /> Nearby Medical Facilities</div>
                        <button className="btn-mode clinic-btn">Find Clinics</button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" id="faq">
                <h2 className="section-title">Frequently Asked <span className="green-text">Questions</span></h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <h4>How Does Your Interior Design Process Work?</h4>
                        <FaPlus className="faq-icon" />
                    </div>
                    <div className="faq-item">
                        <h4>Do You Provide Customized Interior Solutions?</h4>
                        <FaPlus className="faq-icon" />
                    </div>
                    <div className="faq-item">
                        <h4>How Long Does An Interior Project Usually Take?</h4>
                        <FaPlus className="faq-icon" />
                    </div>
                    <div className="faq-item">
                        <h4>Can I Choose My Own Materials And Finishes?</h4>
                        <FaPlus className="faq-icon" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
