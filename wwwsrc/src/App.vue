<template>
  <div id="app">
    <nav-bar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    mounted() {
      // This makes is so the content starts 20px below the nav-bar
      let navBar = document.getElementById('nav-bar')
      document.body.style.paddingTop = `${navBar.clientHeight + 20}px`
    }
  }
</script>

<style>
  :root {
    --info-border: rgb(53, 216, 4);
    --info-bg: rgba(196, 251, 43, 0.294);
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>