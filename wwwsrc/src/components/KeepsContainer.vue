<template>
  <div class="keeps-container">
    <div class="keeps-column" v-for="index in columnCount" :key="'keeps-array-' + index" v-if="columnCount">
      <keep v-for="keep in columns[index - 1]" :key="keep.keep_id" :keep="keep" />
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    name: 'keeps-container',
    props: {
      keeps: { type: Array, required: true },
      parentId: { type: String, required: true }
    },
    data() {
      return {
        columnCount: null,
        columns: [],
        parent: {},
        debounceResizeWindow: function () { }
      }
    },
    computed: {
      columnWidth() {
        return this.$store.state.Settings.display.columnWidth;
      }
    },
    methods: {
      setKeepsColumns(columnCount) {
        let keeps = this.keeps;
        let keepsColumns = [];

        // Create all the keys with a cooresponding array
        for (let i = 0; i < columnCount; i++) {
          keepsColumns[i] = []
        };

        // Add all the keeps to the columns
        for (let i = 0; i < keeps.length; i++) {
          keepsColumns[i % columnCount].push(keeps[i]);
        };

        this.columns = keepsColumns;
      },

      resizeWindow() {
        let columnCount = this.columnCount;
        let computedColumnCount = Math.floor(this.parent.clientWidth / this.columnWidth);

        // check if the column count changed
        if (computedColumnCount == columnCount) {
          return;
        };

        this.setKeepsColumns(computedColumnCount);

        this.columnCount = computedColumnCount;
      }
    },
    mounted() {
      this.parent = document.getElementById(this.parentId);
      this.debounceResizeWindow = _.debounce(this.resizeWindow, 100);

      this.$nextTick(() => {
        window.addEventListener('resize', this.debounceResizeWindow);
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 500)
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.debounceResizeWindow);
    }
  }
</script>


<style scoped>
  .keeps-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
  }

  .keeps-column {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }
</style>