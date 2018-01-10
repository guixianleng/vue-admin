import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { // 登录页面
      path: '/login',
      name: 'Login',
      component: resolve => require(['../view/modules/login/index.vue'], resolve)
    }
  ]
})

export const powerRouter = [
  {
    path: '/',
    redirect: '/index',
    name: 'index',
    component: resolve => require(['../components/index.vue'], resolve),
    children: [
      { // 主页面
        path: '/index',
        name: 'index',
        component: resolve => require(['../components/index.vue'], resolve),
        meta: {role: 'B'}
      },
      {
        path: '/basetable',
        name: 'Table',
        component: resolve => require(['../view/modules/table/BaseTable.vue'], resolve),
        meta: {role: 'B'}
      }
    ]
  }
]
