<template>
  <button class="btn btn-outline-danger hide save-keep">Keep</button>

</template>


<script>
export default {
  name: 'savie-keep',
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
  .save-keep {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 5px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 32px;
  }
</style>