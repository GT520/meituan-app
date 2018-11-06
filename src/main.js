import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"

import MyGoods from './components/goods/MyGoods'
import MyRatings from "./components/ratings/MyRatings"
import MySeller from "./components/seller/MySeller"

Vue.config.productionTip = false;

Vue.use(VueRouter)

const routes = [
  {path: "/", redirect: "/goods"},
  {path: "/goods", component: MyGoods},
  {path: "/ratings", component: MyRatings},
  {path: "/seller", component: MySeller}
]

const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"active"
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
