import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { createClient, SupabaseClientOptions } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NUXT_ENV_SUPABASE_URL ?? ''
const supabaseKey: string = process.env.NUXT_ENV_SUPABASE_KEY ?? ''
const options: SupabaseClientOptions = {}

export default defineNuxtPlugin((context) => {
  context.$supabase = createClient(supabaseUrl, supabaseKey, options)
})
