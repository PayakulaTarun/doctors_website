from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from database import get_db_connection
import mysql.connector

app = FastAPI()

# --- Pydantic Models ---
class Doctor(BaseModel):
    name: str
    age: int
    experience: str
    kyc_image: Optional[str] = None
    photo: Optional[str] = None
    clinic_location: Optional[str] = None
    timings: Optional[str] = None
    login_id: str
    password: str

class Patient(BaseModel):
    name: str
    age: int
    issue: Optional[str] = None
    phno: Optional[str] = None
    location: Optional[str] = None
    login_id: str
    password: str

class LoginRequest(BaseModel):
    login_id: str
    password: str

class Appointment(BaseModel):
    doctor_id: int
    patient_id: int
    appointment_date: str # Format: YYYY-MM-DD
    appointment_time: str # Format: HH:MM:SS
    notes: Optional[str] = None

class AppointmentUpdate(BaseModel):
    status: Optional[str] = None # scheduled, completed, cancelled, rescheduled
    appointment_date: Optional[str] = None
    appointment_time: Optional[str] = None

# --- Helper Function ---
def execute_query(query, params=None, fetch=False):
    conn = get_db_connection()
    if not conn:
        raise HTTPException(status_code=500, detail="Database connection failed")
    cursor = conn.cursor(dictionary=True)
    try:
        cursor.execute(query, params or ())
        if fetch:
            result = cursor.fetchall()
            return result
        conn.commit()
        return cursor.lastrowid
    except mysql.connector.Error as err:
        conn.rollback()
        raise HTTPException(status_code=500, detail=str(err))
    finally:
        cursor.close()
        conn.close()

# --- Endpoints ---

@app.get("/")
def read_root():
    return {"message": "Welcome to the Doctor Website API"}

# 1. Doctor Registration
@app.post("/register/doctor")
def register_doctor(doctor: Doctor):
    query = """
    INSERT INTO doctor (name, age, experience, kyc_image, photo, clinic_location, timings, login_id, password)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    params = (doctor.name, doctor.age, doctor.experience, doctor.kyc_image, doctor.photo, 
              doctor.clinic_location, doctor.timings, doctor.login_id, doctor.password)
    doctor_id = execute_query(query, params)
    return {"id": doctor_id, "message": "Doctor registered successfully"}

# 2. Patient Registration
@app.post("/register/patient")
def register_patient(patient: Patient):
    query = """
    INSERT INTO patients (name, age, issue, phno, location, login_id, password)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    params = (patient.name, patient.age, patient.issue, patient.phno, patient.location, 
              patient.login_id, patient.password)
    patient_id = execute_query(query, params)
    return {"id": patient_id, "message": "Patient registered successfully"}

# 3. Login (Generic for demo, normally would separate or use flags)
@app.post("/login/doctor")
def login_doctor(creds: LoginRequest):
    query = "SELECT * FROM doctor WHERE login_id = %s AND password = %s"
    results = execute_query(query, (creds.login_id, creds.password), fetch=True)
    if results:
        return {"message": "Login successful", "user": results[0]}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/login/patient")
def login_patient(creds: LoginRequest):
    query = "SELECT * FROM patients WHERE login_id = %s AND password = %s"
    results = execute_query(query, (creds.login_id, creds.password), fetch=True)
    if results:
        return {"message": "Login successful", "user": results[0]}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/login/admin")
def login_admin(creds: LoginRequest):
    query = "SELECT * FROM main_admin WHERE login_id = %s AND password = %s"
    results = execute_query(query, (creds.login_id, creds.password), fetch=True)
    if results:
        return {"message": "Login successful", "user": results[0]}
    raise HTTPException(status_code=401, detail="Invalid credentials")

# 4. Book Appointment
@app.post("/appointments/book")
def book_appointment(appt: Appointment):
    query = """
    INSERT INTO appointments (doctor_id, patient_id, appointment_date, appointment_time, notes, status)
    VALUES (%s, %s, %s, %s, %s, 'scheduled')
    """
    params = (appt.doctor_id, appt.patient_id, appt.appointment_date, appt.appointment_time, appt.notes)
    appt_id = execute_query(query, params)
    return {"id": appt_id, "message": "Appointment booked successfully"}

# 5. Get Appointments (Doctor View)
@app.get("/doctor/{doctor_id}/appointments")
def get_doctor_appointments(doctor_id: int):
    query = """
    SELECT a.*, p.name as patient_name, p.age as patient_age, p.issue as patient_issue 
    FROM appointments a
    JOIN patients p ON a.patient_id = p.id
    WHERE a.doctor_id = %s
    ORDER BY a.appointment_date, a.appointment_time
    """
    return execute_query(query, (doctor_id,), fetch=True)

# 6. Get Appointments (Patient View)
@app.get("/patient/{patient_id}/appointments")
def get_patient_appointments(patient_id: int):
    query = """
    SELECT a.*, d.name as doctor_name, d.clinic_location
    FROM appointments a
    JOIN doctor d ON a.doctor_id = d.id
    WHERE a.patient_id = %s
    ORDER BY a.appointment_date DESC
    """
    return execute_query(query, (patient_id,), fetch=True)

# 7. Update Appointment (Reschedule/Cancel)
@app.put("/appointments/{appointment_id}")
def update_appointment(appointment_id: int, update: AppointmentUpdate):
    fields = []
    params = []
    
    if update.status:
        fields.append("status = %s")
        params.append(update.status)
    if update.appointment_date:
        fields.append("appointment_date = %s")
        params.append(update.appointment_date)
    if update.appointment_time:
        fields.append("appointment_time = %s")
        params.append(update.appointment_time)
        
    if not fields:
        raise HTTPException(status_code=400, detail="No fields to update")
        
    params.append(appointment_id)
    query = f"UPDATE appointments SET {', '.join(fields)} WHERE id = %s"
    
    execute_query(query, tuple(params))
    return {"message": "Appointment updated successfully"}

# 8. Get Patient Profile (for Doctor)
@app.get("/patient/{patient_id}")
def get_patient_profile(patient_id: int):
    query = "SELECT * FROM patients WHERE id = %s"
    results = execute_query(query, (patient_id,), fetch=True)
    if results:
        return results[0]
    raise HTTPException(status_code=404, detail="Patient not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
