<template>
  <!-- <button class="btn btn-outline-danger hide save-keep">Keep</button> -->
  <div class="hide save-keep">
    <button class="btn btn-outline-danger save-keep" data-toggle="dropdown">Keep</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" @click="createNewVault">New Vault...</a>
      <a class="dropdown-item" @click="logout">Logout</a>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'save-keep',
    props: {
      keep: { type: Object, required: true }
    },
    computed: {
      vaults() {

      }
    },
    methods: {
      createNewVault() {
        this.$store.dispatch("showNewVaultForKeep", this.keep);
      }
    }
  }
</script>


<style scoped>
  .save-keep-container {
    position: relative;
  }

  /* .save-keep {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 5px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 32px;
  } */
  .save-keep {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 5px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 32px;
  }

  .save-button {
    border-radius: 5px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 32px;
  }
</style>