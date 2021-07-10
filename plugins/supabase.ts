import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((_context, inject) => {
  const URL = process.env.NUXT_ENV_SUPABASE_URL as string
  const KEY = process.env.NUXT_ENV_SUPABASE_KEY as string
  const supabase = createClient(URL, KEY)

  inject('supabase', supabase)
})
