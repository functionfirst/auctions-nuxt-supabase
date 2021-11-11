<template>
  <div>
    <LayoutHeader>
      <LayoutHeaderLogo />
    </LayoutHeader>

    <div class="mx-auto max-w-lg p-8">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LayoutBase'
})
</script>
