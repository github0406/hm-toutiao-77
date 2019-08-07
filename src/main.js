import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'// 这个是引入模板组件element-ui 而ElementUI
import 'element-ui/lib/theme-chalk/index.css'// 这个是element-ui中css样式的位置
import '@/style/index.less'
import router from '@/router'// 引入路由

import axios from '@/api'// 引入axios 他是用来调用后台数据的接口的

import myCom from '@/components'
Vue.use(myCom)

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router, // 把引入的路由挂载到Vue对象中，不挂在，没有办法访问页面在网页中显示出来
  render: h => h(App)
}).$mount('#app')
