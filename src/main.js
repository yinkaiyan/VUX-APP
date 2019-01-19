// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// import KVui from 'k-vui-y'

// import "k-vui-y/src/assets/icon/iconfont.css";

// Vue.use(KVui);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
