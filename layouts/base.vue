<template>
  <div>
    <LayoutHeader>
      <LayoutHeaderLogo />
      <LayoutBurgerMenu />
      <LayoutUserNav />
    </LayoutHeader>

    <div class="mx-auto max-w-lg p-8">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutBase'
}
</script>
