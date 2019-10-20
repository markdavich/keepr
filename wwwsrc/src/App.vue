<template>
  <div id="app">
    <router-view />
  </div>
</template>

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