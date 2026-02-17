import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempt:', formData);
        // Add signup logic here
    };

    return (
        <div className="auth-container">
            <div className="auth-card signup-mode">
                {/* Form Section - Full Width for Signup */}
                <div className="auth-form-section">
                    <div className="auth-header">
                        <h1>Create Your Account</h1>
                        <p>Join our medical network today.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Enter full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="emailOrPhone">Email Or Phone Number</label>
                            <input
                                type="text"
                                id="emailOrPhone"
                                name="emailOrPhone"
                                placeholder="Enter email or phone"
                                value={formData.emailOrPhone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="auth-btn">Create Account</button>

                        <div className="divider">
                            Or Continue With
                        </div>

                        <div className="social-login">
                            <div className="social-btn">
                                <FaFacebook size={24} color="#1877F2" />
                            </div>
                            <div className="social-btn">
                                <FcGoogle size={24} />
                            </div>
                        </div>

                        <div className="auth-footer">
                            Already Have An Account? <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
