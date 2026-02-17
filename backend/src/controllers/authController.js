
const supabase = require('../config/supabaseClient');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { email, password, role, ...otherDetails } = req.body; // role: 'doctor' or 'patient'

        if (!email || !password || !role) {
            return res.status(400).json({ error: 'Email, password, and role are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let table = role === 'doctor' ? 'doctors' : 'patients';

        const { data, error } = await supabase
            .from(table)
            .insert([{ email, password: hashedPassword, ...otherDetails }])
            .select();

        if (error) throw error;

        res.status(201).json({ message: 'User registered successfully', user: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ error: 'Email, password, and role are required' });
        }

        let table = role === 'doctor' ? 'doctors' : 'patients';

        const { data, error } = await supabase
            .from(table)
            .select('*')
            .eq('email', email)
            .single();

        if (error || !data) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, data.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // In a real app, generate JWT here
        res.status(200).json({ message: 'Login successful', user: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };
