// =========================================================
// CONEXIÓN A SUPABASE
// =========================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

// ⚠️ REEMPLAZA CON TUS DATOS ⚠️
// Ve a: https://app.supabase.com > Settings > API
const supabaseUrl = 'https://tus-proyecto.supabase.co'
const supabaseKey = 'tu-clave-publica-anon'

const supabase = createClient(supabaseUrl, supabaseKey)

// Exportar para usar en otros archivos
window.supabase = supabase

console.log('✅ Supabase conectado correctamente')
