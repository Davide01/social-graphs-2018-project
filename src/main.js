import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BoostrapVue from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BoostrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
