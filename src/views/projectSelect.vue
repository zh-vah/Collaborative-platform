<template>
  <div class="project-select-wrap" id="particlesDom">
    <div class="project-select-container">
      <img src="@/assets/img/projectSelect/bg.png" alt />
      <div class="titles">
        <h4 class="maintitle">BIM+GIS全过程管控</h4>
        <h4 class="subtitle">BIM+GIS全过程管控</h4>
      </div>
      <div class="top-btns">
        <ul>
          <li class="active" @click="handleClick('design')">设计</li>
          <li @click="handleClick('constructions')">施工</li>
          <li @click="handleClick('liangchang')">梁场</li>
          <li @click="handleClick('curing')">养护</li>
        </ul>
      </div>
      <div class="bottom-btns">
        <div class="item item1">
          <div class="icon"><i class="icon iconfont icon-qiyefengcai"></i></div>
          <div class="text">设计管理</div>
        </div>
        <div class="item item2">
          <div class="icon"><i class="icon iconfont icon-qiyefengcai"></i></div>
          <div class="text">项目管理</div>
        </div>
        <div class="item item3">
          <div class="icon"><i class="icon iconfont icon-qiyefengcai"></i></div>
          <div class="text">智慧工地</div>
        </div>
        <div class="item item4">
          <div class="icon"><i class="icon iconfont icon-qiyefengcai"></i></div>
          <div class="text">梁场管理</div>
        </div>
        <div class="item item5">
          <div class="icon"><i class="icon iconfont icon-qiyefengcai"></i></div>
          <div class="text">养护管理</div>
        </div>
        <div class="item item6">
          <div class="icon"><i class="icon iconfont icon-qiyefengcai"></i></div>
          <div class="text">一体化数据管理</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import particlesConfig from "./particles.json";
export default {
  name: "PojectSelect",
  created() {
    window.localStorage.clear();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      window.particlesJS("particlesDom", particlesConfig);
    },
    handleClick(type) {
      window.localStorage.setItem("projectId", "6686084c-b136-408b-b2c6-963c14defde5");
      this.$router.push({ path: "/home/" + type });
    },
  },
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
    top: 45%
    transform: translate(-50%, -40%)
    display: flex
    justify-content: center
    align-items: center
    img
      width: 100%
      height: 100%
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
          &:hover
            opacity .8
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

<style scoped>
.bottom-btns {
  position: absolute;
  top: 278px;
  z-index: 11;
  left: 0px;
  height: auto;
  width: 1500px;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.item {
  position: absolute;
  bottom: 0px;
  cursor: pointer;
}

.icon {
  width: 104px;
  height: 105px;
  margin: 0 auto;
  background: url(../assets/img/projectSelect/icon1.png) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-btns:hover .item {
  animation-play-state:paused;
}
.item:hover .icon {
  width: 104px;
  height: 105px;
  margin: 0 auto;
  background: url(../assets/img/projectSelect/icon2.png) no-repeat;
}

.icon i {
  font-size: 28px;
  color: #26ceff;
}

.item:hover .icon i {
  color: #fff200
}
.item:hover .text {
  color: #ffde3d
}
.text {
  color: #00e0e2;
  font-size: 23px;
  margin-top: 10px;
  text-align: center;
}

.item1 {
  animation: animX 9s cubic-bezier(0.26, 0, 0.64, 1) -4.5s infinite alternate,
    animY 9s cubic-bezier(0.26, 0, 0.64, 1) 0s infinite alternate,
    scale 18s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
}

.item2 {
  animation: animX 9s cubic-bezier(0.26, 0, 0.64, 1) -7.5s infinite alternate,
    animY 9s cubic-bezier(0.26, 0, 0.64, 1) -3s infinite alternate,
    scale 18s cubic-bezier(0.36, 0, 0.64, 1) -3s infinite alternate;
}

.item3 {
  animation: animX 9s cubic-bezier(0.36, 0, 0.64, 1) -10.5s infinite alternate,
    animY 9s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate,
    scale 18s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate;
}

.item4 {
  animation: animX 9s cubic-bezier(0.36, 0, 0.64, 1) -13.5s infinite alternate,
    animY 9s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate,
    scale 18s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate;
}

.item5 {
  animation: animX 9s cubic-bezier(0.36, 0, 0.64, 1) -16.5s infinite alternate,
    animY 9s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
    scale 18s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
}

.item6 {
  animation: animX 9s cubic-bezier(0.36, 0, 0.64, 1) -19.5s infinite alternate,
    animY 9s cubic-bezier(0.36, 0, 0.64, 1) -15s infinite alternate,
    scale 18s cubic-bezier(0.36, 0, 0.64, 1) -15s infinite alternate;
}

@keyframes animX {
  0% {
    left: 0px;
  }
  100% {
    left: 1280px;
  }
}
@keyframes animY {
  0% {
    top: 0px;
  }
  100% {
    top: 340px;
  }
}
@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.6);
  }
}
</style>
