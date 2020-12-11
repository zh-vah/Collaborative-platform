<template>
  <div>
    <BoxLeft title="项目概况">
      <div class="left-content">
          <p class="text" v-text="text1"></p>
        <div class="roam">
            <div class="left-icon"><i class="icon iconfont icon-kaishi"></i></div>
            <p class="roma-text">开始厂区漫游1</p>
        </div>
       <div style="height: 200px;">
          <v-chart :options="polar" :style="{width: '300px', height: '200px'}" />
          <v-chart :options="bar" :style="{width: '323px', height: '343px'}" />
       </div>
      </div>
    </BoxLeft>
    <BoxRight title="梁场概况">
      <div class="right-content">
          <video src="" class="video"></video>
          <div class="right-icon"><i class="icon iconfont icon-kaishi right"></i></div>
          <p class="text" v-text="text2"></p>
          <el-scrollbar 
            style="height: 450px" 
            wrap-class="overflow-x:hidden"
            :viewStyle="viewstyle"> <!-- 滚动条 -->
              <ul>
                <li class="subbox">
                  <img class="subbox-img" src="../../assets/img/BoxleftIcon.png" alt="">
                  <h3 class="subbox-title">{{subboxTitle}}</h3>
                  <p class="subbox-text">{{subboxText}}</p>
                </li>
                <li class="subbox">
                  <img class="subbox-img" src="../../assets/img/BoxleftIcon.png" alt="">
                  <h3 class="subbox-title">{{subboxTitle}}</h3>
                  <p class="subbox-text">{{subboxText}}</p>
                </li>
                <li class="subbox">
                  <img class="subbox-img" src="../../assets/img/BoxleftIcon.png" alt="">
                  <h3 class="subbox-title">{{subboxTitle}}</h3>
                  <p class="subbox-text">{{subboxText}}</p>
                </li>
              </ul>
          </el-scrollbar><!-- /滚动条 -->
      </div>
    </BoxRight>
  </div>
</template>

<script>
export default {
  name: "investmentControl",
  data(){
    return {
      viewstyle:{
          boxSizing:'border-box'
        },
      subboxTitle: "原材料控制",
      subboxText: "原材料管控的对接ababab公路是“长三角经济圈”苏浙两省间六条大通道之一，是长三角高速公路网规划的“纵三”江苏盐城至浙江绍兴高速公路的重要组成部分，起自苏州市，由江苏省苏震桃高速公路进入浙江省，"+
              "经湖州、嘉兴，接已建成通车的钱江通道及其南北接线，通过杭绍台高速公路，直达台州。苏",
      polar: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '40%',
                center: ['50%', '60%'],
                data: [
                    {value: 88, name: '梁板总数'},
                    {value: 11, name: '已生产数'},
                ],
                label: {
                    formatter:'{d}%'
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
      },
      bar: {
          legend: {},
          tooltip: {},
          dataset: {
              source: [
                  ['product', '2015', '2016', '2017'],
                  ['2020-07', 43.3, 85.8, 93.7],
                  ['2020-09', 83.1, 73.4, 55.1],
                  ['2020-11', 86.4, 65.2, 82.5],
                  ['Walnut Brownie', 72.4, 53.9, 39.1]
              ]
        },
        xAxis: [
          {type: 'category'},
          {data: ['2020-07','2020-09','2020-11','2021-01']}
        ],
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
        ]
      },
      text1: "苏台高速公路是“长三角经济圈”苏浙两省间六条大通道之一，是长三角高速公路网规划的“纵三”江苏盐城至浙江绍兴高速公路的重要组成部分，起自苏州市，由江苏省苏震桃高速公路进入浙江省，经湖州、嘉兴，接已建成通车的钱江通道及其南北接线，通过杭绍"+
             "台高速公路，直达台州。苏台高速公路路线全长约34.674km（湖州南浔区长12.929km，嘉兴桐乡市长21.745km.主线：设计速度120km/h；双向六车道高速公路，路基宽度为34.5米；联络线：设计速度100km/h，双向六车道高速公路，路基宽33.5米。",
      text2: "智慧梁厂应用5G、物联网、BIM/GIS等信息化技术手段，围绕信息化、智能化、可视化的项目管理理念，将传统梁厂的生产要素进行数字化处理，业务流程通过系统自动上传下达，" +
              "充分开发利用信息资源，促进信息交流和知识共享，以信息化建设推动梁厂的管理水平和生产效率的提升"
    }
  },
 mounted(){
   this.drawLine();
 },
  methods:{
    drawLine(){
        
    }
  }
};
</script>

<style lang="sass" scoped>
.left-content
  .text
    width: 293px;
    margin: 16px 0 12px 18px;
    line-height: 26px;
    font-size: 14px;
    color: rgb( 255, 255, 255 );
    text-align: left;
    text-indent: 2em;
  .roam
    display: flex;
    flex-direction: row;
    justify-content: center;
    weight: 299px;
    height: 38px;
    margin-top: 10px;
    margin-left: 9px;
    padding-top: 10px;
    background: url('../../assets/img/roma-background.png') no-repeat
    cursor: pointer
    &:hover
      opacity: .9
    .left-icon
      margin-right: 7px;
    .rima-text
      font-size: 18px;
.right-content
  height: 700px
  .video
    width: 375px;
    height: 175px;
    margin-left: 10px;
    margin-top: 18px;
    background-color: #0a2f46;
  .right-icon
    position: absolute;
    left: 191px;
    top: 77px;
    cursor: pointer;
    .right
      font-size: 50px;
      color: #097dc2
  .text
    width: 364px;
    margin: 6px 0 11px 14px;
    line-height: 26px;
    font-size: 14px;
    color: rgb( 255, 255, 255 );
    text-align: left;
    text-indent: 2em;
  .subbox
    position: relative;
    width: 376px;
    margin-top: 5px;
    margin-left: 10px;
    background-color: rgba(11,46,67,.6);
    .subbox-img
      margin: 12px 11px 8px 22px;
    .subbox-title
      position: absolute;
      left: 46px;
      top: 5px;
      margin-top: 7px;
      font-size: 16px;
      color: rgb( 38, 206, 255 );
    .subbox-text
      width: 336px;
      margin-left: 18px;
      padding-bottom: 16px;
      font-size: 14px;
      text-indent: 2em;
      line-height: 25px;
      color: rgb( 255, 255, 255 );
</style>



