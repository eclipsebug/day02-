// Vue是一个构造函数
import Vue from 'vue'

// @/ --->> src/
// .js .vue结尾可以省略

import App from '@/App'

// 创建一个vm实例
const vm = new Vue({
  // render：渲染的内容
  render: (h) => h(App)
})

// 挂载
// 底层通过document.querySelector("#app") 获取
vm.$mount('#app')