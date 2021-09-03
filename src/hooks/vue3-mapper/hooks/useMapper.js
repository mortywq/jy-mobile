import { useStore } from "vuex";
import { computed } from "vue";
/*
 * storeStateParams  和传入mapState的参数一样
 * mapperFN 传入什么方法来解析state或者getters
 */
export default function (storeStateParams, mapperFN) {
  const store = useStore();
  const storeStateFns = mapperFN(storeStateParams);
  const storeState = {};
  Object.keys(storeStateFns).forEach((key) => {
    const fn = storeStateFns[key].bind({ $store: store });
    storeState[key] = computed(fn);
  });

  return storeState;
}
