import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Solo se crea cuando las claves públicas estén configuradas en .env.local.
export const supabase = url && key ? createClient(url, key) : null;
