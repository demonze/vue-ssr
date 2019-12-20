<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <foo></foo>
    <bar></bar> -->
  </div>
</template>

<script>
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
export default {
  name: 'App',
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
