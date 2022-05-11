import { createStore } from 'vuex'

export default createStore({
  state: {
    tmp: {}
  },
  mutations: {
    TMP(state, payload) {
      state.tmp = payload
    }
  },
  actions: {
  },
  getters: {
    tmp(state){
      return state.tmp
    }
  },
  modules: {
  },
})
