// 存储信息的时候
// 1.约定信息的key是什么
// 2.存储信息的值是什么  用户对象 字符串格式json
// const   约定key的值
const KEY = 'hm-toutiao-77-user'

export default {
  setUser (user) {
    // 存储用户信息sessionStorage
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  getUser () {
    // 获取用户信息从sessionStorage
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  clearUser () {
    // 设置清除信息
    window.sessionStorage.removeItem(KEY)
  }
}
