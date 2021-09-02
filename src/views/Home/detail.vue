<template>
  <top-nav-bar>
    <!-- 需要右边的按钮或者别的就传入slot插槽 -->
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </top-nav-bar>
  <div>{{ $route.meta.title }}</div>
</template>

<script>
import TopNavBar from "@/components/common/nav-bar";
export default {
  name: "home-detail",
  components: {
    TopNavBar
  }
};
</script>
<style lang="less" scoped></style>
