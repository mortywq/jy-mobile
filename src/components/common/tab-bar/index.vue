<template>
  <div>
    <van-tabbar v-model="active" @change="onChangeTab">
      <van-tabbar-item
        v-for="(item, index) in menus"
        :key="index"
        :icon="item.icon"
        :name="item.path"
        >{{ item.name }}
        <template #icon="props" v-if="item.slotUrl">
          <img
            :src="props.active ? item.slotUrl.active : item.slotUrl.inactive"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import configMenus from "./hooks/useMenuConfig.js";
export default {
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const active = ref();
    const menus = reactive(configMenus);
    //监听路由变化到详情页时需不需要高亮显示
    watch(
      () => route,
      (newV, oldV) => {
        if (newV.meta.activaMenu) {
          active.value = newV.meta.activaMenu;
        } else {
          active.value = newV.path;
        }
      },
      {
        deep: true,
        immediate: true
      }
    );

    //改变路由
    const onChangeTab = (path) => {
      router.push(path);
    };
    return {
      menus,
      active,
      onChangeTab
    };
  }
};
</script>
<style lang="scss" scoped></style>
