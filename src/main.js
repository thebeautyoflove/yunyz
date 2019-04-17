import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
Vue.config.productionTip = true
import 'animate.css/animate.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
