import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 主页面
      path: '/',
      name: 'Home',
      component: resolve => require(['../components/Home.vue'], resolve)
    },
    {
      path: '/view/table',
      name: 'Home',
      component: resolve => require(['../view/table/Table.vue'], resolve)
    }
  ]
})
