import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../lib/api';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Auth.css';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Using OAuth2 spec: form-data body
            const params = new URLSearchParams();
            params.append('username', formData.emailOrPhone);
            params.append('password', formData.password);

            const response = await api.post('/auth/login', params, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            const { access_token } = response.data;

            // In a real app we would now fetch user details. 
            // For Phase 2, we assume role based on token payload or a separate /me endpoint.
            // Let's implement a simple /me fetch for correctness.

            // Manually decode JWT to get role for immediate redirect (or fetch user profile)
            // Ideally we call /me endpoint. For now decoding or fetching profile.
            // Temporarily mock user data until /me endpoint is standardized or we decode token.
            // But we can decode the token client side easily.

            const payload = JSON.parse(atob(access_token.split('.')[1]));
            const user = {
                id: payload.sub,
                role: payload.role,
                email: formData.emailOrPhone,
                full_name: 'User' // Placeholder
            };

            login(access_token, user);

            if (user.role === 'doctor') {
                // If this was the patient app, we might want to warn them or redirect.
                // Assuming this login page handles both for now, or Patient Portal login.
                window.location.href = 'http://localhost:3000'; // Redirect to Doctor Dashboard
            } else {
                navigate('/');
            }

        } catch (err) {
            console.error('Login Failed', err);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-form-section">
                    <div className="auth-header">
                        <h1>Login To Your Account</h1>
                        <p>Welcome back, Please enter your details.</p>
                    </div>

                    {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="emailOrPhone">Email</label>
                            <input
                                type="text"
                                id="emailOrPhone"
                                name="emailOrPhone"
                                placeholder="Enter email"
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

                        <div className="form-options">
                            <label className="remember-me">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                />
                                Remember me
                            </label>
                            <a href="#" className="forgot-password">Forget Password?</a>
                        </div>

                        <button type="submit" className="auth-btn" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>

                        <div className="divider">Or Continue With</div>

                        <div className="social-login">
                            <div className="social-btn"><FaFacebook size={24} color="#1877F2" /></div>
                            <div className="social-btn"><FcGoogle size={24} /></div>
                        </div>

                        <div className="auth-footer">
                            Don't Have An Account? <Link to="/signup">Create One</Link>
                        </div>
                    </form>
                </div>
                <div className="auth-image-section">
                    <img src="/login_page_image.png" alt="Doctors Team" />
                </div>
            </div>
        </div>
    );
};

export default Login;
