// TODO: Nested Views

// Use Vue-Router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import _ from 'lodash'

const routes = []

// Load Layouts
const layoutFiles = require.context('layouts', false, /\.vue$/)
const layouts = _.map(layoutFiles.keys(), key => {
  let name = _.kebabCase(key.replace(/(\.\/|\.vue)/g, ''))
  return {
    name: 'layout-' + name,
    path: '/layout-' + name,
    component: layoutFiles(key),
    children: []
  }
})

// Load Views
const viewFiles = require.context('views', true, /\.vue$/)
viewFiles.keys().forEach(key => {
  let view = viewFiles(key)
  let name = key.replace(/(\.\/|\.vue)/g, '')
  let options = _.merge({
    layout: 'default',
    path: '/' + _.kebabCase(name),
    params: ''
  }, view.routerOptions)
  let route = {
    name,
    path: options.path + options.params,
    component: view
  }
  let layout = layouts.find(l => l.name === 'layout-' + options.layout)
  if (layout) {
    layout.children.push(route)
  } else {
    routes.push(route)
  }
})

for (let layout of layouts) routes.push(layout)

console.log('Routes:', routes)

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
