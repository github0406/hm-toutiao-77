// 封装一个插件
// 注册所有的component下的组件为全局组件
import MyTest from '@/components/my-test'
import MyBread from '@/components/my-bread'

// vue插件 暴露一个对象 对象中有一个选项 install被调用
export default {

  install (Vue) {
    // 安装函数 当Vue.sue(使用插件) install被调用
    // vue 全局的vue对象
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyTest.name, MyTest)
  }
}
