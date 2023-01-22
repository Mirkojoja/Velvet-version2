import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/galerija",
    name: "Galerija",
    component: () => import("../views/Gallery/Gallery.vue"),
  },

  {
    path: "/galerija/enterijer",
    name: "Enterijer",
    component: () => import("../views/Gallery/Interior.vue"),
  },
  {
    path: "/galerija/hrana",
    name: "Hrana",
    component: () => import("../views/Gallery/Food.vue"),
  },
  {
    path: "/jelovnik",
    name: "jelovnik",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/karta-pica",
    name: "karta-pica",
    component: () => import("../views/CocktailMenu.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  hash: false,
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { savedPosition, behavior: "smooth" };
    }
    if (to.hash) {
      return {
        el: to.hash + 50,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0, behavior: "smooth" };
    }
  },
});

export default router;
