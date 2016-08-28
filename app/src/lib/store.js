// Use Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { merge, mapValues } from 'lodash'

const actions = {}
const getters = {}
const modules = {}

// Load Modules
const files = require.context('store', true, /\.js$/)
for (let key of files.keys()) {
  let mod = files(key)
  let name = key.replace(/(\.\/|\.js)/g, '')
  modules[name] = {
    state: mod.state, mutations: mod.mutations
  }
  if (mod.actions) merge(actions, mod.actions)
  if (mod.getters) merge(getters, mapValues(mod.getters, getter => state => getter(state[name])))
}

export default new Vuex.Store({
  actions,
  getters,
  modules,
  strict: true
})
