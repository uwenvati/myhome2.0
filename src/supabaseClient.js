// src/supabaseClient.js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yyldvkslkrueahmuegka.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5bGR2a3Nsa3J1ZWFobXVlZ2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjcwNzIsImV4cCI6MjA2MDU0MzA3Mn0.kI_OeTEacB-ATa1ZHlQF-VBwlxGOZJHG8bfnzsT5tE4'

export const supabase = createClient(supabaseUrl, supabaseKey)
