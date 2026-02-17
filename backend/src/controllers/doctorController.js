
const supabase = require('../config/supabaseClient');

const getDoctors = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('doctors')
            .select('*');

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDoctorById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('doctors')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Doctor not found' });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const { data, error } = await supabase
            .from('doctors')
            .update(updates)
            .eq('id', id)
            .select();

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getDoctors, getDoctorById, updateDoctor };
