<template>
  <div class="user-keeps" ref="userKeeps" v-if="clientWidth">
    <div class="user-keeps-column" v-for="(keepsArray, index) in columns" :key="'keeps-array-' + index">

      keepsArray.length = {{ keepsArray.length }}
      <keep v-for="keep in keepsArray" :key="keep.keep_id" :keep="keep" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-keeps',
    props: [],
    components: {},
    data() {
      return {
        userKeeps: {},
        // columns: null,
        clientWidth: null,
        testColumns: null
      }
    },
    computed: {
      keeps() {
        let userId = this.userId();
        return this.$store.state.Keeps.keeps.filter(keep => {
          return keep.user_id === userId;
        });
      },
      columns() {
        let columnCount = Math.floor(
          this.clientWidth / this.$store.state.Settings.display.columnWidth
        );

        // Create the array of arrays
        let columns = [];
        for (let i = 0; i < columnCount; i++) {
          columns.push([]);
        }

        let keeps = this.keeps;

        for (let i = 0; i < keeps.length; i++) {
          columns[i % columnCount].push(keeps[i]);
        }

        this.testColumns = columns;
        return columns;
      }
    },
    watch: {

    },
    methods: {

    },
    mounted() {
      this.$nextTick(() => {
        this.clientWidth = this.$el.parentElement.clientWidth;
        let userKeeps = document.getElementById("user-keeps");
      });
    }
  }
</script>


<style scoped>
  .user-keeps {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;

    height: 72vh !important;
    overflow-y: scroll;
    width: 100%;
  }

  .user-keeps-column {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }
</style>