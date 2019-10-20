<template>
  <button class="btn btn-outline-info hide keep-options">...</button>
</template>


<script>
export default {
  name: 'keep-options',
  props: [],
  components:{},
  data(){
    return {}
  },
  computed:{},
  methods:{}
}
</script>


<style scoped>
  .keep-options {
    position: absolute;
    bottom: 5px;
    right: 5px;
    border-radius: 5px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 32px;
  }
</style>