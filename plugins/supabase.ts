import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { createClient } from '@supabase/supabase-js'

const URL = process.env.NUXT_ENV_SUPABASE_URL as string
const KEY = process.env.NUXT_ENV_SUPABASE_KEY as string

export const supabase = createClient(URL, KEY)

// @todo do we need this?
export default defineNuxtPlugin((_context, inject) => {
  inject('supabase', supabase)
})
