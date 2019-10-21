<template>
  <div class="logged-in-user dropdown" v-if="!isLogin">
    <h3>{{ user.user_username }}</h3>
    <div data-toggle="dropdown">
      <user-icon class="u-icon" :user="user" />
    </div>
    <div class="dropdown-menu">
      <a class="dropdown-item" @click="editUser">Edit</a>
      <a class="dropdown-item" @click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "logged-in-user",
    computed: {
      user() {
        return this.$store.state.Auth.user;
      },
      isLogin() {
        let result = this.$route.name == "login";
        return result;
      }
    },
    methods: {
      editUser() {
        this.showModal(this.MODAL_USAGE.USER); // main.js Vue.mixins
      },
      logout() {
        this.$store.dispatch("logout");
      }
    }
  };
</script>


<style scoped>
  .logged-in-user {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
  }

  .u-icon {
    cursor: pointer;
    min-height: 46px !important;
    min-width: 46px !important;
    max-height: 46px !important;
    max-width: 46px !important;
  }

  a {
    cursor: pointer;
  }

  h2,
  h3 {
    margin-top: 10px;
    margin-right: 10px;
  }
</style>