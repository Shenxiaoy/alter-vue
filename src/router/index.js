import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/list',
    component: resolve => require(['./page/list.vue'], resolve)
  }
]

export default new Router({
  routes
})