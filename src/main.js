// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import * as filter from './filter' // 全局vue filter
import 'styles/index.scss'
import './mock/index' // 引入mockjs

Vue.config.productionTip = false
Vue.use(ElementUI)

// global filter.
Object.keys(filter.default).forEach(key => {
  Vue.filter(key, filter.default[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
