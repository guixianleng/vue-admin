// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { powerRouter } from './router' // eslint-disable-line
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import * as filter from './filter' // 全局vue filter
import 'styles/index.scss'
import './mock/index' // 引入mockjs
import './directives/directive'
import '../static/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 全局filter
Object.keys(filter.default).forEach(key => {
  Vue.filter(key, filter.default[key])
})

router.beforeEach((to, from, next) => {
  if (store.getters.role) { // 判断role 是否存在
    if (store.getters.newrouter.length !== 0) {
      next() // resolve 钩子
    } else {
      let newrouter
      if (store.getters.role === 'A') { // 判断权限
        newrouter = powerRouter
      } else {
        let newchildren = powerRouter[0].children.filter(route => {
          if (route.meta) {
            if (route.meta.role === store.getters.role) {
              return true
            } return false
          } else {
            return true
          }
        })
        newrouter = powerRouter
        newrouter[0].children = newchildren
      }
      router.addRoutes(newrouter) // 添加动态路由
      store.dispatch('Roles', newrouter).then(res => {
        next({ ...to })
      }).catch(() => {
      })
    }
  } else {
    if (['/login'].indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
