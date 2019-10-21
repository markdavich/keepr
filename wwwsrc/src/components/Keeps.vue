<template>
  <div class="keeps">
    <keeps-column v-for="key in columnCount" :key="'keeps-column-' + key" :columnKey="key - 1" />
    <!-- <keep v-for="keep in keeps" :key="keep.keep_id" :keep="keep" /> -->
  </div>
</template>

<script>
  export default {
    name: 'keeps',
    computed: {
      keeps() {
        return this.$store.state.Keeps.keeps;
      },
      columnCount() {
        let result = this.$store.state.Settings.display.columnCount;
        return result;
      }

    }
  }
</script>

<style scoped>
  .keeps {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
  }
</style>