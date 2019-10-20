<template>
  <div class="hide keep-info">
    <div class="info-cut-left"></div>
    <div class="info-cut-middle"></div>
    <div class="info-cut-circle"></div>
    <div class="info-cut-top-right"></div>
    <div class="info-cut"></div>
  </div>
</template>


<script>
  export default {
    name: 'keep-info',
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
  .keep-info {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 85%;
    height: 40px;
    overflow: hidden;
    border-radius: 5px;
    border-bottom-left-radius: 10px;
  }

  .info-cut {
    width: 100%;
    height: 40px;
    position: relative;
    overflow: hidden;
  }

  .info-cut:before {
    content: '';
    position: absolute;
    top: -2px;
    right: -50px;
    width: 76px;
    height: 76px;
    border-radius: 60%;
    box-shadow: 0px 300px 0px 700px var(--info-bg);
  }

  .info-cut-left {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 40px;
    width: 10px;

    border-bottom-left-radius: 9px;
    border-top-left-radius: 5px;
    border-left: solid var(--info-border) 2px;
    border-top: solid var(--info-border) 2px;
    border-bottom: solid var(--info-border) 2px;

    z-index: 10;
  }

  .info-cut-middle {
    position: absolute;
    left: 10px;
    top: 0px;
    height: 40px;
    width: 78%;
    border-top: solid var(--info-border) 2px;
    border-bottom: solid var(--info-border) 2px;

    z-index: 10;
  }

  .info-cut-circle {
    position: absolute;
    right: -49px;
    top: -3px;

    width: 76px;
    height: 76px;
    border-radius: 60%;

    border: solid var(--info-border)2px;
    z-index: 10;
  }

  .info-cut-top-right {
    position: absolute;
    right: 4px;
    top: 0px;
    width: 25px;
    border-top: solid var(--info-border) 2px;
    z-index: 10;
  }
</style>