import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './vuex/store'

// Vue.prototype.$ajax = ajax




/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: {
    App
  },
  template: '<App/>' */
  // render: createElement => createElement(App)  // <App/>
  render: h => h(App),  // <App/>
  router, // 配置路由器
  store, // 配置vuex
})
