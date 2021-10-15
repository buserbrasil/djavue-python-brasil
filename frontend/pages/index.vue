<template>
  <div>
    <v-progress-linear :indeterminate="true" v-if="!tweets"></v-progress-linear>
    <home :tweets="tweets" v-if="tweets"></home>
  </div>
</template>

<script>
import api from '~api'
import home from '~/components/Home.vue'

export default {
  components: {
    home
  },
  asyncData () {
    console.log('asyncData')
    return api.list_tweets().then(result => {
      console.log('asyncData RETURN')
      return {tweets: result}
    })
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
