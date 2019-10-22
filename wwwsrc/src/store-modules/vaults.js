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
    async createVault({ commit }, payload) {
      let vault = payload.vault;
      let keep = payload.keep;
      try {
        let axiosResponse = await api.post("", vault);
        if (axiosResponse) {
          commit("createVault", axiosResponse.data);
          if (keep) {
            alert("store-modules > vaults.js > actions > createVault(): ADD KEEP TO VAULT NOT IMPLEMENTED YET");
          }
        }
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > createVault()")
        console.error(error)
      }
    },

    async getLoggedInUserVaults({ commit }) {
      try {
        let endPoint = `user`;
        let axiosResponse = await api.get(endPoint);
        let vaults = axiosResponse.data;
        commit("setVaults", vaults);
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > getVaultsByUserId()");
        console.error(error);
      }
    },

    clearCurrentVault({ commit }) {
      commit("setCurrentVault", null);
    },

    async addKeepToVault({commit, dispatch}, vaultKeepMap) {
      try {
        dispatch;
        let endPoint = `${vaultKeepMap.vault_id}/keeps`;
        await api.post(endPoint, vaultKeepMap);
        dispatch("getAllKeeps");
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > addKeepToVault()");
        console.error(error);  
      }
    }
  }

}