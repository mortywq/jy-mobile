import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入样式初始化
import "normalize.css";
import "@/utils/rem";

//引入第三方vantui库按需加载
import registerUi from "@/vdenor/registered-ui";

createApp(App).use(registerUi).use(store).use(router).mount("#app");
