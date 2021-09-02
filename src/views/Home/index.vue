<template>
  <div class="Home">
    我是home
    <van-button type="success" @click="toDetailBtn">我要去详情页</van-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const toDetailBtn = () => {
      router.push({
        path: "/home-detail"
      });
    };
    return {
      toDetailBtn
    };
  }
};
</script>
<style lang="less" scoped>
.Home {
  font-size: 0.25rem;
}
</style>
