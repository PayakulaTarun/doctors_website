import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FindDoctors from './pages/FindDoctors';
import DoctorProfile from './pages/DoctorProfile';
import Specialties from './pages/Specialties';
import Symptoms from './pages/Symptoms';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
