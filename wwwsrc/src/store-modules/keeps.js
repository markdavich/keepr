import Axios from 'axios';

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
    keeps: []
  },
  mutations: {
    createKeep(state, keep) {
      state.keep.push(keep);
    },
    getAllKeeps(state, keeps) {
      state.keeps = keeps;
    }
  },
  actions: {
    async createKeep({ commit }, keep) {
      try {
        let endPoint = ``;
        let axiosResponse = await api.post("", keep);
        if (axiosResponse) {
          commit("createKeep", axiosResponse.data);
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > createKeep()")
        console.error(error)
      }
    },
    async getAllKeeps({ commit }) {
      try {
        let endPoint = ``;
        let axiosResponse = await api.get("");
        if (axiosResponse) {
          commit("getAllKeeps", axiosResponse.data);
        }
      } catch (error) {
        console.warn("store-modules > keeps.js > actions > getAllKeeps()")
        console.error(error)
      }
    }
  }
}