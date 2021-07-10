<template>
  <div>
    <LayoutHeader>
      <LayoutHeaderLogo />
      <LayoutMenuIcon />
      <LayoutNavigation />
      <LayoutUserNav />
    </LayoutHeader>

    <div class="max-w-6xl mx-auto p-4 sm:px-6">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LayoutDefault'
}
</script>
