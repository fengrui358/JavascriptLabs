import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

import rootStoreTypes from '@/constants/common/rootStoreTypes'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules,
  state: {
    name: '',
    count: 0
  },
  mutations: {
    [rootStoreTypes.CHANGE_NAME](state, name) {
      state.name = name
    }
  },
  getters: {
    info: function(state){
      return `name--${state.name}  count--${state.count}`
    }
  }
})

// console.log(store)
export default store

// reset all store
// from, https://forum.vuejs.org/t/how-to-completely-reset-the-vuex-store/13611/2
const initialStateCopy = JSON.parse(JSON.stringify(store.state))

export function resetState() {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
}