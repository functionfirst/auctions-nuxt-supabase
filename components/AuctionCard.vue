<template>
  <nuxt-link
    :to="`/auctions/${auction.id}/${auction.slug}`"
    :title="auction.name"
    class="shadow-sm rounded p-3 border border-gray-100"
  >
    <div v-if="auction.image">
      <img src="" :alt="auction.alt ? auction.alt : auction.name">
    </div>

    <h3 class="text-lg font-medium overflow-ellipsis overflow-hidden truncate">
      {{ auction.name }}
    </h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    auction: {
      required: true,
      type: Object
    }
  }
}
</script>
