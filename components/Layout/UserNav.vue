<template>
  <div class="justify-end md:flex-1 lg:w-0 text-xs hidden sm:flex flex-auto items-center">
    <div
      v-show="user && user.email"
      class="ml-3 relative flex items-center"
    >
      <p class="px-4 text-gray-500">
        Logged in as {{ user && user.email }}
      </p>

      <div class="relative">
        <button
          id="profleMenuButton"
          type="button"
          class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-expanded="false"
          aria-haspopup="true"
          @click="show = !show"
        >
          <span class="sr-only">Open user menu</span>
          <div class="flex items-center justify-center bg-indigo-600 text-white rounded-full h-8 w-8">AJ</div>
        </button>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-show="show"
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="profleMenuButton"
            tabindex="-1"
          >
            <nuxt-link
              to="/account"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
            >
              Your Profile
            </nuxt-link>

            <nuxt-link
              to="/logout"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
            >
              Logout
            </nuxt-link>
          </div>
        </transition>
      </div>
    </div>

    <div v-show="!user">
      <nuxt-link
        to="/login"
        class="px-6 py-4 uppercase tracking-wider font-semibold text-xs text-gray-500 hover:text-indigo-800 mr-2"
      >
        Log In
      </nuxt-link>

      <nuxt-link
        to="/register"
        class="px-12 py-4 bg-indigo-500 hover:bg-indigo-400 rounded-full uppercase tracking-wider font-semibold text-white text-xs"
      >
        Sign Up
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },

  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}
</script>
