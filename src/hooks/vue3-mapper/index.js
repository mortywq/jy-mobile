import useMapper from "./hooks/useMapper";
import { mapState, mapGetters, createNamespacedHelpers } from "vuex";
/*
 * moduleName 模块名称  第一个参数
 * storeStateParams  和传入mapState的参数一样 第二个参数
 */
export function useMapStateHook(...args) {
  let modulFn = mapState;
  switch (args.length) {
    case 1:
      return useMapper(args[0], modulFn);
    case 2:
      modulFn = createNamespacedHelpers(args[0]).mapState;
      return useMapper(args[1], modulFn);
  }
}

export function useMapGettersHook(...args) {
  let modulFn = mapGetters;
  switch (args.length) {
    case 1:
      return useMapper(args[0], modulFn);
    case 2:
      modulFn = createNamespacedHelpers(args[0]).mapGetters;
      return useMapper(args[1], modulFn);
  }
}
