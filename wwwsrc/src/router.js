import Vue from 'vue'
import Router from 'vue-router'
import Store from './store.js'

// Import all "Views" here
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import KeepView from './views/KeepView.vue';
// @ts-ignore
import Login from './views/Login.vue'
// @ts-ignore
import UserView from './views/UserView.vue';

Vue.use(Router, Store)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        Store.dispatch("getLoggedInUserVaults");
        next();
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/keeps/:keepId',
      name: 'keep',
      component: KeepView,
      props: true,
      beforeEnter(to, from, next) {
        Store.dispatch("setActiveKeep", to.params.keepId);
        next();
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserView,
      props: true,
      beforeEnter(to, from, next) {
        Store.dispatch("getLoggedInUserVaults");
        next();
      }
    }
  ]
})
