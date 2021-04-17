import { createClient } from '@supabase/supabase-js'

const URL = process.env.NUXT_ENV_SUPABASE_URL
const KEY = process.env.NUXT_ENV_SUPABASE_KEY
const supabase = createClient(URL, KEY)

export default supabase
