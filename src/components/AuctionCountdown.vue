<template>
  <dl class="flex gap-2 my-4">
    <dt>
      {{ label }}:
    </dt>
    <dd class="font-semibold">
      <time :title="title" :datetime="end">
        {{ endFormat }}
      </time>
    </dd>
  </dl>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { formatDistance, parseISO, toDate, format } from 'date-fns'

export default defineComponent({
  props: {
    endDate: {
      required: true,
      type: String
    }
  },

  setup ({ endDate, hasEnded }) {
    const now = toDate(new Date())
    const end = parseISO(endDate)
    const endFormatted = format(end, "io MMM yyyy 'at' HH:mmaaaa")
    const endFormatShort = format(end, 'io MMMM yyyy')
    const endDistance = formatDistance(now, end)

    if (hasEnded) {
      return {
        label: 'Closed',
        title: `Auction ended on ${endFormatted}`,
        endFormat: endFormatShort,
        end
      }
    }

    return {
      label: 'Closing',
      title: `Auction ends on ${endFormatted}`,
      endFormat: endDistance,
      end
    }
  }
})
</script>
