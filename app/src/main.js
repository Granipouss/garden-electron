import Vue from 'vue'
import App from './App'
Vue.config.debug = true

import router from 'lib/router'
import store from 'lib/store'
import 'lib/database'

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
