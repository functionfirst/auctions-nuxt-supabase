<template>
  <div
    data-controller="gallery"
    data-gallery-target="carousel"
    data-gallery-current-slide-value="0"
    class="border-2 bg-gray-100 border-gray-200 flex flex-col items-center relative"
    style="height: 500px"
  >
    <div class="flex w-full overflow-x-scroll snap-x">
      <div
        v-for="(image, index) in images"
        :id="`gallery-${index}`"
        :key="index"
        data-gallery-target="image"
        class="flex flex-shrink-0 h-full items-center justify-center snap-start w-full"
      >
        <img :src="image" :alt="auction.name">
      </div>
    </div>

    <div
      v-if="images"
      class="flex absolute bottom-16 items-center"
    >
      <a
        v-for="(image, key) in images"
        :key="key"
        data-action="gallery#selectIndicator"
        data-gallery-target="indicator"
        :href="`#gallery-${key}`"
        class="border-2 border-white w-2 mr-2 h-2 text-gray-700 rounded-full bg-white flex justify-center items-center"
        data-turbolinks="false"
      >
        xx
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    images: {
      default: () => null,
      required: false,
      type: Array
    }
  },

  data () {
    return {
      slide: 0
    }
  }
})
</script>
