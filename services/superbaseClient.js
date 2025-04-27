import { createClient } from '@supabase/supabase-js'

const SUPERBASE_URL = process.env.NEXT_PUBLIC_SUPERBASE_URL;
const SUPERBASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPERBASE_ANON_KEY;

export const supabase = createClient(SUPERBASE_URL, SUPERBASE_ANON_KEY);