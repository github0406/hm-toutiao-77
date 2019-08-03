import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
Vue.use(VueRouter)
const router = new VueRouter({
  // 路由规则配置
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home
    }
  ]
})

export default router
