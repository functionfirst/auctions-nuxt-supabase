<template>
  <div class="justify-end md:flex-1 lg:w-0 hidden sm:flex flex-auto items-center">
    <div
      v-show="session"
      class="ml-3 relative flex items-center xuppercase tracking-wider font-semibold text-sm"
    >
      <nuxt-link
        to="/account"
        class="flex items-center px-4 rounded py-2 text-gray-500 hover:text-indigo-800 mr-2"
      >
        <IconUserCircle class="w-6 h-6" />
        Your Account
      </nuxt-link>

      <nuxt-link
        to="/logout"
        class="flex items-center px-4 py-2 text-gray-500 hover:text-indigo-800 mr-2"
      >
        <IconLogout class="w-6 h-6" />
        Logout
      </nuxt-link>
    </div>

    <div
      v-show="!session"
      class="flex items-center tracking-wider font-semibold text-sm"
    >
      <nuxt-link
        to="/login"
        class="flex items-center px-4 py-2 text-gray-500 hover:text-indigo-800 mr-2"
      >
        <IconLock class="w-6 h-6 mr-1" />
        Log In
      </nuxt-link>

      <nuxt-link
        to="/register"
        class="flex items-center px-6 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-full text-white"
      >
        <IconUserCircle class="mr-1 w-6 h-6" />
        Sign Up
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { state } = useStore()
    const { session } = state

    return {
      session
    }
  }
})
</script>
