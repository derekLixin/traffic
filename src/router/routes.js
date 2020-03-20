import Home from '../pages/Home.vue'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/', // 项目根路径
    redirect: '/home'
  }
]
