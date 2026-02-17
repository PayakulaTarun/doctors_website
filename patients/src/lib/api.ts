import axios from 'axios';

// Base API Configuration
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle 401 & Errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Check for 401 Unauthorized
        if (error.response && error.response.status === 401) {
            // Clear invalid token
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_role');

            // Redirect to login if not already there
            if (!window.location.pathname.includes('/login')) {
                // Using window.location.href is safe here as this is a hard redirect for auth failure
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;
