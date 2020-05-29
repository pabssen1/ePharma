import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

export const app = new Vue({
  data: { loading: router.loading },
  router,
  store,
  render: h => h(App)
}).$mount("#app");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
router.afterEach(() => {
  setTimeout(() => (app.loading = false), getRandomArbitrary(800, 1100));
  //next();
});
