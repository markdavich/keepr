<template>
  <div class="keeps container-fluid">
    <div class="row">
      <keep v-for="keep in keeps" :key="keep.keep_id" :keep="keep" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'keeps',
  computed:{
    keeps() {
      return this.$store.state.Keeps.keeps;
    }
  }
}
</script>

<style scoped>
  
</style>