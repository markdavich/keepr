<template>
  <div class="vault-list-item" @click="vaultClick">
    <div class="vault-name">{{ vault.vault_name }}</div>
    <div class="vault-description">{{ vault.vault_description }}</div>
  </div>
</template>

<script>
  export default {
    name: 'vault-list-item',
    props: {
      vault: { type: Object, required: true }
    },
    methods: {
      vaultClick() {
        this.$parent.$parent.$refs.VaultsSlider.closeSlider();
      }
    }
  }
</script>


<style scoped>
  .vault-list-item {
    margin: 15px;
    margin-top: 10px;
    margin-bottom: 0;
    padding: 5px;
    border-radius: 5px;
    border: solid rgba(77, 35, 35, 0.644) 1px;
    box-shadow: 1px 1px 2px rgba(7, 0, 0, 0.664);
    cursor: pointer;
  }

  .vault-name {
    color: rgba(204, 204, 204, 0.911);
    font-size: 1.5em;
  }

  .vault-description {
    color: rgba(165, 165, 165, 0.918);
    font-size: 1.2em;
  }

  .vault-list-item:hover {
    box-shadow: 2px 2px 4px rgba(255, 0, 0, 0.726);
  }
</style>