<template>
  <div>
    <timeline :tweets="tweets"></timeline>
    <pre>{{logged_user}}</pre>

  </div>
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
  },
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  }
}
</script>

<style scoped>

</style>
