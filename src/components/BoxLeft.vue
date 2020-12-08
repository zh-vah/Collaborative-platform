<template>
  <div class="box-left-warp bounceInLeft animated">
    <div class="box-left-line">
      <div class="box-left-close" @click="boxClose()">
        <img src="@/assets/img/box/box-close.png" title="关闭面板" alt="关闭" />
      </div>
      <div class="box-left-title">{{title}}</div>
      <div class="box-left-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxLeft",
  props: {
    title: String,
  },
  methods: {
    boxClose() {
      document.querySelector(".box-left-warp").style.display = "none"
    }
  }
};
</script>

<style lang="sass" scoped>
.box-left-warp
  position: absolute
  left: 50px
  top: 30px
  bottom: 140px
  width: 355px
  &:before
    content: ''
    position: absolute
    left: 0px
    top: 0px
    width: 100%
    height: 36px
    background: url('../assets/img/box/box-left-top.png')
  &:after
    content: ''
    position: absolute
    left: 0px
    bottom: 0px
    width: 100%
    height: 29px
    background: url('../assets/img/box/box-left-bottom.png')
  .box-left-line
    position: relative
    width: 100%
    height: calc(100% - 36px - 29px)
    margin-top: 36px
    background: url('../assets/img/box/box-left-line.png')
    .box-left-title
      position: absolute
      left: 0px
      top: -36px
      width: 100%
      background-image: linear-gradient(to bottom, #b2fefb, #61dcff)
      background-clip: text
      color: transparent
      font-size: 18px
      font-weight: bold
      text-align: center
      line-height: 33px
    .box-left-close
      position: absolute
      right: -14px
      top: -40px
      cursor: pointer
      transition-duration: .5s
      &:hover
        opacity: .9
        transform: scale(1.1)
    .box-left-container
      position: relative
      width: 100%
      height: 100%
      padding: 0 20px
      box-sizing: border-box
</style>
