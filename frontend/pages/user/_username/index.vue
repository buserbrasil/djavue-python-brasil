<template>
  <h1>Isso aqui é a timeline do usuário {{ username }}</h1>
</template>

<script>

export default {
  asyncData (context) {
    return {username: context.params.username}
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
