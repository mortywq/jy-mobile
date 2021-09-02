<template>
  <van-nav-bar
    :title="$route.meta.title"
    :left-text="left_text"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <slot name="right"></slot>
    </template>
  </van-nav-bar>
</template>

<script>
import { toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  props: {
    left_text: {
      type: String,
      default: "返回"
    }
  },
  emits: {
    onClickRight: (val) => {
      return true;
    }
  },
  setup(props, context) {
    const route = useRoute();
    const router = useRouter();

    const onClickLeft = () => {
      router.go(-1);
    };

    const onClickRight = () => {
      context.emits("onClickRight");
    };
    return {
      onClickLeft,
      onClickRight
    };
  }
};
</script>
<style lang="scss" scoped></style>
