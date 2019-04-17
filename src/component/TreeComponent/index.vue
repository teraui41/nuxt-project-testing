<template>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5>Tree View</h5>
          <div class="tree-panel" v-for="item in permissionData">
            <TreeItem v-bind:code="item.code" v-bind:label="item.label" v-bind:level="item.level" v-bind:checkedList="checkedList" v-on:onChange="onChangeHandler" />
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import TreeItem from "./TreeItem.vue";

  export default {
    name: "TreeComponent",
    components: {
      TreeItem
    },
    props: [
      'permissionData'
    ],
    data() {
      return {
        checkedList: []
      };
    },
    methods: {
      onChangeHandler: function(code) {

        const permission = this.permissionData[code];
        const isCheck = !this.isCheck(code);
        const isParentCheck = this.isCheck(permission.parent);

        this.updateChekedList(code);

        if(permission.parent !== '' && isCheck && !isParentCheck){
          return this.onChangeHandler(permission.parent);
        }
        
      },
      isCheck: function(code) {
        return this.checkedList.includes(code);
      },
      updateChekedList: function(code) {
        if(this.isCheck(code)) {
          const index = this.checkedList.indexOf(code);
          this.checkedList.splice(index, 1)
        }else {
          this.checkedList.push(code);
        }
      }
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