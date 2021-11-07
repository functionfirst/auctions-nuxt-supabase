<template functional>
  <label
    class="inline-block cursor-pointer uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
    :class="[
      data.class,
      data.staticClass
    ]"
    :style="[
      data.style,
      data.staticStyle
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </label>
</template>
