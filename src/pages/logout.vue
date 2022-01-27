<template>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
import { onMounted, defineComponent, useRouter, ref } from '@nuxtjs/composition-api'
// import AuthService from '../services/auth'

export default defineComponent({
  layout: 'base',

  setup () {
    const router = useRouter()
    // const { $supabase } = useContext()
    // const service = new AuthService($supabase)
    const error = ref('')
    const signout = async () => {
      const { error: signoutError } = await this.$service.auth.signout()

      if (signoutError) {
        error.value = signoutError
      } else {
        router.push('/')
      }
    }

    onMounted(() => {
      signout()
    })

    return {
      error
    }
  }
})
</script>
