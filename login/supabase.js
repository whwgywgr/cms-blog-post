import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://ahjvgboxahecmwjecldq.supabase.co"; // Ganti dengan URL anda
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoanZnYm94YWhlY213amVjbGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDExNzQsImV4cCI6MjA2MzExNzE3NH0.-0DisLyGzyqCeYYaXlbqQepuifNpHTAo_Ft9uyro8QQ"; // Ganti dengan anon key anda

export const supabase = createClient(supabaseUrl, supabaseKey);
