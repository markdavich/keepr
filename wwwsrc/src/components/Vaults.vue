<template>
  <div class="vaults">
    <vault v-for="vault in vaults" :key="vault.vault_id" :vault="vault" />
  </div>
</template>


<script>
  export default {
    name: 'vaults',
    computed: {
      vaults() {
        return this.$store.state.Vaults.currentUserVaults;
      }
    }
  }
</script>


<style scoped>
  .vaults {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* justify-content: space-between; */
    align-content: flex-start;
    height: 72vh !important;
    overflow-y: scroll;
    width: 100%;
    margin-left: 1px;
  }
</style>