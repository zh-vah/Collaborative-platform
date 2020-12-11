<template>
  <div class="side-left-bar bounceInLeft animated">
    <!-- {{$route.path}} -->
    <ul class="menus">
      <li
        v-for="(item,index) in menus"
        :key="index"
        class="item"
        :class="currentActive(item) ? 'active' : ''"
        v-html="lineBreakText(item.name)"
        @click="handelClick(index, item.name, item)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideLeftBar",
  data() {
    return {
      menus: [
        { name: "设计", path: "/home/design" },
        { name: "施工", path: "/home/constructions" },
        { name: "梁场", path: "/home/liangchang" },
        { name: "养护", path: "/home/curing" },
      ],
    };
  },
  computed: {
    currentActive: function () {
      return function (item) {
        var thepath = item.path.split("/")[2];
        var reg = new RegExp(thepath);
        return reg.test(this.$route.path);
      };
    },
  },
  methods: {
    handelClick(index, name, item) {
      if (item.path) {
        this.$router.push({ path: item.path });
      }
      this.$emit("change", index, name);
    },
    lineBreakText(str) {
      if (str) {
        let text = "";
        for (let i = 0; i < str.length; i++) {
          if (i !== str.length - 1) {
            text += `${str[i]} <br />`;
          } else {
            text += `${str[i]}`;
          }
        }
        return text;
      }
      return "";
    },
  },
};
</script>

<style lang="sass" scoped>
.side-left-bar
  position: absolute
  left: 0px
  top: 30px
  width: 30px
  z-index: 9999
  .menus
    .item
      width: 28px
      height: 68px
      background: url(../assets/img/sideleft/icon.png)
      display: flex
      align-items: center
      justify-content: center
      color: #26ceff
      font-size: 16px
      line-height: 20px
      text-align: center
      margin-bottom: 10px
      cursor: pointer
      transition-duration: .5s
      &:hover,
      &.active
        transform: scale(1.1)
        color: #f8e800
        background: url(../assets/img/sideleft/iconh.png)
</style>
