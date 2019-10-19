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
      <button @click="save" class="btn btn-primary">Ok</button>
      <button @click="cancel" class="btn btn-primary">Cancel</button>
    </div>
  </form>
</template>


<script>
export default {
  name: 'new-keep-modal',
  props: [],
  components:{},
  data(){
    return {
      data: {
        user_id: "",
        keep_name: "",
        keep_description: "",
        keep_img_url: "",
        keep_is_public: true
      }
    }
  },
  methods:{
    save() {
      this.data.user_id = this.userId();
      this.$store.dispatch("createKeep", this.data);
      this.cancel();
    },
    cancel() {
      this.user = null;
      this.$store.dispatch("closeModal");
    }
  },
}
</script>


<style scoped>

</style>