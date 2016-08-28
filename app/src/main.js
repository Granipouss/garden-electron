import Vue from 'vue'
// import Router from 'vue-router'

import App from './App'
// import routes from './routes'

// Vue.use(Router)
Vue.config.debug = true

import router from 'lib/router'

// const router = new Router({
//   scrollBehavior: () => ({ y: 0 }),
//   routes
// })

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
