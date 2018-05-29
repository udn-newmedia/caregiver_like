// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Pong from './Pong.vue'
Vue.config.productionTip = false
import '../static/UdnFontSize.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Pong },
  template: '<Pong/>'
})
