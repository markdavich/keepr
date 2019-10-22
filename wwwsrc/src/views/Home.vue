<template>
  <div class="home">
    <!-- <h1>Welcome Home {{user.username}}</h1> -->
    <button v-if="user.user_id" @click="logout">logout</button>
    <router-link v-else :to="{name: 'login'}">Login</router-link>
    <button class="btn" @click="newKeep">New Keep</button>
    <keeps />

    <modal v-show="modalShow">
      <user-modal v-if="modalUsage === MODAL_USAGE.USER" />
      <new-keep-modal v-if="modalUsage === MODAL_USAGE.KEEP" />
      <vault-modal v-if="modalUsage === MODAL_USAGE.VAULT" />
    </modal>
  </div>
</template>

<script>
  export default {
    name: "home",
    computed: {
      user() {
        return this.$store.state.Auth.user;
      },
      modalUsage() {
        return this.$store.state.Modal.modalUsage;
      },
      modalShow() {
        return this.$store.state.Modal.show;
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
    },
    mounted() {
      this.$nextTick(() => {
        this.resizeWindow();
        window.addEventListener('resize', this.resizeWindow);
        this.$store.dispatch("getAllKeeps");
        this.$store.dispatch("getLoggedInUserVaults");
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeWindow);
    }
  };
</script>