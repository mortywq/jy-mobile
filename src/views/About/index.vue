<template>
  <div class="about">
    我是首页
    <van-button type="success" @click="toDetailBtn">我要去详情页</van-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "About",
  setup() {
    const router = useRouter();
    const toDetailBtn = () => {
      router.push({
        path: "/about-detail"
      });
    };
    return {
      toDetailBtn
    };
  }
};
</script>
<style lang="less" scoped>
.about {
  font-size: 0.25rem;
}
</style>
