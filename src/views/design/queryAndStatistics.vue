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
          :render-content="renderContent" 
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
    </BoxLeft>
  </div>
</template>

<script>
export default {
  name: "queryAndStatistics",
  data() {
      return {
        data: [{
          label: '工程方案',
          isShow: true,
          children: [{
            label: '路线方向',
              isShow: true,
            children: [{
              label: '主线.Kmz',
              isShow: true
            },{
              label: '砸道.Kmz',
              isShow: true
            },{
              label: 'G204.Kmz',
              isShow: true
            }]
          },{
            label: '全线模型',
              isShow: true,
            children: [{
              label: '方案模型',
              isShow: true
            },{
              label: '红线范围',
              isShow: true
            }]
          }]
        }, {
          label: '交付模型',
              isShow: true,
          children: [{
            label: '二级 2-1',
              isShow: true,
            children: [{
              label: '三级 2-1-1',
              isShow: true
            }]
          }, {
            label: '二级 2-2',
              isShow: true,
            children: [{
              label: '三级 2-2-1',
              isShow: true
            }]
          }]
        }, {
          label: '环境模型',
              isShow: true,
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1',
              isShow: true
            }],
              isShow: true
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1',
              isShow: true
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
              isShow: true
        }
      };
    },
    methods: {
      handleNodeClick(data,node,root) {
        console.log(data,node,root);
        // console.log(node.parent);
        data.isShow = false
      },
      renderContent(h, { node, data, store }) {
        console.log(data)
        return (
          <span class="custom-tree-node">
            <i class={data.children && data.children.length> 0 ? 'icon iconfont icon-xinxinicon' : 'icon iconfont icon-wenjian'}></i>
            <span class="label">{node.label}</span>
            <span>
              <i class={data.isShow ? 'icon iconfont icon-xianshi' : 'icon iconfont icon-xianshi1'}></i>
            </span>
          </span>);
      }
    }
};

</script>
<style lang="sass" scoped>
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

</style>

