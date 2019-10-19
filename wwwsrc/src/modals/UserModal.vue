<template>
  <form class="user-form">
    <div class="form-group">
      <label for="user-name">Name</label>
      <input
        v-model="userData.name"
        type="text"
        class="form-control"
        id="user-name"
        placeholder="Enter Your Name"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Picture Url</span>
      </div>
      <input v-model="userData.imgUrl" type="text" placeholder="Url..." />
    </div>

    <div class="form-group">
      <label for="color-picker">Color</label>
      <input v-model="userData.color" type="color" id="color-picker" style="width:85%;" />
    </div>

    <div class="button-container">
      <button @click="save" class="btn btn-primary">Ok</button>
      <button @click="cancel" class="btn btn-primary">Cancel</button>
    </div>
  </form>
</template>


<script>
export default {
  name: "user",
  props: {
    cancelCallBack: { type: Function, required: true }
  },
  components: {},
  data() {
    return {
      userData: {
        _id: "",
        name: "",
        color: "",
        imgUrl: ""
      }
    };
  },
  computed: {
    user() {
      let result = this.$store.state.Auth.user;
      return result;
    }
  },
  methods: {
    save() {
      this.$store.dispatch("editUser", this.userData);
      // setTimeout(() => {
      //   Object.keys(this.$store.state.Comments.comments).forEach(key => {
      //     this.$store.dispatch('getCommentsByTaskId', key)
      //   })
      // }, 100)
      this.cancelCallBack();
    },
    cancel() {
      this.cancelCallBack();
    }
  },
  mounted() {
    this.userData._id = this.user._id;
    this.userData.name = this.user.name;
    this.userData.color = this.user.color;
    this.userData.imgUrl = this.user.imgUrl;
  }
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
</style>