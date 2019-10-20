import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Store Modules
import Auth from './store-modules/auth.js';
import Keeps from './store-modules/keeps.js';
import Modal from './store-modules/modal.js';

export default new Vuex.Store({
  modules: {
    Auth,
    Keeps,
    Modal
  }
})
