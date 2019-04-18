<template>
    <div class="col-12 col-lg-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{"Find Label Function Block"}}</h5>
          <div class="form-group col-md-6">
            <label>Imput permission code.</label>
            <input 
              type="text"
              class="form-control"
              placeholder="please input permission code"
              v-model="searchedCode"/>
          </div>
          <div class="form-group col-md-6">
            <label>Output permission code.</label>
            <input type="text" class="form-control" placeholder="Here will show the search result." readOnly v-model="resultLabel"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
  import { mockPermissions } from '../../dummies/mockPermissions';
  import { findLabel } from '../utils/findLabel';
  export default {
    name: "LabelSearchBar",
    props: [
      'permissionData'
    ],
    mounted() {}
    ,
    data() {
      return {
        searchedCode: "",
        resultLabel: "",
      };
    },
    watch: {
      searchedCode: function(code) {
        this.resultLabel = findLabel(code, mockPermissions);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 15px;
  }
</style>