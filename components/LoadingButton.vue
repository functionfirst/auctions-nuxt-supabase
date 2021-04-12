<template functional>
  <base-button-round
    color="primary"
    class="inline-flex items-center relative"
    :class="props.loading ? 'pl-16' : null"
    :disabled="props.loading"
  >
    <span
      class="transform transition-transform duration-300 ease-in-out"
      :class="props.loading ? '-translate-x-6' : null"
    >
      <span v-show="props.loading">{{ props.loadingText || 'Loading...' }}</span>
      <span v-show="!props.loading">
        {{ props.text }}
      </span>
    </span>

    <transition
      enter-active-class="transition-all duration-300 ease-out-quad"
      leave-active-class="transition-all duration-300 ease-in-quad"
      enter-class="opacity-0 scale-70"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-70"
    >
      <IconSpinner
        v-show="props.loading"
        class="absolute right-6"
      />
    </transition>
  </base-button-round>
</template>
