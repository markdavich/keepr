export default {
  state: {
    modalUsage: 0,
    show: false,
    newValutKeep: null // This is an object {}
  },

  mutations: {
    showModal(state, modalUsage) {
      state.show = true;
      state.modalUsage = modalUsage;
    },

    closeModal(state) {
      state.modalUsage = 0;
      state.show = false;
    },

    showNewVaultForKeep(state, newValutKeep) {
      state.newValutKeep = newValutKeep;
    },

    closeNewValultForKeep(state) {
      state.newValutKeep = null;
    },
  },

  actions: {
    showModal({ commit }, modalUsage) {
      commit("showModal", modalUsage);
    },

    closeModal({ commit }) {
      commit("closeModal");
    },

    showNewVaultForKeep({ commit, dispatch }, payload) {
      let modalUsage = payload.modalUsage;
      let newValutKeep = payload.newValutKeep;

      commit("showNewVaultForKeep", newValutKeep);
      dispatch("showModal", modalUsage);
    },

    closeNewVaultForKeep({ commit, dispatch }) {
      commit("closeNewValultForKeep");
      dispatch("closeModal");
    }
  }
}