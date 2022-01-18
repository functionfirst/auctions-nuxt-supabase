<template>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent } from '@nuxtjs/composition-api'
import useAuth from '@/composables/useAuth'

export default defineComponent({
  layout: 'base',

  setup () {
    const { error, signout } = useAuth()

    onMounted(() => {
      signout()
    })

    return {
      error
    }
  }
})
</script>
