import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Network from "./views/NetworkAnalysis.vue";
import Sentiment from "./views/SentimentAnalysis.vue";
import Characters from "./views/Characters.vue";
import Seasons from "./views/Seasons.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
    },
    {
      path: "/seasons",
      name: "Seasons",
      component: Seasons
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
