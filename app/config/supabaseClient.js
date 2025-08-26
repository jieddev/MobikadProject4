import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and Anon Key
const supabaseUrl = 'https://finzydwkgznjbfmwabhw.supabase.co'; // e.g., https://your-project.supabase.co
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpbnp5ZHdrZ3puamJmbXdhYmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxOTUzMDYsImV4cCI6MjA3MTc3MTMwNn0.8H6EztoAClK_zi4HrBASW7hzybiOcZp0N_u0T_ck0v4';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // This ensures the session is persisted (default is true)
    autoRefreshToken: true, // Automatically refresh the token when it expires
    detectSessionInUrl: false, // Not needed for React Native
    storage:AsyncStorage
  },
});

export default supabase;