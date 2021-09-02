import { Button, Tabbar, TabbarItem, Toast, NavBar, Icon } from "vant";

const vdenorNames = [Button, Tabbar, TabbarItem, Toast, NavBar, Icon];

export default function (app) {
  vdenorNames.forEach((item) => {
    app.use(item);
  });
}
