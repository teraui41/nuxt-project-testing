<template>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5>Tree View</h5>
          <div class="tree-panel" v-for="item in permissionData" v-bind:key="item.index">
            <TreeItem 
              v-bind:code="item.code"
              v-bind:label="item.label"
              v-bind:level="0"
              v-bind:children="item.children"
              v-bind:checkedList="checkedList" />
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import { mockPermissions } from '../../../dummies/mockPermissions';
  import TreeItem from "./TreeItem.vue";

  export default {
    name: "TreeComponent",
    components: {
      TreeItem
    },
    data() {
      return {
        checkedList: [],
        permissionData: mockPermissions
      };
    },
  };
</script>

<style lang="scss" scoped>
  .tree-panel {
    padding-left: 20px;
  }
  .card {
    margin-bottom: 30px;
  }
</style>