<template functional>
  <input
    :type="props.type || 'text'"
    :value="props.value"
    class="block border border-gray-300 w-full text-gray-700 rounded-sm py-3 px-4 mb-3 leading-tight focus:bg-white focus:border-gray-300"
    classx="focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
    v-bind="data.attrs"
    @input="listeners.input && listeners.input($event.target.value)"
  >
</template>
