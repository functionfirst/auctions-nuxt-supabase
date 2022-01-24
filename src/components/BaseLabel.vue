<template>
  <label
    class="inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
    :class="$attrs.for ? 'cursor-pointer' : ''"
  >
    <slot />
  </label>
</template>
