import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhbvfaqiwoxzlmohsbui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoYnZmYXFpd294emxtb2hzYnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNDg2OTMsImV4cCI6MjA1ODgyNDY5M30.oqw9M_uxkNQcVOkZN16F3NtcHjJz9AafRuvlFduwqso";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
