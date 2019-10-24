<template>
  <!-- <div id="nav-bar" class="nav-bar">

  </div> -->
  <nav id="nav-bar" class="navbar navbar-light bg-light fixed-top">
    <a class="navbar-brand">
      <router-link to="/">KeepR</router-link>
    </a>

    <form class="form">
      <logged-in-user />
    </form>
  </nav>
</template>


<script>
  export default {
    name: 'nav-bar',
    props: [],
    components: {},
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>


<style scoped>
  .nav-bar {
    /* position: fixed;
    top: 0;
    width: 100%; */
  }
</style>