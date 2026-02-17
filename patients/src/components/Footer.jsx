import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <div className="nav-logo" style={{ justifyContent: 'flex-start', marginBottom: '20px', alignItems: 'center', display: 'flex', gap: '12px' }}>
                        <img src="/zynrova_logo.svg" alt="Zynrova" style={{ height: '35px', objectFit: 'contain' }} />
                        <span className="nav-logo-text" style={{ color: 'white', fontSize: '28px', fontWeight: '700', letterSpacing: '-0.5px' }}>zynrova</span>
                    </div>
                    <p>Building reliable digital solutions for modern businesses.</p>
                </div>
                <div className="footer-col">
                    <h3>SERVICES</h3>
                    <ul className="footer-links">
                        <li><a href="#">Mobile Apps</a></li>
                        <li><a href="#">Web development</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>QUICK LINKS</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>QUICK CONTACT</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon-link"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon-link"><FaFacebookF /></a>
                        <a href="#" className="social-icon-link"><FaInstagram /></a>
                        <a href="#" className="social-icon-link"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Zynrova. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
