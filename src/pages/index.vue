<template>
  <div class="bg">
    <div class="container panel">
      <LabelSearchBar/>
      <TreeComponent/>
    </div>
  </div>
</template>

<script lang="ts">

  import LabelSearchBar from '../component/LabelSearchBar.vue';
  import TreeComponent from '../component/TreeComponent.vue';

  export default {
    name: "index",
    components: {
      LabelSearchBar,
      TreeComponent
    },
    data() {
      return {
        msg: "Hello",
      };
    }
  };
</script>

<style lang="scss" scoped>
  .bg {
    background-color: #efefef;
    min-height: 100vh
  }
  .panel{
    background-color: #fff;
    min-height: 100vh;
    padding: 10px 15px;
  }
</style>
