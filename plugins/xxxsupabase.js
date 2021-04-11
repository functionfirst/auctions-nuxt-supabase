import { createClient } from '@supabase/supabase-js'

export default function (_, inject) {
	const client = createClient('<%= options.url %>', '<%= options.key %>')
	inject('supabase', client)

	// const auth = client.auth
	// inject('supaAuth', auth)

	// const storage = client.storage
	// inject('supaStorage', storage)
}

// import Vue from 'vue'
// import VueSupabase from 'vue-supabase'

// const supabaseUrl = 'https://kzdtchcvghozxfazzplp.supabase.co'
// const supabaseKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODA0NTIyOSwiZXhwIjoxOTMzNjIxMjI5fQ.otlHkdf2PppaxJNR90w9mKAeofhJyjN5V-Ar-MzYAcY'
// const supabaseOptions = {}

// Vue.use(VueSupabase, {
//   supabaseUrl,
//   supabaseKey,
//   supabaseOptions
// })
