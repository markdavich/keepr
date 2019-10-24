<template>
  <div class="home" id="home">
    <!-- <h1>Welcome Home {{user.username}}</h1> -->
    <button v-if="user.user_id" @click="logout">logout</button>
    <router-link v-else :to="{name: 'login'}">Login</router-link>
    <button class="btn" @click="newKeep">New Keep</button>

    <router-link :to="{name: 'Vaults', params: { userId: userId() }}">Vaults</router-link>
    <keeps-container :keeps="keeps" :parentId="'home'" />

    <!-- <modal v-show="modalShow">
      <user-modal v-if="modalUsage === MODAL_USAGE.USER" />
      <new-keep-modal v-if="modalUsage === MODAL_USAGE.KEEP" />
      <vault-modal v-if="modalUsage === MODAL_USAGE.VAULT" />
    </modal> -->
  </div>
</template>

<script>
  export default {
    name: "home",
    computed: {
      user() {
        return this.$store.state.Auth.user;
      },
      // modalUsage() {
      //   return this.$store.state.Modal.modalUsage;
      // },
      // modalShow() {
      //   return this.$store.state.Modal.show;
      // },
      keeps() {
        return this.$store.state.Keeps.keeps;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      },
      newKeep() {
        this.$store.dispatch("showModal", this.MODAL_USAGE.KEEP);
      },
      resizeWindow() {
        this.$store.dispatch("resizeWindow");
      }
    }
  };
</script>