<template>
  <div>
    <SideLeftBar @change="sideLeftChange"></SideLeftBar>
    <Header :title="headerTitle"></Header>
    <SideMenus @change="sideMenusChange" :headerIndex="headerIndex"></SideMenus>
    <SideRightBar></SideRightBar>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SideLeftBar from "@/components/SideLeftBar.vue";
import SideMenus from "@/components/SideMenus.vue";
import SideRightBar from "@/components/SideRightBar.vue";
export default {
  name: "SubHome",
  components: {
    Header,
    SideLeftBar,
    SideMenus,
    SideRightBar,
  },
  data() {
    return {
      headerIndex: 0,
      headerTitle: "设计",
    };
  },
  methods: {
    sideLeftChange(index, name) {
      this.headerIndex = index;
      this.headerTitle = name;
    },
    sideMenusChange(item) {
      console.log(item);
    },
  },
};
</script>