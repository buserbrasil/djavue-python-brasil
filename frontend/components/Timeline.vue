<template>
  <v-list three-line>
    <template v-for="twett in twetts">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="twett.author_avatar"/>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ twett.author_name }} / {{ twett.author_username }} / {{
              twett.created_at
            }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ twett.text }}</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  props: ['twetts'],
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
