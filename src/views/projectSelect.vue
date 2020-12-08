<template>
  <div class="project-select-wrap">
    <div class="project-select-container">
      <img src="@/assets/img/projectSelect/bg.png" alt />
      <div class="titles">
        <h4 class="maintitle">BIM+GIS全过程管控</h4>
        <h4 class="subtitle">BIM+GIS全过程管控</h4>
      </div>
      <div class="top-btns">
        <ul>
          <li class="active">设计</li>
          <li>设计</li>
          <li>设计</li>
          <li>设计</li>
        </ul>
      </div>
      <div class="bottom-btns">
        <div class="item item1">
          <div class="icon"></div>
          <div class="text">设计管理</div>
        </div>
        <div class="item item2">
          <div class="icon"></div>
          <div class="text">项目管理</div>
        </div>
        <div class="item item3">
          <div class="icon"></div>
          <div class="text">智慧工地</div>
        </div>
        <div class="item item4">
          <div class="icon"></div>
          <div class="text">梁场管理</div>
        </div>
        <div class="item item5">
          <div class="icon"></div>
          <div class="text">养护管理</div>
        </div>
        <div class="item item6">
          <div class="icon"></div>
          <div class="text">一体化数据管理</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PojectSelect",
};
</script>

<style lang="sass" scoped>
.project-select-wrap
  position: relative
  width: 100%
  height: 100%
  .project-select-container
    width: 1500px
    height: 908px
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -40%)
    display: flex
    justify-content: center
    align-items: center
    img
      width: 100%
      height: 100%
    .bottom-btns
      position: absolute
      bottom: 278px
      z-index: 11
      left: 0px
      height: auto
      width: 100%
      .item
        position: absolute
        &.item1
          left: 97px
          margin-left: 0px
          bottom: -14px
          .icon
            width: 104px
            height: 105px
            background: url(../assets/img/projectSelect/icon1.png)
          .text
            color: #00e0e2
            font-size: 28px
            margin-top: 10px
    .top-btns
      position: absolute
      top: 348px
      z-index: 9
      left: 50%
      width: 460px
      margin-left: -305px
      -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.4)))
      ul
        overflow: hidden
        li
          width: 115px
          height: 36px
          background: url(../assets/img/projectSelect/btn.png)
          background-repeat: no-repeat
          background-size: 100%
          margin-right: 10px
          display: flex
          justify-content: center
          align-items: center
          margin: 0px
          padding: 0px
          float: left
          color: #26ceff
          cursor: pointer
          &:last-child
            margin-right: 0px
    .titles
      position: absolute
      top: 218px
      z-index: 9
      left: 50%
      width: 800px
      margin-left: -400px
      .maintitle
        position: absolute
        font-size: 72px
        font-weight: bold
        text-align: center
        color: rgb( 21, 69, 82)
        left: 0px
        top: 0px
      .subtitle
        position: absolute
        font-size: 72px
        font-weight: bold
        text-align: center
        background-image: linear-gradient(to right, #0bc8fe, #feea85)
        background-clip: text
        color: transparent
        -webkit-background-clip: text
        left: -2px
        top: -4px
</style>
