<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/vue1" >page1111</router-link>
    <router-link to="/vue2" >page2</router-link>
    <router-view key='key'/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
