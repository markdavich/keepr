<template>
  <form class="user-form">
    <div class="form-group">
      <label for="user-name">Title</label>
      <input v-model="data.keep_name" type="text" class="form-control" id="user-name" placeholder="Title..." />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Description</span>
      </div>
      <input v-model="data.keep_description" type="text" placeholder="Description..." />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Picture Url</span>
      </div>
      <input v-model="data.keep_img_url" type="text" placeholder="Url..." />
    </div>

    <div class="button-container">
      <button @click.prevent="save" class="btn btn-primary">Ok</button>
      <button @click.prevent="cancel" class="btn btn-primary">Cancel</button>
    </div>
  </form>
</template>


<script>
  export default {
    name: 'vault-modal',
    data() {
      return {
        vault: {
          vault_name: "",
          vault_description: ""
        },
        editing: false,
        hasKeep: false
      }
    },
    methods: {
      save() {
        // We need to add the keep to the vault if it exists
        // store-modules > vaults.js > state > newValutKeep: {}
        if (this.editing) {
          alert("modals > methods > save: NOT IMPLEMENTED FOR EDITING A VAULT");
          // this.$store.dispatch("editVault", this.vault);
        } else {
          this.$store.dispatch("createVault", this.vault);
        };

        if (this.hasKeep) {
          alert("modals > methods > save: NOT IMPLEMENTED FOR ADDING KEEP TO NEW VAULT");
          this.$store.dispatch("addKeep")
        }

        this.cancel();
      },
      cancel() {
        this.$store.dispatch("closeNewVaultForKeep");
      }
    },
    mounted() {
      // Check if we are editing the current vault
      this.editing = this.$store.state.Vaults.currentVault;
      this.hasKeep = this.$store.state.Modal.newValutKeep;
      if (this.editing) {
        let currentVault = this.$store.state.Vaults.currentVault;
        this.vault.vault_name = currentVault.vault_name;
        this.vault.vault_description = currentVault.vault_description;
      }
    }
  }
</script>


<style scoped>

</style>