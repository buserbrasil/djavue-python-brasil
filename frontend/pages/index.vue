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
  data () {
    return {
      tweets: null
    }
  },
  mounted () {
    api.list_tweets().then(result => {
      this.tweets = result
    })
  }
}
</script>

<style>
</style>
