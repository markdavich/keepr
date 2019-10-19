<template>
  <img class="keep col-4 col-sm-4 col-md-4 col-lg-4" :src="keep.keep_img_url">
  </img>
</template>


<script>
  export default {
    name: 'keep',
    props: {
      keep: {
        keep_name: { type: string },
        keep_description: { type: string },
        keep_img_url: { type: string }
      }
    }
  }
</script>


<style scoped>

</style>