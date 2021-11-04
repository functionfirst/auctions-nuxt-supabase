<template functional>
  <input
    :type="props.type || 'text'"
    :value="props.value"
    class="block border border-gray-300 w-full text-gray-700 rounded-sm py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-300"
    v-bind="data.attrs"
    @input="listeners.input && listeners.input($event.target.value)"
  >
</template>
