import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Network from "./views/NetworkAnalysis.vue";
import Sentiment from "./views/SentimentAnalysis.vue";
import Characters from "./views/Characters.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/network",
      name: "Network",
      component: Network
    },
    {
      path: "/sentiment",
      name: "Sentiment",
      component: Sentiment
    },
    {
      path: "/characters",
      name: "Characters",
      component: Characters
    }
  ]
});
