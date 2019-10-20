export default {
  state: {
    modalUsage: 0,
    show: false
  },

  mutations: {
    showModal(state, modalUsage) {
      state.show = true;
      state.modalUsage = modalUsage;
    },

    closeModal(state) {
      state.modalUsage = 0;
      state.show = false;
    }
  },

  actions: {
    showModal({ commit }, modalUsage) {
      commit("showModal", modalUsage);
    },

    closeModal({ commit }) {
      commit("closeModal");
    }
  }
}