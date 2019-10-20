<template>
  <div class="keeps">
    <keep v-for="keep in keeps" :key="keep.keep_id" :keep="keep" />
  </div>
</template>


<script>
  export default {
    name: 'keeps',
    computed: {
      keeps() {
        return this.$store.state.Keeps.keeps;
      }
    }
  }
</script>

<style scoped>
  .keeps {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
  }
</style>