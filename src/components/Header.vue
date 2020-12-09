<template>
  <div class="header bounceInDown animated">
    <h1>GIS+BIM{{title}}管控</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scoped>
.header
  position: absolute
  left: 50%
  top: 30px
  width: 766px
  height: 53px
  line-height: 53px
  transform: translate(-50%, 0%)
  background: url(../assets/img/header-nav.png) no-repeat
  margin-left: -383px
  z-index: 9999
  > h1
    background-image: linear-gradient(to right, #0bc8fe, #feea85)
    background-clip: text
    color: transparent
    -webkit-background-clip: text
    font-size: 24px
    font-family: "Microsoft YaHei"
    font-weight: bold
    text-align: center
</style>
