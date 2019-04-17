<template>
  <div class="check-item" >
    <span v-bind:style="levelStyle" v-bind:class="(level === 0)? 'root-class': 'child-class'"></span>
    <input class="form-check-input" type="checkbox" v-bind:name="code" v-bind:id="code" v-bind:value="code" v-bind:checked="checked" v-on:change="onChangeHandler" >
    <label class="form-check-label" for="inlineRadio1">{{label}}</label>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TreeItem",
    props:[
      "code",
      "label",
      "level",
      "checkedList",
    ],
    data() {
      return {
        msg: "Hello",
      };
    },
    computed: {
      levelStyle: function() {
        const levelpadding = this.level * 30;

        return {
          paddingLeft: `${levelpadding}px`
        }
      },
      checked: function() {
        console.log("TCL: this.checkedList", this.checkedList)
        return this.checkedList.includes(this.code);
      }
    },
    methods: {
      onChangeHandler: function(event) {
        const code = event.target.name;
        this.$emit('onChange', code);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .check-item {
    padding-bottom: 8px;
  }
  .root-class {

  }
  .child-class {
    &:after {
      content: "";
      position: absolute;
      width: 1px;
      height: 25px;
      margin-left: -44px;
      margin-top: -12px;
      background-color: #eee;
    }
    &:before {
      content: "";
      position: absolute;
      width: 25px;
      height: 1px;
      background-color: #d4d4d4;
      margin-left: -43px;
      margin-top: 12px;
  }
  }
</style>