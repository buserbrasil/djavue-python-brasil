<template>
  <v-list three-line>
    <template v-for="tweet in tweets">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="tweet.author_avatar"/>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{name: 'user-username', params:{username:tweet.author_username}}">
              {{ tweet.author_name }}
            </router-link>
            / {{ tweet.author_username }}
            / {{ tweet.created_at }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ tweet.text }}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: ['tweets'],
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
