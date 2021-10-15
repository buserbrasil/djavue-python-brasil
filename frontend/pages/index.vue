<template>
  <home :twetts="twetts"></home>
</template>

<script>

import home from '~/components/Home.vue'

export default {
  components: {
    home
  },
  data () {
    return {
      twetts: [
        {
          id: 1,
          author_name: 'Zé Ninguém',
          author_username: '@zeninguem',
          author_avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          created_at: '43min',
          text: 'Eu sou do povo, eu sou um Zé ninguém'
        },
        {
          id: 2,
          author_name: 'Zé Ninguém 2',
          author_username: '@zeninguem 2',
          author_avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          created_at: '45min',
          text: 'Eu sou do povo, eu sou um Zé ninguém, de novo'
        },
        {
          id: 3,
          author_name: 'Maria Ninguém',
          author_username: '@marianinguem',
          author_avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          created_at: '1h43min',
          text: 'Eu sou do povo, eu sou uma Maria ninguém'
        }
      ]
    }
  }
}
</script>

<style>
</style>
