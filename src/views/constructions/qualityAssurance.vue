<template>
  <div>
    <BoxLeft title="质量巡检">
      <div class="search-box">
        <div class="bid-section">
          <span class="name">标段</span>
          <input class="bid-section-input" type="text" placeholder="第一合同段">
          <div class="bid-section-icon"></div>
        </div>
        <div class="bid-section">
          <span class="name">类型</span>
          <select class="bid-section-select">
            <option value ="volvo">工程类</option>
            <option value ="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div class="search">
          <i class="icon iconfont icon-sousou"></i>
          <span class="search-span">搜索</span>
        </div>
      </div>
      <div class="iscompleted-box">
        <div class="item" :class="currentIndex==0 ? 'active' : ''" @click="completedChange(0)"><span class="text">未完成</span></div>
        <div class="item" :class="currentIndex==1 ? 'active' : ''" @click="completedChange(1)"><span class="text">已完成</span></div>
      </div>
      <ul>
          <li class="search-content-box">
            <div class="sc-box-top">
              <span class="sc-box-degree slight-degree">轻微</span>
              <h3 class="sc-box-title">桥面板未挂养生牌</h3>
              <i class="icon iconfont icon-weizhi"></i>
            </div>
            <div class="sc-box-bottom">
              <div class="sc-box-create-time">
                <span class="create-time">创建时间 :</span>
                <span class="create-data">2019-03-14</span>
              </div>
              <div class="sc-box-discoverer">
                <span class="discoverer">发现人 :</span>
                <span class="discoverer-name">李增得</span>
              </div>
            </div>
          </li>
          <li class="search-content-box">
            <div class="sc-box-top">
              <span class="sc-box-degree commonly-degree">一般</span>
              <h3 class="sc-box-title">桥面板未挂养生牌</h3>
              <i class="icon iconfont icon-weizhi"></i>
            </div>
            <div class="sc-box-bottom">
              <div>
                <span class="create-time">创建时间 :</span>
                <span class="create-data">2019-03-14</span>
              </div>
              <div>
                <span class="discoverer">发现人 :</span>
                <span class="discoverer-name">李增得</span>
              </div>
            </div>
          </li>
          <li class="search-content-box">
            <div class="sc-box-top">
              <span class="sc-box-degree serious-degree">严重</span>
              <h3 class="sc-box-title">桥面板未挂养生牌</h3>
              <i class="icon iconfont icon-weizhi"></i>
            </div>
            <div class="sc-box-bottom">
              <div>
                <span class="create-time">创建时间 :</span>
                <span class="create-data">2019-03-14</span>
              </div>
              <div>
                <span class="discoverer">发现人 :</span>
                <span class="discoverer-name">李增得</span>
              </div>
            </div>
          </li>
      </ul>
    </BoxLeft>

    <BoxRight title="质量管理详细信息">
      <div class="boxRight">
        <div class="boxRight-subbox subbox-description">
          <h3>问题描述</h3>
          <p>马上整改，加强养生</p>
        </div>
        <div class="boxRight-subbox subbox-picture">
          <h3>图片/视频</h3>
          <img src="../../assets/img/constructions/qualityAssurance/picture.png" alt="">
        </div>
        <div class="boxRight-subbox subbox-rectifydatatime">
          <h3>要求整改日期</h3>
          <span>2019-03-14</span>
        </div>
        <div class="boxRight-subbox subbox-communicate">
          <h3>问题交流</h3>
          <ul>
            <li>
              <div class="name">谢建鹏[监理 监理员]</div>
              <p class="content">已检查，完成</p>
              <span class="date">2019-03-06 15.31</span>
            </li>
            <li>
              <div class="name">谢建鹏[监理 监理员]</div>
              <p class="content">已检查，完成</p>
              <div class="picture"><img src="../../assets/img/constructions/qualityAssurance/picture.png" alt=""></div>
              <span class="date">2019-03-06 15.31</span>
            </li>
          </ul>
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
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    completedChange(index) {
      this.currentIndex = index
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
    .bid-section-input
      border: 0;
      outline: none;
      color: white;
      background: #073551;
      &::placeholder
        font-size: 15px;
        color: rgba( 255, 255, 255, 0.8 );
    .el-dropdown-link
      cursor: pointer;
      color: #409EFF;
      .el-icon-arrow-down
        font-size: 12px;
    .name
      color: #26ceff;
      margin-right: 32px;
    .bid-section-select
      border: 0;
      outline: none;
      color: white;
      background: transparent;
      width: 225px;
      >option
        background: #4376af;
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
    margin-left: 9px;
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
  .item
    width: 118px;
    height: 34px;
    padding-top: 10px;
    cursor: pointer;
    background: url('../../assets/img/constructions/qualityAssurance/arror.png') no-repeat;
    &:hover,
    &.active
     opacity: .9
     background: url('../../assets/img/constructions/qualityAssurance/arror-active.png') no-repeat
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
  &:after
    content: url('../../assets/img/constructions/qualityAssurance/bottom-right-icon.png')
    position: absolute
    right: 26px;
  &:hover
    cursor: pointer
    background: #124667
  .sc-box-top
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 11px;
    .icon-weizhi
      margin-left: 55px;
      font-size: 21px;
      color: #00a8ff;
    .sc-box-degree
      width: 46px;
      height: 20px;
      margin-right: 16px;
      padding-top: 5px;
      border-radius: 9px;
    .slight-degree
      margin-left: 3px;
      padding-left: 12px;
      background-color: rgba( 204, 255, 183, 0.102);
      color: #3fd802;
    .commonly-degree
      margin-left: 3px;
      padding-left: 12px;
      background-color: rgba( 255, 162, 0, 0.102);
      color: #ffba00;
    .serious-degree
      margin-left: 3px;
      padding-left: 12px;
      background-color: rgba( 255, 146, 147, 0.102);
      color: rgb( 255, 86, 86 );
  .sc-box-bottom
    display: flex;
    justify-content: left;
    margin-top: 15px;
    margin-left: 20px;
    font-size: 13.333px;
    .create-time
      font-size: 13.333px;
      opacity: 0.6;
    .create-data
      margin-left: 6px;
      margin-right: 18px;
      font-size: 13.333px;
    .discoverer
      margin-right: 7px;
      font-size: 13.333px;
      opacity: 0.6;
.boxRight
  padding-top: 30px;
  margin-left: 12px;
  .boxRight-subbox
    width: 375px;
    margin-bottom: 7px;
    background-color: rgba( 11, 46, 67, 0.6);
    >h3
      margin-left: 18px;
      font-size: 17px;
      color: #26ceff;
      line-height: 2.5;
    > p
      margin-left: 18px;
      padding-bottom: 15px;
  .subbox-description
    >p
      margin-top: 10px;
  .subbox-picture
    >img
      margin-left: 18px;
      margin-bottom: 10px
  .subbox-rectifydatatime
    display: flex;
    align-items: center;
    >span
      margin-left: 140px;
      margin-top: 6px;
  .subbox-communicate
    li
      padding-bottom: 16px;
    .name
      margin-left: 29px;
      font-size: 16.333px;
      color: rgba(255, 255, 255, 0.502);
      line-height: 1.5;
    .content
      margin: 12px 0 15px 29px;
    .picture
      margin-left: 29px;
    .date
      margin-left: 222px;
      color: rgba( 54, 134, 177, 0.502 );
</style>





