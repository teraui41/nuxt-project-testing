<template>
  <div class="row">
    <div class="col-xs-12">
      {{msg}}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TreeItem",
    data() {
      return {
        msg: "Hello",
      };
    }
  };
</script>

<style lang="scss" scoped>
  .Panel {

  }
</style>