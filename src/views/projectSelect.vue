<template>
  <div>

    <el-button @click="hanldeClick">按钮</el-button>
    {{msg}} <bim :msg.sync="msg" :change="change" dd="dd"></bim>
  </div>
</template>

<script>
import bim from "./bim/bim.vue"
export default {
  name: "PojectSelect",
  components:{
    bim
  },
  provide(){
    return {
       foo: this
    }
  },
  data(){
    return {
        msg:"父组件"
    }
  },
  methods:{
    hanldeClick(){
      this.msg = '子组件'
    },
    change(va){
      alert(va)
      // this.msg = va
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
