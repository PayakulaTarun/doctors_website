
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config();

const supabaseUrl = process.env.project_url;
const supabaseKey = process.env.anon_key;

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL or Key is missing in .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
