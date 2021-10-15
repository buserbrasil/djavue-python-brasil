<template>
  <timeline :twetts="twetts"></timeline>
</template>

<script>

import timeline from '~/components/Timeline.vue'

export default {
  props: ['twetts'],
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
