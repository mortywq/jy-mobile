<template>
  <div>
    <router-view />
    <footer-tab-bar v-show="$route.meta.showTabBar"></footer-tab-bar>
  </div>
</template>

<script>
//引入组件

import FooterTabBar from "@/components/common/tab-bar";
export default {
  name: "App",
  components: {
    FooterTabBar
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
