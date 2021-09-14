<template>
  <div class="Home">
    我是home
    <van-button type="success" @click="toDetailBtn">我要去详情页</van-button>
    <div class="demo">我宽高</div>
    <div class="demo">我宽高</div>
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
.demo {
  width: 400px;
  height: 300px;
  position: absolute;
}
</style>
