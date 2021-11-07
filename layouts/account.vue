<template>
  <div>
    <LayoutHeader>
      <LayoutHeaderLogo />
      <LayoutMenuIcon />
      <LayoutNavigation />
      <LayoutUserNav />
    </LayoutHeader>

    <div class="max-w-6xl mx-auto flex gap-4 p-4 sm:px-6">
      <div class="flex flex-col gap-2 w-64">
        <NuxtLink
          to="/account"
          class="flex gap-2 py-2 px-4 rounded hover:bg-gray-100"
          exact-active-class="bg-white text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-800"
        >
          <IconUserCircle class="w-6 h-6" />
          Profile
        </NuxtLink>

        <NuxtLink
          to="/account/change-password"
          class="flex gap-2 py-2 px-4 rounded hover:bg-gray-100"
          exact-active-class="bg-white text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-800"
        >
          <IconLock class="w-6 h-6" />
          Password
        </NuxtLink>
      </div>

      <div class="flex-1">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>
