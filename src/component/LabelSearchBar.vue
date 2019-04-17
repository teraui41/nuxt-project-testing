<template>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{"Find Label Function Block"}}</h5>
          <div class="form-group col-md-6">
            <label>Search Code Input</label>
            <input 
              type="text"
              class="form-control"
              placeholder="please input the permission code"
              v-model="searchedCode"/>
          </div>
          <div class="form-group col-md-6">
            <label>Result Code</label>
            <input type="text" class="form-control" placeholder="search result" readOnly v-model="resultCode"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">

  export default {
    name: "LabelSearchBar",
    props: [
      'permissionData'
    ],
    mounted() {}
    ,
    data() {
      return {
        title: "Hello",
        searchedCode: "",
      };
    },
    computed: {
      resultCode: function() {
        const permission = this.permissionData[this.searchedCode];
        return permission ? permission.label : ""
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 15px;
  }
</style>