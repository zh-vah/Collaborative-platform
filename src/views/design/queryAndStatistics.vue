<template>
  <div>
    <BoxLeft title="图层控制">
      <div class="qs-boxleft">
        <div class="qs-search">
          <input class="qs-input" type="text" placeholder="搜索关键字">
          <i class="icon iconfont icon-sousou"></i>
        </div>
        <el-tree 
          :data="data" 
          :props="defaultProps"
          icon-class="icon iconfont icon-accessories"
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
    </BoxLeft>
    <BoxRight title="质量巡检"></BoxRight>
  </div>
</template>

<script>
export default {
  name: "queryAndStatistics",
  data() {
      return {
        data: [{
          label: '工程方案',
          children: [{
            label: '路线方向',
            children: [{
              label: '主线.Kmz',
            },{
              label: '砸道.Kmz',
            },{
              label: 'G204.Kmz'
            }]
          },{
            label: '全线模型',
            children: [{
              label: '方案模型',
            },{
              label: '红线范围',
            }]
          }]
        }, {
          label: '交付模型',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '环境模型',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
};

</script>
<style lang="sass">
.qs-boxleft
  padding-top: 14px;
  .qs-search
    width: 300px;
    height: 32px;
    margin-left: 8px;
    margin-bottom: 18px;
    padding-bottom: 4px;
    border-bottom: 1px solid #26ceff; 
    .qs-input
      height: 25px;
      margin-left: 4px;
      background-color: #00000000
      color: #fff
      border: 0
      outline: none;
      &::placeholder
        font-size: 18px;
        color: rgba( 38, 206, 255, 0.502 );
        line-height: 2.5;
    .icon-sousou
      position: absolute;
      top: 16px;
      right: 37px;
      color: #57f9ff;
      font-size: 23px;
      &:hover
        cursor: pointer;
  .el-tree
    .el-tree-node
      background: #073551;
      &:focus
        background: #073551;
      .el-tree-node__content
           
</style>

