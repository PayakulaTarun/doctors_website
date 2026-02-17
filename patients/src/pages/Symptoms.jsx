import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaSearch, FaArrowRight, FaHeadSideVirus, FaLungs, FaStethoscope,
    FaBone, FaBrain, FaHeartbeat, FaUserMd, FaBaby, FaCheckCircle,
    FaPlus, FaAmbulance, FaShieldAlt
} from 'react-icons/fa';
import { GiStomach, GiJoint } from 'react-icons/gi';
import Footer from '../components/Footer';
import './Symptoms.css';
import { FaHeartbeat as LogoIcon } from 'react-icons/fa'; // Navbar Logo reuse

const Symptoms = () => {
    const navigate = useNavigate();
    const [activeBodyArea, setActiveBodyArea] = useState('Head & Neck');
    const [activeSymptom, setActiveSymptom] = useState('Fever');

    const symptomsData = {
        'Fever': {
            description: "A temporary increase in body temperature, often due to an illness. It's a sign that something out of the ordinary is going on in your body.",
            departments: [
                { name: 'General Physician', sub: 'Board Certified Experts', icon: <FaUserMd /> },
                { name: 'Pediatrician', sub: 'Board Certified Experts', icon: <FaBaby /> }
            ]
        },
        'Back Pain': {
            description: "Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling. Common causes include muscle strain and poor posture.",
            departments: [
                { name: 'Orthopedic', sub: 'Bone & Joint Specialists', icon: <FaBone /> },
                { name: 'Physiotherapist', sub: 'Rehabilitation Experts', icon: <FaUserMd /> }
            ]
        },
        'Tooth Ache': {
            description: "Pain in or around a tooth, often caused by tooth decay, an abscess, or gum infection. Early treatment can prevent complications.",
            departments: [
                { name: 'Dentist', sub: 'Dental Care Experts', icon: <FaUserMd /> }
            ]
        },
        'Skin Allergy': {
            description: "An immune system reaction that causes skin irritation, rashes, or swelling. Common triggers include certain foods, pollen, or pet dander.",
            departments: [
                { name: 'Dermatologist', sub: 'Skin Care Specialists', icon: <FaUserMd /> }
            ]
        },
        'Headache': {
            description: "Pain or discomfort in the head or face. Causes can range from stress and dehydration to more complex neurological issues.",
            departments: [
                { name: 'General Physician', sub: 'Primary Care', icon: <FaUserMd /> },
                { name: 'Neurologist', sub: 'Brain & Nerve Specialists', icon: <FaBrain /> }
            ]
        },
        'Joint Pain': {
            description: "Discomfort, aches, or soreness in any of the body's joints. It is a common complaint and can be caused by injury or arthritis.",
            departments: [
                { name: 'Orthopedic', sub: 'Joint Specialists', icon: <GiJoint /> },
                { name: 'Rheumatologist', sub: 'Arthritis Experts', icon: <FaUserMd /> }
            ]
        }
    };

    const bodyAreas = [
        { name: 'Head & Neck', icon: <FaHeadSideVirus />, color: '#fff', bg: '#1abc9c' }, /* Greenish */
        { name: 'Chest & Respiratory', icon: <FaLungs />, color: '#fff', bg: '#ff6b6b' }, /* Reddish/Pink */
        { name: 'Abdomen & Digestive', icon: <GiStomach />, color: '#fff', bg: '#feca57' }, /* Yellowish */
        { name: 'Joints & Bones', icon: <GiJoint />, color: '#fff', bg: '#54a0ff' }, /* Blueish */
    ];

    const bodySymptoms = {
        'Head & Neck': ['Headache', 'Migraine', 'Dizziness', 'Vision Blur', 'Sore Throat'],
        'Chest & Respiratory': ['Chest Pain', 'Shortness of Breath', 'Cough', 'Wheezing', 'Congestion'],
        'Abdomen & Digestive': ['Stomach Ache', 'Nausea', 'Indigestion', 'Acid Reflux', 'Bloating'],
        'Joints & Bones': ['Knee Pain', 'Back Pain', 'Neck Stiffness', 'Arthritis', 'Muscle Cramp']
    };

    return (
        <div className="symptoms-page">
            {/* Navbar (Duplicated for consistency) */}
            {/* Navbar (Custom Pill Style for Symptoms Page) */}
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
                        <li><a href="#" className="active" style={{ color: '#555', fontWeight: 'bold' }}>Symptoms</a></li>
                        <li><a onClick={() => navigate('/about')} style={{ cursor: 'pointer', color: '#333' }}>About Us</a></li>
                        <li><a onClick={() => navigate('/contact')} style={{ cursor: 'pointer', color: '#333' }}>Contact</a></li>
                        <li><a className="login-link" onClick={() => navigate('/login')} style={{ fontWeight: 'bold', color: '#333', cursor: 'pointer' }}>Login / Sign Up</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button className="btn-primary" onClick={() => navigate('/booking')} style={{ borderRadius: '50px', padding: '10px 25px', background: '#27B992', color: 'white', border: 'none' }}>Book Appointment <FaArrowRight /></button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <header className="sym-hero">
                <div style={{ marginBottom: '20px' }}><span style={{ border: '1px solid #27B992', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', background: '#fff', color: '#27B992' }}>Health Assistance</span></div>
                <h1>Find The Right Doctor<br />Based On <span>Your Symptoms</span></h1>
                <p>Tell us how you're feeling, and we'll guide you to the right medical specialist.</p>

                <div className="sym-search-box">
                    <FaSearch />
                    <input type="text" placeholder="search symptoms like fever, backpain, skin allergy...." />
                    <button className="btn-find-spec">Find Specialists</button>
                </div>

                <div className="quick-tags">
                    {Object.keys(symptomsData).map(symptom => (
                        <div
                            key={symptom}
                            className={`sym-tag ${activeSymptom === symptom ? 'active' : ''}`}
                            onClick={() => setActiveSymptom(symptom)}
                        >
                            {symptom}
                        </div>
                    ))}
                </div>
            </header>

            {/* Highlight Section */}
            <section className="sym-highlight-section">
                <div className="sym-detail-card">
                    <h2><span className="title-bar"></span>{activeSymptom}</h2>
                    <p>{symptomsData[activeSymptom].description}</p>

                    <div style={{ fontSize: '12px', color: '#27B992', fontWeight: 'bold', marginBottom: '15px' }}>Recommended Departments</div>
                    <div className="rec-depts">
                        {symptomsData[activeSymptom].departments.map((dept, idx) => (
                            <div className="dept-pill" key={idx}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#333' }}>{dept.name}</div>
                                        <div style={{ fontSize: '11px', color: '#999', fontWeight: 'normal' }}>{dept.sub}</div>
                                    </div>
                                </div>
                                <div style={{ color: '#27B992', background: '#eefbf9', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaArrowRight size={10} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Body Area Section */}
            <section className="body-area-section">
                <h2 className="section-head-center">Symptoms By <span style={{ color: '#27B992' }}>Body Area</span></h2>
                <p style={{ textAlign: 'center', marginTop: '10px', marginBottom: '50px', color: '#888', fontSize: '16px' }}>Click on a region to narrow down your concerns.</p>

                <div className="body-area-container">
                    {/* Left Menu */}
                    <div className="body-menu">
                        {bodyAreas.map((area) => (
                            <div
                                key={area.name}
                                className={`body-menu-item ${activeBodyArea === area.name ? 'active' : ''}`}
                                onClick={() => setActiveBodyArea(area.name)}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="body-icon-circle" style={{ background: area.bg, color: area.color }}>{area.icon}</div>
                                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{area.name}</span>
                                </div>
                                <div className={`status-dot ${activeBodyArea === area.name ? 'active' : ''}`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Right Panel */}
                    <div className="body-detail-panel">
                        <div className="body-detail-header"><span className="title-bar" style={{ marginRight: '15px', height: '24px' }}></span> {activeBodyArea}</div>
                        <div className="symptom-list-grid">
                            {bodySymptoms[activeBodyArea].map((sym, i) => (
                                <div className="symptom-item" key={i}>
                                    {sym}
                                    <div style={{ background: '#eefbf9', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <FaArrowRight size={10} color="#27B992" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Condition Insights */}
            <section className="insights-section">
                <h2 className="section-head-center" style={{ marginBottom: '10px' }}>Condition Insights</h2>
                <p style={{ color: '#666' }}>In-depth looks at common symptoms and specialized pathways.</p>

                <div className="insight-grid">
                    <div className="insight-card bg-cream">
                        <div className="insight-icon" style={{ color: '#FF7F50' }}><FaBone /></div>
                        <h3>Chronic Back Pain</h3>
                        <p>Understanding potential spinal issues, posture-related strain, and when to consult Orthopedics.</p>
                        <a href="#" className="link-find">Find Doctors</a>
                    </div>
                    <div className="insight-card bg-lavender">
                        <div className="insight-icon" style={{ color: '#9B59B6' }}><GiStomach /></div>
                        <h3>Digestive Health</h3>
                        <p>Identifying triggers for acidity and bloating, and exploring Gastroenterology solutions.</p>
                        <a href="#" className="link-find">Find Doctors</a>
                    </div>
                    <div className="insight-card bg-mint">
                        <div className="insight-icon" style={{ color: '#27B992' }}><FaBrain /></div>
                        <h3>Mental Wellness</h3>
                        <p>Signs of anxiety, fatigue, and burnout. Connecting you with our mental health specialists.</p>
                        <a href="#" className="link-find">Find Doctors</a>
                    </div>
                </div>
            </section>

            {/* What Happens Next? */}
            <section className="steps-section">
                <h2 className="section-head-center">What Happens Next?</h2>
                <div className="steps-container">
                    <div className="step-box-center">
                        <div className="step-icon-lg"><FaCheckCircle /></div>
                        <p>Step 01</p>
                        <h4>Select Symptom</h4>
                    </div>
                    <div className="step-box-center">
                        <div className="step-icon-lg"><FaUserMd /></div>
                        <p>Step 02</p>
                        <h4>See Specialists</h4>
                    </div>
                    <div className="step-box-center">
                        <div className="step-icon-lg"><FaStethoscope /></div>
                        <p>Step 03</p>
                        <h4>Choose Visit</h4>
                    </div>
                    <div className="step-box-center">
                        <div className="step-icon-lg"><FaShieldAlt /></div>
                        <p>Step 04</p>
                        <h4>Book Securely</h4>
                    </div>
                </div>
            </section>

            {/* Emergency Banner */}
            <div className="emergency-banner-container">
                <div className="emergency-banner">
                    <div className="emerg-icon"><FaAmbulance /></div>
                    <div className="emerg-content">
                        <h4>Emergency Medical Care</h4>
                        <p>If your symptoms are severe or life-threatening (e.g., severe chest pain, extreme difficulty breathing, sudden paralysis), please seek emergency medical care immediately by calling your local emergency services.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Symptoms;
