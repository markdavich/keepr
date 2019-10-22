<template>
  <div class="user-view">
    <div class="flex-row">
      <div class="flex-col size-1">
        <h1>Your Vaults</h1>
        <vaults />
      </div>
      <div id="user-keeps" class="flex-col size-2">
        <h1>Your Keeps</h1>
        <user-keeps />
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'user-view'
  }
</script>


<style scoped>
  .flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .flex-col {
    display: flex;
    flex-direction: column;
    min-width: 300px !important;
  }

  .size-1 {
    width: 33vw;
  }

  .size-2 {
    width: 66vw;
  }
</style>