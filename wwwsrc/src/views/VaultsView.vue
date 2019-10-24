<template>
  <div class="vaults-view">
    <span class="open-slide-out" @click="openSlider">&#9776;</span>
    <slide-out ref="VaultsSlider">
      <vault-list-item v-for="vault in vaults" :key="'vault-id-' + vault.vault_id" :vault="vault" />
    </slide-out>
  </div>
</template>

<script>
  export default {
    name: 'vaults-view',
    computed: {
      vaults() {
        return this.$store.state.Vaults.currentUserVaults
      }
    },
    methods: {
      openSlider() {
        this.$refs.VaultsSlider.openSlider();
      }
    }
  }
</script>

<style scoped>
  .open-slide-out {
    float: left;
    font-size: 30px;
    cursor: pointer
  }
</style>