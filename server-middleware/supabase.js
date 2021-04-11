// import { createClient } from '@supabase/supabase-js'
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://kzdtchcvghozxfazzplp.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODA0NTIyOSwiZXhwIjoxOTMzNjIxMjI5fQ.otlHkdf2PppaxJNR90w9mKAeofhJyjN5V-Ar-MzYAcY'
const supabase = createClient(supabaseUrl, supabaseKey)

module.exports = supabase
