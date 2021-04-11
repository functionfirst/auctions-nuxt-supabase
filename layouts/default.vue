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

        <nav class="hidden md:flex space-x-10">
          <nuxt-link to="/auctions">
            Auctions
          </nuxt-link>
        </nav>

        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <template v-if="user">
            Logged in as {{ user.email }}
            <nuxt-link
              to="logout"
              class="bg-green-200 hover:bg-green-100 px-3 py-2 ml-2"
            >
              Logout
            </nuxt-link>
          </template>

          <template v-else>
            <nuxt-link to="login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Login
            </nuxt-link>
            <nuxt-link to="register" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Register
            </nuxt-link>
          </template>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto p-4 sm:px-6">
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>

<style>
html {
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
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
