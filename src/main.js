import Vue from "vue";
import App from "./App.vue";
import {
  BootstrapVue,
  IconsPlugin
} from "bootstrap-vue";
import VueRouter from "vue-router";
import VueToastr from "vue-toastr";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Home from "@/components/pages/Home";
import Admin from "@/components/pages/Admin";
import Login from "@/components/pages/Login";
import CreateAccount from "@/components/pages/CreateAccount";

import imgHome from "@/assets/img/112.jpg";
import HeaderW from "@/layouts/HeaderWhite.vue"
import HeaderB from "@/layouts/HeaderBlack.vue"

Vue.component('HeaderW-layout', HeaderW);
Vue.component('HeaderB-layout', HeaderB);


import "./assets/custom.scss";
import i18n from './i18n/i18n'
import {
  auth
} from "@/firebase";


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueToastr, {});

Vue.config.productionTip = false;

const routes = [{
    path: "/",
    component: Home,
    meta: {
      imageBg: imgHome,
      layout: "HeaderW"
    }
  },
  {
    path: "/admin",
    component: Admin,
    meta: {
      needAuth: true,
      layout: "HeaderB"
    }

  },
  {
    path: "/login",
    component: Login,
    meta: {
      layout: "HeaderB"
    }
  },
  {
    path: "/create-account",
    component: CreateAccount,
    meta: {
      layout: "HeaderB"
    }
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


router.afterEach(to => {
  if (to.meta && to.meta.imageBg) {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top";
    document.body.style.backgroundSize = "3000px 2131px ",
      document.body.style.backgroundImage = `url(${to.meta.imageBg})`;
  } else {
    document.body.style.backgroundRepeat = "";
    document.body.style.backgroundPosition = "";
    document.body.style.backgroundImage = "";
  }
});

new Vue({
  render: h => h(App),
  i18n,
  router,
  mounted() {
    this.$toastr.defaultPosition = "toast-top-right";
  }
}).$mount("#app");