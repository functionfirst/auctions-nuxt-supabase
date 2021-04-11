<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <nuxt-link
          to="/"
          class="antialiased text-xl flex items-center text-indigo-700 hover:text-indigo-500"
        >
          <Logo class="w-10 h-10" />
          <span class="ml-2 font-bold">Realtime</span>Auctions
        </nuxt-link>

        <Navigation />

        <UserDetails />
      </div>
    </div>

    <div class="max-w-7xl mx-auto p-4 sm:px-6">
      <Nuxt />
    </div>
  </div>
</template>

<style>
/* html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
} */

</style>
