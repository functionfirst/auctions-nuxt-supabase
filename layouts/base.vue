<template>
  <div>
    <LayoutHeader>
      <LayoutHeaderLogo />
      <LayoutMenuIcon />
      <LayoutUserNav />
    </LayoutHeader>

    <div class="mx-auto max-w-lg p-8">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LayoutBase'
}
</script>
