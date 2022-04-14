// 入口文件
// import Msg from './msg/myMsg.vue'
// 动态引入 一次引入所有组件 require.context()它是vue-cli自带的东西 webpack的api
// 所有的import 都可以使用require.context引入 而且是动态引入
// 1.目标文件夹2.是否匹配子文件夹3.正则匹配
const requireComment = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) {
    return
  }
  // eslint-disable-next-line no-unused-expressions
  install.installed
  console.log(requireComment.keys())
  requireComment.keys().forEach(fileName => {
  //  拿到当前的组件
    console.log(fileName)
    const config = requireComment(fileName)
    // 组件名
    const componentName = config.default.name
    Vue.component(componentName, config.default || config)
  })
  // 全局自定义指令
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()
    }
  })
}
// 确保是正常环境 node没有window
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
