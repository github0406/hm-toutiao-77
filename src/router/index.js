import VueRouter from 'vue-router'// 这个是引入路由的组件，引入的是package.json中的引入的是vue-router 而VueRouter是自己起的别名
import Vue from 'vue'// 这个是引入vue的组件
import Login from '@/views/login'// 这个是login页面
import Home from '@/views/home'
import WelCome from '@/views/welcome'
import Article from '@/views/article'
import NotFound from '@/views/404'
import store from '@/store'

Vue.use(VueRouter)
const router = new VueRouter({ // 这个是创建一个路由对象把这个对象赋值给router
  // 路由规则配置
  routes: [
    {
      path: '/login',
      // name 可写可不写
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children: [ // 他是二级目录所以要用children
        {
          path: '/',
          name: 'welcome',
          component: WelCome
        },
        {
          path: '/article',
          name: 'article',
          component: Article
        }
      ]
    },
    // 处理404
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
// 前置导航守卫
router.beforeEach((to, from, next) => {
  // 判断是不是登录路由
  // if (to.path === '/login') return next()
  // 判断是否登录
  // if (!store.getUser().token) return next('/login')
  // 以上结果都不存在，执行第三步,放行
  // next()

  // 优化代码
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})
export default router // 这个是把路由导出，在面，mian.js中引用
