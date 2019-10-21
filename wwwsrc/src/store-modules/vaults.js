import Vue from "vue";
import Axios from 'axios';

const CONTROLLER_ROUTE = 'api/vaults';

let base = window.location.host.includes("localhost:8080")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: base + CONTROLLER_ROUTE,
  timeout: 3000,
  withCredentials: true
});

export default {
  state: {
    currentVault: null, // This is an object {}
    vaults: []
  },
  mutations: {
    setVaults(state, vaults) {
      state.vaults = vaults;
    },
    setCurrentVault(state, currentVault) {
      state.currentVault = currentVault;
    },
    createVault(state, vault) {
      let vaults = [...state.vaults, vault];
      Vue.set(state, "vaults", vaults);
    }
  },

  actions: {
    async createVault({ commit }, vault) {
      try {
        let axiosResponse = await api.post("", vault);
        if (axiosResponse) {
          commit("createVault", axiosResponse.data);
        }
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > createVault()")
        console.error(error)
      }
    },

    async getLoggedInUserVaults({ commit }) {
      try {
        let endPoint = `user`;
        let vaults = await api.get(endPoint);
        commit("setVaults", vaults);
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > getVaultsByUserId()");
        console.error(error);
      }
    },

    clearCurrentVault({ commit }) {
      commit("setCurrentVault", null);
    }
  }

}