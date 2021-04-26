import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents, {
  swipeTolerance: 100,
});

import Login from "./pages/Login.vue";
import Game from "./pages/Game.vue";
import Setup from "./pages/Setup.vue";

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Login },
    { path: "/game", component: Game },
    { path: "/setup", component: Setup },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
