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
    currentUserVaults: []
  },
  mutations: {
    setVaults(state, currentUserVaults) {
      state.currentUserVaults = currentUserVaults;
    },
    setActiveVault(state, currentVault) {
      Vue.set(state, 'currentVault', currentVault);
      // state.currentVault = currentVault;
    },
    createVault(state, vault) {
      let vaults = [...state.currentUserVaults, vault];
      Vue.set(state, "currentUserVaults", vaults);
    }
  },

  actions: {
    // Pass 'rootState' in order to get access to other store modules
    // EXAMPLE: rootState.ModuleName.statePropertyName
    async createVault({ commit, rootState, dispatch }, payload) {
      let vault = payload.vault;
      let keep = payload.keep;
      try {
        let axiosResponse = await api.post("", vault);
        if (axiosResponse) {
          let vault_id = axiosResponse.data;
          vault.vault_id = vault_id;
          commit("createVault", vault);
          if (keep) {
            let vaultKeepMap = {
              vault_id: vault_id,
              keep_id: keep.keep_id,
              user_id: rootState.Auth.user.user_id
            };
            dispatch("addKeepToVault", vaultKeepMap);
          }
        }
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > createVault()")
        console.error(error)
      }
    },

    async getLoggedInUserVaults({ commit, state }) {
      try {
        let endPoint = `user`;
        let axiosResponse = await api.get(endPoint);
        let currentUserVaults = axiosResponse.data;

        commit("setVaults", currentUserVaults);

        if (state.currentVault) {
          let currentVault = state.currentUserVaults.find(vault => {
            return vault.vault_id == state.currentVault.vault_id
          })
          commit("setActiveVault", currentVault);
        } else {
          commit("setActiveVault", state.currentUserVaults[0]);
        }

      } catch (error) {
        console.warn("store-modules > vaults.js > actions > getVaultsByUserId()");
        console.error(error);
      }
    },

    clearCurrentVault({ commit }) {
      commit("setActiveVault", null);
    },

    async addKeepToVault({ commit, dispatch }, vaultKeepMap) {
      try {
        let endPoint = `${vaultKeepMap.vault_id}/keeps`;
        await api.post(endPoint, vaultKeepMap);
        dispatch("getAllKeeps");
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > addKeepToVault()");
        console.error(error);
      }
    },

    async addKeepToVaultFromVaultsView({ commit, dispatch }, vaultKeepMap) {
      try {
        let endPoint = `${vaultKeepMap.vault_id}/keeps`;
        await api.post(endPoint, vaultKeepMap);
      } catch (error) {
        console.warn("store-modules > vaults.js > actions > addKeepToVault()");
        console.error(error);
      }
    },

    async getVaultKeeps({ commit }, vaultId) {
      try {
        let endPoint = `${vaultId}/keeps`;
        let axiosResponse = await api.get(endPoint);
        if (axiosResponse) {
          commit("getAllKeeps", axiosResponse.data);
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > getAllKeeps()");
        console.error(error);
      }
    },

    async setActiveVault({ commit, dispatch }, vault) {
      try {
        let endPoint = `${vault.vault_id}/keeps`;
        let axiosResponse = await api.get(endPoint);
        if (axiosResponse) {
          commit("getAllKeeps", axiosResponse.data);
          commit("setActiveVault", vault);
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > getAllKeeps()");
        console.error(error);
      }
    }
  }
}