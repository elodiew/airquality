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

import "./assets/custom.scss";

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
    component: Admin
  },
  {
    path: "/login",
    component: Login
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");