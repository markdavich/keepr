<template>
  <div class="keep">
    <img class="keep-img" :src="keep.keep_img_url" @click.self="keepClick" />
    <save-keep :keep="keep" />
    <keep-options />
    <keep-info :keep="keep" />
  </div>
</template>


<script>
  export default {
    name: 'keep',
    props: {
      keep: {
        keep_name: "",
        keep_description: "",
        keep_img_url: ""
      }
    },
    methods: {
      keepClick() {
        this.$router.push({ name: "Keep", params: { keepId: this.keep.keep_id } });
      }
    }
  }
</script>


<style scoped>
  .keep {
    width: 200px;
    height: 100%;
    margin: 5px;
    border-radius: 15px;
    box-shadow: 1px 1px 4px rgba(128, 128, 128, 0.568);
    border: solid rgba(128, 128, 128, 0.753) 1px;
    position: relative;
  }

  .hide {
    visibility: hidden;
  }

  .keep:hover .hide {
    visibility: visible;
  }

  .keep-img {
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
</style>