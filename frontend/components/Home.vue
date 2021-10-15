<template>
  <timeline :tweets="tweets"></timeline>
</template>

<script>

import timeline from '~/components/Timeline.vue'

export default {
  props: ['tweets'],
  components: {
    timeline
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
