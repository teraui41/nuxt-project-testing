<template>
<div>
  <div class="check-item" >
    <span v-bind:style="levelStyle" v-bind:class="(level === 0)? 'root-class': 'child-class'"></span>
    <input class="form-check-input" type="checkbox" v-bind:name="code" v-bind:id="code" v-bind:value="code" />
    <label class="form-check-label" for="inlineRadio1">{{label}}</label>
  </div>
  <div  v-if="hasChildren">
    <div class="tree-panel" v-for="item in children" v-bind:key="item.index">
      <TreeItem v-bind:code="item.code" v-bind:label="item.label" v-bind:level="nextLevel" v-bind:children="item.children"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
  export default {
    name: "TreeItem",
    props:[
      "code",
      "label",
      "level",
      "children",
    ],
    data() {
      return {
        msg: "Hello",
      };
    },
    computed: {
      hasChildren: function() {
        if(!this.children || !Array.isArray(this.children)) return false;
        return this.children.length > 0;
      },
      levelStyle: function() {
        const levelpadding = this.level * 30;

        return {
          paddingLeft: `${levelpadding}px`
        }
      },
      nextLevel: function() {
        return this.level + 1;
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