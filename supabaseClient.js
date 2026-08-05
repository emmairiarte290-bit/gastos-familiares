// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================

(function () {
const SUPABASE_URL = "https://tjzrfwjefprhfmhybdtp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqenJmd2plZnByaGZtaHliZHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MTc1NzcsImV4cCI6MjEwMTA5MzU3N30.iYPOa3Psh0nZ4KCob5V-Q_qId8iG2oyIrwLNH6Kdt4g";

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
