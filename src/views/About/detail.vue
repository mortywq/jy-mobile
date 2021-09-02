<template>
  <top-nav-bar>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </top-nav-bar>
  <div>{{ $route.meta.title }}</div>
</template>

<script>
import TopNavBar from "@/components/common/nav-bar";
export default {
  name: "about-detail",
  components: {
    TopNavBar
  }
};
</script>
<style lang="less" scoped></style>
