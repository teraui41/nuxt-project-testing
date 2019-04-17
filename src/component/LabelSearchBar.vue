<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{"Find Label Function Block"}}</h5>
          <div class="">
          </div>

          <input type="text" class="form-control" placeholder="please input the permission code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "LabelSearchBar",
    data() {
      return {
        title: "Hello",
        permissionCode: "",
      };
    }
  };
</script>

<style lang="scss" scoped>
  .Panel {

  }
</style>