<template>
  <div class="bg">
    <div class="container panel">
      <h1>{{name}}</h1>
      <div class="row">
        <SearchLabelPanel v-bind:permissionData="permissionData"/>
        <TreeComponent v-bind:permissionData="permissionData"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import SearchLabelPanel from '../components/SearchLabelPanel.vue';
  import TreeComponent from '../components/TreeComponent/index.vue';

  export default {
    name: "index",
    components: {
      SearchLabelPanel,
      TreeComponent
    },
    data() {
      return {
        name: "Edmond Wu",
        permissionData: {},
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
