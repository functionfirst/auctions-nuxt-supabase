<template functional>
  <button
    :type="props.type || 'submit'"
    class="px-10 py-4 rounded-full uppercase tracking-wider font-semibold text-xs"
    :class="[
      props.color === 'primary' && !props.disabled ? 'bg-indigo-500 hover:bg-indigo-700 text-white' : null,
      props.colour === 'secondary' && !props.disabled ? 'bg-gray-300 hover:bg-gray-500' : null,
      props.disabled ? 'cursor-not-allowed pointer-events-none bg-gray-300 text-gray-600' : null
    ]"
    :disabled="props.disabled"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </button>
</template>
