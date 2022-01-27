import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { provider } from '../services'

export default defineNuxtPlugin((context) => {
  const { $supabase } = context

  if (!$supabase) {
    throw new Error('Supabase is not defined in context')
  }

  context.$services = provider($supabase)
})
