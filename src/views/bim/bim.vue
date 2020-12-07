<template>
  <div>{{msg}} <el-button @click="handle">子按钮</el-button> {{$attrs}}</div>
</template>

<script>
export default {
  name: "bim",
  inject : ["foo"],
  props:{
    msg:String,
    change: Function
  },
  methods:{
    handle(){
      console.log(this.foo)
      //this.$emit("update:msg","我是子组件")
      this.change("我是子组件的函数")
      // this.$emit("change", "我只是子组件")
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
