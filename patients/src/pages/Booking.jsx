import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaCheckCircle, FaMapMarkerAlt, FaRegClock, FaUser, FaPhoneAlt, FaCalendarAlt, FaStethoscope } from 'react-icons/fa';
import api from '../lib/api';
import './Booking.css';

const Booking = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Initial state from navigation or defaults
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(3); // Default to 3rd Feb as in image - should be real date
    const [selectedTime, setSelectedTime] = useState('01:30 PM');
    const [timePeriod, setTimePeriod] = useState('Morning'); // Morning, Afternoon, Evening
    const [isBooking, setIsBooking] = useState(false);

    // Patient Details State
    const [patientDetails, setPatientDetails] = useState({
        fullName: 'Suresh peddinti', // Hardcoded as per image placeholder/value
        age: '21 Yrs',
        gender: 'Male',
        phoneNumber: '+91 9618344086',
        reason: 'Fever With Last 2 Weeks',
        bookingForSomeoneElse: false
    });

    const [paymentMethod, setPaymentMethod] = useState('');

    // Doctor info (fallback if not passed via state)
    // IMPORTANT: In Phase 2, we should fetch doctor details if ID is present but full object is missing.
    // For now maximizing resilience by fallback.
    const doctor = location.state?.doctor || {
        id: 1, // Fallback ID
        name: 'Dr. Sarah Mitchell',
        specialty: 'Senior Cardiologist',
        image: '/dr_sarah_johnson_1.png',
        location: 'Heartcare Specialist Center',
        fee: '850'
    };

    const fee = parseInt(doctor.fee?.replace(/[^0-9]/g, '') || 850);
    const tax = Math.round(fee * 0.18);
    const total = fee + tax;

    const handleBooking = async () => {
        setIsBooking(true);
        try {
            // Convert time to 24H format for Backend
            // Mocking conversion for '01:30 PM' -> '13:30:00'
            const time24 = "13:30:00";
            const dateISO = "2026-02-10"; // Hardcoded next available date for Phase 2 demo

            await api.post('/appointments/book', {
                doctor_id: doctor.id,
                appointment_date: dateISO,
                appointment_time: time24,
                notes: patientDetails.reason
            });

            alert('Payment Successful! Appointment Booked.');
            navigate('/');
        } catch (error) {
            console.error(error);
            if (error.response?.status === 409) {
                alert('This slot is heavily booked! Please choose another time.');
            } else if (error.response?.status === 401) {
                alert('Session expired. Please login again.');
                navigate('/login');
            } else {
                alert('Booking failed. Please try again.');
            }
        } finally {
            setIsBooking(false);
        }
    };

    // Header with Progress Bar
    const renderHeader = () => (
        <div className="booking-header-container">
            <div className="booking-top-bar">
                <button className="back-circle-btn" onClick={() => step === 1 ? navigate(-1) : setStep(step - 1)}>
                    <FaChevronLeft />
                </button>
                <h2>Book Appointment</h2>

                <div className="booking-stepper">
                    {[
                        { num: 1, label: 'Slot' },
                        { num: 2, label: 'Details' },
                        { num: 3, label: 'Review' },
                        { num: 4, label: 'Payment' }
                    ].map((item, index) => (
                        <React.Fragment key={item.num}>
                            <div className={`step-item ${step >= item.num ? 'active' : ''}`}>
                                <div className="step-circle">{item.num}</div>
                                <span className="step-label">{item.label}</span>
                            </div>
                            {index < 3 && <div className={`step-line ${step > item.num ? 'active' : ''}`}></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );

    // Step 1: Slot Selection
    const renderSlotSelection = () => (
        <div className="booking-body">
            <div className="booking-main-col">
                <div className="booking-card">
                    <div className="card-header-row">
                        <h3>Select Date</h3>
                        <span className="current-month-year"><FaCalendarAlt /> February 2025</span>
                    </div>
                    <div className="dates-scroller">
                        {[
                            { day: 'Mon', date: 3 }, { day: 'Mon', date: 3 }, { day: 'Mon', date: 3 },
                            { day: 'Mon', date: 3 }, { day: 'Mon', date: 3 }, { day: 'Mon', date: 3 },
                            { day: 'Mon', date: 3 }, { day: 'Mon', date: 3 }
                        ].map((d, i) => ( // Using loops to match the repetitive image style for demo
                            <div key={i} className={`date-box ${i === 0 ? 'active' : ''}`}>
                                <span className="day-name">{d.day}</span>
                                <span className="date-num">{d.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="booking-card">
                    <div className="card-header-row">
                        <h3>Select Time</h3>
                        <div className="time-periods">
                            <span className={timePeriod === 'Morning' ? 'active' : ''} onClick={() => setTimePeriod('Morning')}>Morning</span>
                            <span className={timePeriod === 'Afternoon' ? 'active' : ''} onClick={() => setTimePeriod('Afternoon')}>Afternoon</span>
                            <span className={timePeriod === 'Evening' ? 'active' : ''} onClick={() => setTimePeriod('Evening')}>Evening</span>
                        </div>
                    </div>
                    <div className="time-slots-grid">
                        {['01:30 PM', '01:30 PM', '01:30 PM', '01:30 PM', '01:30 PM', '01:30 PM', '01:30 PM'].map((t, i) => (
                            <button key={i} className={`time-slot-btn ${i === 0 ? 'active' : ''}`}>{t}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="booking-sidebar-col">
                <div className="booking-summary-card">
                    <div className="doc-summary-header">
                        <img src={doctor.image} alt={doctor.name} className="doc-img-sm" />
                        <div>
                            <h4>{doctor.name}</h4>
                            <p>{doctor.specialty}</p>
                        </div>
                    </div>
                    <div className="doc-summary-details">
                        <div className="summary-row">
                            <FaMapMarkerAlt className="icon-grey" />
                            <div className="summary-text-grp">
                                <span className="label">Clinic Visit :</span>
                                <span className="value">{doctor.location}</span>
                            </div>
                        </div>
                        <div className="summary-row">
                            <FaRegClock className="icon-grey" />
                            <div className="summary-text-grp">
                                <span className="label">Consultation Fee:</span>
                                <span className="value price">₹{fee}</span>
                            </div>
                        </div>
                    </div>
                    <div className="selected-slot-box">
                        <div>
                            <span className="slot-label-sm">Selected Slot</span>
                            <span className="slot-value-lg">Feb 3, 01:30 PM</span>
                        </div>
                        <FaCheckCircle className="check-icon" />
                    </div>
                    <button className="btn-continue" onClick={() => setStep(2)}>Continue Booking</button>
                </div>
            </div>
        </div>
    );

    // Step 2: Patient Details
    const renderPatientDetails = () => (
        <div className="booking-body-centered">
            <div className="booking-card-lg">
                <h3>Patient Details</h3>
                <p className="sub-text">Please provide accurate info for the medical records.</p>
                <hr className="divider" />

                <form className="patient-form">
                    <div className="form-row">
                        <div className="form-group half">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Suresh peddinti"
                                value={patientDetails.fullName}
                                onChange={(e) => setPatientDetails({ ...patientDetails, fullName: e.target.value })}
                            />
                        </div>
                        <div className="form-group half">
                            <label>Age</label>
                            <input
                                type="text"
                                placeholder="Suresh peddinti"
                                value={patientDetails.age}
                                onChange={(e) => setPatientDetails({ ...patientDetails, age: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <div className="gender-options">
                            {['Male', 'Female', 'Other'].map(g => (
                                <button
                                    key={g}
                                    type="button"
                                    className={`gender-btn ${patientDetails.gender === g ? 'active' : ''}`}
                                    onClick={() => setPatientDetails({ ...patientDetails, gender: g })}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Suresh peddinti"
                            value={patientDetails.phoneNumber}
                            onChange={(e) => setPatientDetails({ ...patientDetails, phoneNumber: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Reason For Visit</label>
                        <textarea
                            placeholder="Suresh peddinti"
                            value={patientDetails.reason}
                            onChange={(e) => setPatientDetails({ ...patientDetails, reason: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="form-group checkbox-row">
                        <input
                            type="checkbox"
                            id="others"
                            checked={patientDetails.bookingForSomeoneElse}
                            onChange={(e) => setPatientDetails({ ...patientDetails, bookingForSomeoneElse: e.target.checked })}
                        />
                        <label htmlFor="others">Booking for someone else?</label>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-back-light" onClick={() => setStep(1)}>Back</button>
                        <button type="button" className="btn-continue" onClick={() => setStep(3)}>Procced To Payment</button>
                    </div>
                </form>
            </div>
        </div>
    );

    // Step 3: Review Appointment
    const renderReview = () => (
        <div className="booking-body-centered">
            <div className="booking-card-lg">
                <h3>Review Appointment</h3>
                <p className="sub-text">Check everything is correct before proceeding.</p>

                <h4 className="section-title-sm">APPOINTMENT SUMMARY</h4>

                <div className="review-summary-box">
                    <div className="review-doc-header">
                        <img src={doctor.image} alt={doctor.name} />
                        <div>
                            <h4>{doctor.name}</h4>
                            <p>{doctor.specialty}</p>
                        </div>
                    </div>
                    <div className="review-details-grid">
                        <div className="review-item">
                            <FaCalendarAlt className="icon-teal" /> <span>Feb 3, 2026</span>
                        </div>
                        <div className="review-item">
                            <FaRegClock className="icon-teal" /> <span>01:30 PM</span>
                        </div>
                        <div className="review-item">
                            <FaMapMarkerAlt className="icon-teal" /> <span>Clinic Visit</span>
                        </div>
                        <div className="review-item">
                            <FaUser className="icon-teal" /> <span>₹{fee}</span>
                        </div>
                    </div>
                </div>

                <h4 className="section-title-sm">PATIENT INFO</h4>
                <div className="patient-info-card">
                    <div className="info-row">
                        <span className="label">Patient Name</span>
                        <span className="value">{patientDetails.fullName}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Phone Number</span>
                        <span className="value">{patientDetails.phoneNumber}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Age / Gender</span>
                        <span className="value">{patientDetails.age.replace(' Yrs', '')} Yrs, {patientDetails.gender}</span>
                    </div>
                    <div className="info-row vertical">
                        <span className="label">Reason</span>
                        <span className="value">{patientDetails.reason}</span>
                    </div>
                </div>

                <div className="form-actions">
                    <button className="btn-back-light" onClick={() => setStep(2)}>Modify Details</button>
                    <button className="btn-continue" onClick={() => setStep(4)}>Confirm & Pay</button>
                </div>
            </div>
        </div>
    );

    // Step 4: Payment
    const renderPayment = () => (
        <div className="booking-body">
            <div className="booking-main-col">
                <div className="booking-card">
                    <h3>Payment Method</h3>
                    <div className="payment-options">
                        {[
                            { id: 'paytm', name: 'Paytm Wallet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png' },
                            { id: 'phonepay', name: 'PhonePe', img: 'https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png' },
                            { id: 'mobikwik', name: 'Mobikwik', img: 'https://download.logo.wine/logo/MobiKwik/MobiKwik-Logo.wine.png' },
                            { id: 'freecharge', name: 'Freecharge', img: 'https://download.logo.wine/logo/FreeCharge/FreeCharge-Logo.wine.png' }
                        ].map(method => (
                            <label key={method.id} className="payment-row">
                                <div className="pay-label-grp">
                                    <div className="pay-logo-box"><img src={method.img} alt={method.name} /></div>
                                    <span>{method.name}</span>
                                </div>
                                <input
                                    type="radio"
                                    name="payment"
                                    value={method.id}
                                    checked={paymentMethod === method.id}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <span className="radio-custom"></span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="booking-sidebar-col">
                <div className="booking-card">
                    <h3>Price Breakdown</h3>
                    <div className="price-row">
                        <span>Consultation Fee</span>
                        <span>₹{fee}</span>
                    </div>
                    <div className="price-row">
                        <span>Service Tax (18% GST)</span>
                        <span>₹{tax}</span>
                    </div>
                    <hr className="divider" />
                    <div className="price-row total">
                        <span>Total Amount</span>
                        <span className="total-val">₹{total}</span>
                    </div>

                    <button className="btn-continue btn-pay" disabled={isBooking} onClick={handleBooking}>
                        {isBooking ? 'Processing...' : `Pay ₹${total}`}
                    </button>
                    <div className="back-link-wrapper">
                        <a onClick={() => setStep(3)}>Back to review</a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="booking-page-container">
            {renderHeader()}
            <div className="booking-content-wrapper">
                {step === 1 && renderSlotSelection()}
                {step === 2 && renderPatientDetails()}
                {step === 3 && renderReview()}
                {step === 4 && renderPayment()}
            </div>
        </div>
    );
};

export default Booking;
