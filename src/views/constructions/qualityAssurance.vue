<template>
  <div>
    <BoxLeft title="质量巡检">
      <div class="search-box">
        <div class="bid-section">
          <span class="name">标段</span>
          <span class="selectd">第一合同段</span>
          <div class="bid-section-icon"></div>
        </div>
        <div class="bid-section">
          <span class="name">类型</span>
          <span class="selectd">工程类</span>
          <div class="bid-section-icon2"></div>
        </div>
        <div class="search">
          <i class="icon iconfont icon-sousou"></i>
          <span class="search-span">搜索</span>
        </div>
      </div>
      <div class="iscompleted-box">
        <div class="not-completed" @click="completedChange($event)"><span class="text">未完成</span></div>
        <div class="completed" @click="completedChange($event)"><span class="text">已完成</span></div>
      </div>
      <template v-for="(item,index) in menus">
        <div class="search-content-box" :key="index">
          <div class="sc-box-top">
            <div class="sc-box-degree"><span>{{item.degree}}</span></div>
            <p class="sc-box-title">{{item.title}}</p>
            <img src="" alt="">
          </div>
          <div class="sc-box-bottom">
            <span class="sc-box-create-time">创建时间 :</span>
            <span class="sc-box-create-data">{{item.createData}}</span>
            <span class="sc-box-discoverer">发现人 :</span>
            <span class="sc-box-discoverer-name">{{item.discoverName}}</span>
          </div>
        </div>
      </template>
    </BoxLeft>

    <BoxRight title="质量管理详细信息">
      <div class="qa-boxright">
        <div class="qa-boxright-box">
          <h3 class="title">问题描述</h3>
          <p>马上整改，加强养生</p>
        </div>
        <div class="qa-boxright-box">
          <h3 class="title">问题描述</h3>
          <p>马上整改，加强养生</p>
        </div>
      </div>
    </BoxRight>
  </div>
</template>

<script>
import BoxLeft from '../../components/BoxLeft.vue';
export default {
  components: { BoxLeft },
  name: "qualityAssurance",
  data() {
    return {
      menus:{
        menu1:{
          degree: "轻微",
          title: "桥面板未挂养生牌",
          createData: "2019-03-14",
          discoverName: "李增得"
        },
        menu2:{
          degree: "轻微",
          title: "桥面板未挂养生牌",
          createData: "2019-03-14",
          discoverName: "李增得"
        },
        menu3:{
          degree: "轻微",
          title: "桥面板未挂养生牌",
          createData: "2019-03-14",
          discoverName: "李增得"
        }
      }
    }
  },
  methods: {
    completedChange(e) {
      e.currentTarget.style.background = "url('../../assets/img/constructions/qualityAssurance/arror-active.png')"
    }
  }
};
</script>

<style lang="sass" scoped>
.search-box
  .bid-section
    width: 289px;
    padding: 10px;
    border-bottom: 1px solid #26ceff;
    .name
      color: #26ceff;
      margin-right: 32px;
    .bid-section-icon
      width: 15px;
      height: 4px;
      float: right;
      margin-top: 6px;
      cursor: pointer;
      opacity: .9
      background: url('../../assets/img/constructions/qualityAssurance/search-icon1.png')
    .bid-section-icon2
      width: 15px;
      height: 17px;
      float: right;
      cursor: pointer;
      background: url('../../assets/img/constructions/qualityAssurance/search-icon2.png')
      &:hover
        opacity: .9
  .search
    display: flex;
    justify-content: center;
    width: 299px;
    height: 38px;
    margin-top: 20px;
    cursor: pointer;
    background: url('../../assets/img/constructions/qualityAssurance/search-btn-bg.png') no-repeat;
    &:hover
     opacity: .9
    .icon-sousou
      margin-top: 11px;
      margin-right: 17px;
      font-size: 19px;
    .search-span
      margin-top: 11px;
.iscompleted-box
  display: flex;
  direction: row;
  margin-top: 10px;
  margin-left: 18px;
  .not-completed
    width: 118px;
    height: 34px;
    padding-top: 10px;
    cursor: pointer;
    background: url('../../assets/img/constructions/qualityAssurance/arror-active.png') no-repeat;
    &:hover
     opacity: .9
    .text
      margin-left: 31px;
  .completed
    width: 118px;
    height: 34px;
    padding-top: 10px;
    margin-left: -6px;
    cursor: pointer;
    background: url('../../assets/img/constructions/qualityAssurance/arror.png') no-repeat;
    &:hover
     opacity: .9 
    .text
      margin-left: 31px;
.search-content-box
  width: 300px;
  height: 80px;
  padding-top: 3px;
  margin-left: 8px;
  margin-bottom: 7px;
  background-color: rgba( 11, 46, 67, 0.6);
  .sc-box-top
    display: flex;
    justify-content: left;
    margin-top: 15px;
    margin-left: 11px;
    .sc-box-degree
      width: 53px;
      height: 20px;
      margin-right: 16px;
      padding-top: 5px;
      border-radius: 9px;
      background-color: rgba( 204, 255, 183, 0.102);
      span
        margin-left: 10px;
        color: #3fd802;
    .sc-box-title
      margin-top: 5px;
  .sc-box-bottom
    display: flex;
    justify-content: left;
    margin-top: 15px;
    margin-left: 20px;
    font-size: 13.333px;
    .sc-box-create-time
      font-size: 13.333px;
      opacity: 0.6;
    .sc-box-create-data
      margin-left: 6px;
      margin-right: 18px;
      font-size: 13.333px;
    .sc-box-discoverer
      margin-right: 7px;
      font-size: 13.333px;
      opacity: 0.6;
    .sc-discoverer-names
.qa-boxright
  padding-top: 30px;
  margin-left: 12px;
  .qa-boxright-box
    width: 375px;
    margin-bottom: 7px;
    background-color: rgba( 11, 46, 67, 0.6);
    .title
      margin-left: 18px;
      font-size: 18px;
      color: #26ceff;
      line-height: 3.333;
    > p
      margin-left: 18px;
      padding-bottom: 15px;
</style>
}

