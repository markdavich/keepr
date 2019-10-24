import Axios from 'axios';
import Vue from 'vue';

const CONTROLLER_ROUTE = 'api/keeps';

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
    activeKeep: null, // This is a Keep object {}
    keeps: []
    // keepsColumns: {
    //   // 0: [ Array of keeps ],
    //   // 1: [ Array of keeps ]
    // }
  },
  mutations: {
    createKeep(state, keep) {
      state.keeps.push(keep);
    },
    getAllKeeps(state, keeps) {
      state.keeps = keeps;
    },
    // setKeepsColumns(state, keepsColumns) {
    //   Vue.set(state, "keepsColumns", keepsColumns);
    // },
    setActiveKeep(state, keep) {
      state.activeKeep = keep;

      state.keeps.splice(
        state.keeps.findIndex(keep => keep.keep_id === keep.keep_id), 1, keep
      );
    }
  },
  actions: {
    async createKeep({ commit, dispatch }, keep) {
      try {
        let endPoint = ``;
        let axiosResponse = await api.post("", keep);
        if (axiosResponse) {
          commit("createKeep", axiosResponse.data);
          // dispatch("setKeepsColumns");
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > createKeep()")
        console.error(error)
      }
    },
    async getAllKeeps({ commit, dispatch }) {
      try {
        let endPoint = ``;
        let axiosResponse = await api.get("");
        if (axiosResponse) {
          commit("getAllKeeps", axiosResponse.data);
          // dispatch("setKeepsColumns");
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > getAllKeeps()");
        console.error(error);
      }
    },

    // Pass 'rootState' in order to get access to other store modules
    // EXAMPLE: rootState.ModuleName.statePropertyName
    // setKeepsColumns({ commit, dispatch, state, rootState }) {
    //   dispatch("setColumnCount");
    //   let columnCount = rootState.Settings.display.columnCount;
    //   let keeps = state.keeps;
    //   let keepsColumns = {};

    //   // Create all the keys with a cooresponding array
    //   for (let i = 0; i < columnCount; i++) {
    //     keepsColumns[i] = []
    //   };

    //   // Add all the keeps to the columns
    //   for (let i = 0; i < keeps.length; i++) {
    //     let key = i % columnCount;
    //     keepsColumns[key].push(keeps[i]);
    //   };

    //   commit("setKeepsColumns", keepsColumns);
    // },

    async setActiveKeep({ commit, dispatch }, keepId) {
      try {
        let endPoint = `${keepId}/view`;
        let axiosResponse = await api.put(endPoint);
        if (axiosResponse) {
          let keep = axiosResponse.data;
          commit("setActiveKeep", keep);
          dispatch("setKeepsColumns");
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > setActiveKeep()");
        console.error(error);
      }
    }
  }
}