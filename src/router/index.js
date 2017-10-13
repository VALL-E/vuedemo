import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home/home.vue';
import setting from '../components/setting/setting.vue';
import user from '../components/user/user.vue';
import shopCar from '../components/shopCar/shopCar.vue';
import newslist from '../components/news/newslist.vue';
import photolist from '../components/photo/photolist.vue';
import goodslist from '../components/goods/goodslist.vue';
import feedback from '../components/feedback/feedback.vue';
import video from '../components/video/videolist.vue';
import callme from '../components/callme/callme.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'mui-active',
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
    },
    {
      path: '/news/newslist',
      component: newslist
    },
    {
      path: '/photo/photolist',
      component: photolist
    },
    {
      path: '/goods/goodslist',
      component: goodslist
    },
    {
      path: '/feedback/feedback',
      component: feedback
    },
    {
      path: '/video/videolist',
      component: video
    },
    {
      path: '/callme/callme',
      component: callme
    }
  ]
})
