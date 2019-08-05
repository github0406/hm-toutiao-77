// 配置一个axios,导出一个axios
import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 进行配置
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// 只会执行一次
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }

// 每次在请求之前，获取token信息 ，追加在headers中
// 请求拦截器：在每次请求前做某些事
axios.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${store.getUser().token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应器拦截：每次次响应后做某一些事情
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})
// 进行导出
export default axios
