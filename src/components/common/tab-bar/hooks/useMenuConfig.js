export default [
  {
    name: "关于", //对应你底部tabbar显示的name
    path: "/about", //对应你的路由页配置的路径
    icon: "friends-o", //对应vant里的icon的类名
    slotUrl: {
      active: "https://img.yzcdn.cn/vant/user-active.png",
      inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
    } //如果需要用自己的图片就传这个属性不用就不穿
  },
  {
    name: "home",
    path: "/home",
    icon: "friends-o" //对应vant里的icon的类名
  },
  {
    name: "xxx",
    path: "/about"
  },
  {
    name: "xxxx",
    path: "/about"
  }
];
