<template>
  <div id="app">
    <Poll/>
  </div>
</template>

<script>
import HelloWorld from './components/Poll.vue'

export default {
  name: 'App',
  components: {
    Poll
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
