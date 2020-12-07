<template>
  <div class="side-right-bar">
    <div class="extend animated" title="展开" v-show="isShow" @mouseover="change()">
      <img src="@/assets/img/siderightbar/sidebar-extend.png" alt />
    </div>
    <div class="side-right-warp animated fadeInRight" v-show="!isShow">
      <div class="shrink" title="收缩" @click="change()">
        <img src="@/assets/img/siderightbar/sidebar-shrink.png" alt />
      </div>
      <ul class="side-right-warp-list">
        <li
          v-for="(item,index) in menus"
          :key="index"
          class="item"
          :class="item.children ? 'item-sub' : ''"
        >
          <div class="main" :title="item.title ? item.title : ''">
            <i class="icon iconfont" :class="item.icon"></i>
          </div>
          <ul class="sub-warp" v-if="item.children">
            <li class="sub-warp-item" v-for="(subItem, subIndex) in item.children" :key="subIndex" :title="subItem.title ? subItem.title : ''">
              <i class="icon iconfont" :class="subItem.icon"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideRightBar",
  data() {
    return {
      menus: [
        { title: "图层控制", icon: "icon-tuceng", event: "tuceng" },
        { title: "控件控制", icon: "icon-moxingku", event: "moxingku" },
        {
          title: "测量",
          icon: "icon-chizi",
          event: "chizi",
          children: [
            { title: "距离", icon: "icon-celiang", event: "width" },
            { title: "高度", icon: "icon-celiang-copy", event: "height" },
            { title: "面积", icon: "icon-mianji", event: "area" },
          ],
        },
        { title: "漫游", icon: "icon-diqiuxueyuan", event: "roam" },
        { title: "模型还原", icon: "icon-huanyuan", event: "modelRestoration" },
        { title: "模型库", icon: "icon-suodingtouming_huaban1",  event: "modelBase"},
        { title: "视角保存", icon: "icon-guangshijiao", event: "perspective" },
        { title: "模型压平", 
          icon: "icon-pouqie", 
          event: "modelFlattening",
          children: [
            { title: "自定义", icon: "icon-zidingyishuju", event: "custom" },
            { title: "模型平压", icon: "icon-yasuotupian", event: "modelFlattening" },
          ],
        },
        { title: "地质解刨", 
          icon: "icon-celiang", 
          event: "planing",
          children: [
            { title: "自定义", icon: "icon-zidingyishuju", event: "custom" },
            { title: "沿线剖切", icon: "icon-scalpel", event: "sectionAlong" },
          ],
        },
        { title: "地形开挖", 
          icon: "icon-construction", 
          event: "excavation",
          children: [
            { title: "自定义", icon: "icon-zidingyishuju", event: "custom" },
            { title: "沿线开挖", icon: "icon-construction", event: "excavationAlong" },
          ],
        },
      ],
      isShow: true,
    };
  },
  methods: {
    change(){
      this.isShow = !this.isShow
    },
  }
};
</script>

<style lang="sass" scoped>
.side-right-bar
  position: absolute;
  right: 0px;
  top: 50%;
  height: 401px;
  width: 39px;
  transform: translate(0%, -50%);
  z-index: 9;
  .extend
    position: absolute
    width: 10px
    height: 39px
    right: 0px
    top: 50%
    transform: translate(0%, -50%)
    cursor: pointer
    &:hover
      opacity: .9
    img
      width: 100%
      height: 100%
  .side-right-warp
    position: relative
    width: 100%
    height: 100%
    background: url('../assets/img/siderightbar/sidebar-box.png')
    .shrink
      position: absolute
      width: 10px
      height: 39px
      right: 37px
      top: 50%
      transform: translate(0%, -50%)
      cursor: pointer
      &:hover
        opacity: .9
      img
        width: 100%
        height: 100%
    .side-right-warp-list
      position: relative
      width: 100%
      height: 100%
      padding: 28px 0
      box-sizing: border-box
      > .item
        height: 28px
        position: relative
        box-sizing: border-box
        margin-bottom: 7px
        &:last-child
          margin-bottom: 0px
        .main
          height: 100%
          width: 100%
          display: flex
          justify-content: center
          align-items: center
          box-sizing: border-box
          &:hover
            opacity: .9
          i
            font-size: 17px
            margin-left: 3px
            cursor: pointer
      > .item-sub
        .main
          &:before
            content: ''
            position: absolute;
            right: 0px;
            top: 3px;
            width: 10px;
            height: 10px;
            background: url('../assets/img/siderightbar/couldExtend.png') no-repeat
            
        &:hover
          .main
            background: #164b74
            border: 1px solid #20a1cb
            border-right: none
            &:before
              top: 0px;
              right: 3px;
              transform: rotate(180deg)
          .sub-warp
            display: block
      .sub-warp
        position: absolute
        height: 28px
        right: 37px
        top: 0px
        background: #164b74
        border: 1px solid #20a1cb
        border-right: none
        box-sizing: border-box
        display: none
        overflow: hidden
        width: max-content
        .sub-warp-item
          width: 39px
          height: 100%
          display: flex
          justify-content: center
          align-items: center
          box-sizing: border-box
          float: left
          &:hover
            opacity: .9
          i
            font-size: 17px
            margin-left: 3px
            cursor: pointer
</style>