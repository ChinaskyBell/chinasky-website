import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'
import ContactUs from '../views/ContactUs'
import Software from '../views/Software'
import Wechat from '../views/Wechat'
import App from '../views/App'
import Mall from '../views/Mall'

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    // 首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 关于我们
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    // 联络我们
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    // 软件开发
    {
      path: '/Software',
      name: 'Software',
      component: Software
    },
    // 微信开发
    {
      path: '/Wechat',
      name: 'Wechat',
      component: Wechat
    },
    // APP开发
    {
      path: '/App',
      name: 'App',
      component: App
    },
    // 网上商城
    {
      path: '/Mall',
      name: 'Mall',
      component: Mall
    }
  ]
})
