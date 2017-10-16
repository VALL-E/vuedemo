import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '../components/home/home.vue';
import setting from '../components/setting/setting.vue';
import user from '../components/user/user.vue';
import shopCar from '../components/shopCar/shopCar.vue';
import newslist from '../components/movies/movieslist.vue';
import photolist from '../components/photo/photolist.vue';
import goodslist from '../components/goods/goodslist.vue';
import feedback from '../components/feedback/feedback.vue';
import video from '../components/video/videolist.vue';
import callme from '../components/callme/callme.vue';
import moviesinfo from '../components/movies/moviesinfo.vue';
import photoinfo from '../components/photo/photoinfo.vue';
import goodsinfo from '../components/goods/goodsinfo.vue';
import goodsdesc from '../components/goods/goodsdesc.vue';
import goodscomment from '../components/goods/goodscomment.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    // 默认跳转设置   一般是 404 页面或者重定向到首页
    {
      path:'/',  // 默认跳转到首页
      redirect: '/home'
    },
    {
      path:'*',  // 对于不存在的页面，可以跳转到首页，也可以是写个 404 页面
      redirect:'/home'
    },
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
      path: '/movies/movieslist',
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
      path:'/goods/goodsinfo/:id',
      component:goodsinfo
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
    },
    {
      path:'/movies/moviesinfo/:id',
      component:moviesinfo
    },
    {
      path:'/photo/photoinfo/:id',
      component:photoinfo
    },
    {
      path:'/goods/goodscomment',
      component:goodscomment
    },
    {
      path:'/goods/goodsdesc/:id',
      component:goodsdesc
    }
  ]
})
