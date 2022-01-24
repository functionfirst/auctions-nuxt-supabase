<template>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
import { onMounted, defineComponent, useContext, useRouter, ref } from '@nuxtjs/composition-api'
import AuthService from '../services/AuthService'

export default defineComponent({
  layout: 'base',

  setup () {
    const router = useRouter()
    const { $supabase } = useContext()
    const service = new AuthService($supabase)
    const error = ref('')
    const signout = async () => {
      const { error: signoutError } = await service.signout()

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
