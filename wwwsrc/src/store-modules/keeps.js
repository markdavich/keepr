import Axios from 'axios';

const CONTROLLER_ROUTE = 'api/keeps';

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:5001/"
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
    async createKeep({commit}, keep)
    {
      try {
        debugger;
        let endPoint = ``;
        let axiosResponse = await api.post(endPoint, keep);
        if (axiosResponse) {
          commit("createKeep", axiosResponse.data);
        }
      } catch (error) {
        console.error("store-modules > keeps.js > actions > createKeep()")
      }
    },
    async getAllKeeps({commit}) {
      try {
        debugger;
        let endPoint = ``;
        let axiosResponse = await api.get(endPoint);
        if (axiosResponse) {
          commit("getAllKeeps", axiosResponse.data);
        }
      } catch (error) {
        console.error("store-modules > keeps.js > actions > getAllKeeps()")
      }
    }
  }
}