
const supabase = require('../config/supabaseClient');

const bookAppointment = async (req, res) => {
    try {
        const { doctor_id, patient_id, appointment_date, appointment_time, notes } = req.body;

        const { data, error } = await supabase
            .from('appointments')
            .insert([{ doctor_id, patient_id, appointment_date, appointment_time, notes, status: 'scheduled' }])
            .select();

        if (error) throw error;
        res.status(201).json({ message: 'Appointment booked successfully', appointment: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAppointments = async (req, res) => {
    try {
        const { userId, role } = req.query; // role: 'doctor' or 'patient'

        let query = supabase
            .from('appointments')
            .select(`
                *,
                doctors:doctor_id (name, specialization, clinic_location),
                patients:patient_id (name, age, issue)
            `);

        if (role === 'doctor') {
            query = query.eq('doctor_id', userId);
        } else {
            query = query.eq('patient_id', userId);
        }

        const { data, error } = await query;

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body; // status, date, time

        const { data, error } = await supabase
            .from('appointments')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { bookAppointment, getAppointments, updateAppointment };
