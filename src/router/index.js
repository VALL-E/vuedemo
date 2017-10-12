import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home/home.vue';
import setting from '../components/setting/setting.vue';
import user from '../components/user/user.vue';
import shopCar from '../components/shopCar/shopCar.vue';
Vue.use(Router);

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {
      path: '/home',
      component: home
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/shopCar',
      component: shopCar
    }
  ]
})
