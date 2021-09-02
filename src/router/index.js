import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/about"
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于",
      showTabBar: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About")
  },
  {
    path: "/about-detail",
    name: "about-detail",
    meta: {
      title: "关于详情页",
      showTabBar: true, //控制要不要显示tabbar
      activaMenu: "/about" //控制详情页时候需要高亮的底部tabbar
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About/detail")
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "home",
      showTabBar: true
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home")
  },
  {
    path: "/home-detail",
    name: "home-detail",
    meta: {
      title: "home详情页",
      showTabBar: true, //控制要不要显示tabbar
      activaMenu: "/home" //控制详情页时候需要高亮的底部tabbar
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Home/detail")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
