import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaRegFolderOpen, FaRegClock, FaMapMarkerAlt, FaPhoneAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { FaHeartbeat as LogoIcon } from 'react-icons/fa';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "How Does Your Interior Design Process Work?", a: "We start with a consultation to understand your needs, followed by design concepts, revisions, and final implementation." },
        { q: "Do You Provide Customized Interior Solutions?", a: "Yes, every project is tailored specifically to the client's preferences and space requirements." },
        { q: "How Long Does An Interior Project Usually Take?", a: "Timelines vary by project size, but typically range from 2 weeks for single rooms to a few months for full homes." },
        { q: "Can I Choose My Own Materials And Finishes?", a: "Absolutely! We encourage client involvement/selection to ensure the final result feels personal to you." }
    ];

    return (
        <div className="contact-page">
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
                        <li><a onClick={() => navigate('/about')} style={{ cursor: 'pointer', color: '#333' }}>About Us</a></li>
                        <li><a href="#" className="active" style={{ fontWeight: 'bold', color: '#555' }}>Contact</a></li>
                        <li><a className="login-link" onClick={() => navigate('/login')} style={{ fontWeight: 'bold', color: '#333', cursor: 'pointer' }}>Login / Sign Up</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button className="btn-primary" onClick={() => navigate('/booking')} style={{ borderRadius: '50px', padding: '10px 25px', background: '#27B992', color: 'white', border: 'none' }}>Book Appointment <FaArrowRight /></button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1>We're Here To<br /><span>Help You</span></h1>
                    <p>Have a question, need support, or want to partner with us? Our team is ready to assist you at every step.</p>
                </div>
                <div className="contact-hero-image">
                    {/* Assuming contact_page_image is the hero image based on request */}
                    <img src="/contact_page_image.png" alt="Support Team" />
                </div>
            </section>

            {/* Support Options */}
            <section className="support-section">
                <div className="support-card">
                    <div className="support-icon"><FaSearch color="#ff6b6b" /></div> {/* Orange/Red icon */}
                    <h3>Customer Support</h3>
                    <p>Get help with bookings and consultations.</p>
                    <a href="#" className="support-email">support@medicalsite.com</a>
                </div>
                <div className="support-card">
                    <div className="support-icon"><FaRegFolderOpen color="#feca57" /></div> {/* Yellow icon */}
                    <h3>Doctor Support</h3>
                    <p>For doctors & clinics using our platform.</p>
                    <a href="#" className="support-email">doctors@medicalsite.com</a>
                </div>
                <div className="support-card">
                    <div className="support-icon"><FaRegClock color="#ff9f43" /></div> {/* Orange icon */}
                    <h3>Partnerships</h3>
                    <p>Collaborate or integrate with our network.</p>
                    <a href="#" className="support-email">partners@medicalsite.com</a>
                </div>
            </section>

            {/* Contact Form */}
            <section className="contact-form-section">
                <h2>Send Us A Message</h2>
                <p>We usually respond within 24 hours.</p>

                <form>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Sarah Johnson" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="sarah@post.com" />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Sarah Johnson" />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select>
                                <option>General Inquiry</option>
                                <option>Support</option>
                                <option>Partnership</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group" style={{ marginBottom: '30px' }}>
                        <label>Message</label>
                        <textarea placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="button" className="btn-send-msg">Send Message</button>
                </form>
            </section>

            {/* Office Section */}
            <section className="office-section">
                <div className="office-info">
                    <h2>Our Office</h2>
                    <p>We are conveniently located in the heart of Attapur to serve our local community.</p>

                    <div className="office-detail-item">
                        <div className="office-icon-box bg-light-teal"><FaMapMarkerAlt /></div>
                        <div className="office-text">
                            <h4>Our Address</h4>
                            <p>Attapur, Inner Ring Rd, Pillar No 143,<br />Hyderabad, Telangana 500048</p>
                        </div>
                    </div>

                    <div className="office-detail-item">
                        <div className="office-icon-box bg-light-teal"><FaRegClock /></div>
                        <div className="office-text">
                            <h4>Business Hours</h4>
                            <p>Monday – Saturday: 9:00 AM – 7:00 PM<br /><span>Sunday: Emergency Only</span></p>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    {/* Static map placeholder or iframe if preferred. Image suggests a custom map graphic. for now a placeholder showing area */}
                    <iframe
                        title="Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0, opacity: 0.8 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.82393845927!2d78.4238!3d17.3916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb970868732d8f%3A0x6331899131d9266a!2sAttapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625634567890!5m2!1sen!2sin"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked <span>Questions</span></h2>
                <div className="faq-list">
                    {faqs.map((item, idx) => (
                        <div className={`faq-item ${openFaq === idx ? 'active' : ''}`} key={idx} onClick={() => toggleFaq(idx)}>
                            <div className="faq-header">
                                {item.q}
                                <span className="faq-icon">{openFaq === idx ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            <div className="faq-content">
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
