<template>
  <div>
    <LayoutHeader>
      <LayoutHeaderLogo />
      <LayoutMenuIcon />
      <LayoutNavigation />
      <LayoutUserNav />
    </LayoutHeader>

    <Nuxt />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LayoutDefault'
})
</script>
