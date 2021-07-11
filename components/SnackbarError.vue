<template functional>
  <transition
    enter-active-class="transition-all transform duration-300 ease-out-quad"
    leave-active-class="transition-all transform duration-300 ease-in-quad"
    enter-class="opacity-0 -translate-y-12"
    enter-to-class="opacity-100 translate-y-0"
    leave-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-12"
  >
    <div
      v-show="props.message"
      class="text-white absolute flex items-center top-0 my-4 w-full mx-auto max-w-md rounded-md shadow-lg py-2 px-4"
      :class="[
        props.type === 'error' ? 'bg-red-600' : null,
        props.type === 'success' ? 'bg-indigo-900' : null
      ]"
      role="alert"
    >
      <p class="flex-1">
        {{ props.message }}
      </p>

      <button type="button" class="w-12 h-12 -m-4" @click="listeners.close">
        &times;
      </button>
    </div>
  </transition>
</template>
