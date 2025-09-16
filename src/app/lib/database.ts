import { Registration } from '@/app/types';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const saveRegistration = async (data: Registration) => {
  const { data: result, error } = await supabase
    .from('registrations')
    .insert([data])
    .select();
  
  if (error) throw error;
  return result[0];
};

export const getAllRegistrations = async () => {
  const { data, error } = await supabase
    .from('registrations')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const checkEmailExists = async (email: string) => {
  const { data, error } = await supabase
    .from('registrations')
    .select('email')
    .eq('email', email)
    .single();
  
  return data !== null;
};