import Vue from 'vue'
import App from './App'
Vue.config.debug = true

import router from 'lib/router'
import store from 'lib/store'
import db from 'lib/database'

db.init(
  () => {
    console.log('Database loaded')

    /* eslint-disable no-new */
    new Vue({
      router,
      store,
      ...App
    }).$mount('#app')
  }
)
