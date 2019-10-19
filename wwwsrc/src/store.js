import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Store Modules
import Auth from './store-modules/auth'

export default new Vuex.Store({
  modules: {
    Auth
  }
})
