import Vue from "vue";
import App from "./App.vue";
import {
  BootstrapVue,
  IconsPlugin
} from "bootstrap-vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Home from "@/components/pages/Home";
import Admin from "@/components/pages/Admin";
import Login from "@/components/pages/Login";
import CreateAccount from "@/components/pages/CreateAccount";

import "./assets/custom.scss";

import {
  auth
} from "@/firebase";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/admin",
    component: Admin,
    meta: {
      needAuth: true
    }
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/create-account",
    component: CreateAccount
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = auth.currentUser;
  const isProtected = to.matched.some(route => route.meta.needAuth);

  if (!isAuthenticated && isProtected) {
    next("/login");
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");