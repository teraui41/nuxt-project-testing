<template>
  <div class="bg">
    <div class="container panel">
      <h1>{{name}}</h1>
      <LabelSearchBar v-bind:permissionData="permissionData"/>
      <hr/>
      <TreeComponent/>
    </div>
  </div>
</template>

<script lang="ts">

  import LabelSearchBar from '../component/LabelSearchBar.vue';
  import TreeComponent from '../component/TreeComponent/index.vue';
  import { mockPermissions } from '../../dummies/mockPermissions';
  import { flatPermissionList, findLabel } from '../utils/findLabel';

  export default {
    name: "index",
    components: {
      LabelSearchBar,
      TreeComponent
    },
    mounted(){
      const permissions = flatPermissionList(mockPermissions);
      this.permissionData = permissions;
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
