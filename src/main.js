// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import axios from 'axios';
// Vue.prototype.$http = axios;
import vueResource from 'vue-resource';
Vue.use(vueResource);
import mint from 'mint-ui';
Vue.use(mint);
import 'mint-ui/lib/style.min.css';
import '../static/mui/css/mui.min.css';
// 初始化的样式
import '../static/base.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
