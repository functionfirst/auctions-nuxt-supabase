<template>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { $supabase } = useContext()
    const router = useRouter()
    const error = ref(null)

    onMounted(() => {
      signout()
    })

    const signout = async () => {
      try {
        const { error } = await $supabase.auth.signOut()

        if (error) {
          throw new Error(error.message)
        }

        // @todo trigger a success toast message
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    }

    return {
      error
    }
  }
})
</script>
