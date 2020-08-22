import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/home/Home";
import List from "../pages/list/List";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
  ]
});

export default router;
