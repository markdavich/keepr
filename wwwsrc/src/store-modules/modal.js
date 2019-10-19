export default {
  state: {
    modalUsage: 0,
    showing: false
  },

  mutations: {
    showModal(state, modalUsage) {
      state.showing = true;
      state.modalUsage = modalUsage;
    },

    closeModal(state) {
      state.modalUsage = 0;
      state.showing = false;
    }
  },

  actions: {
    showModal({commit}, modalUsage) {
      commit("showModal", modalUsage);
    },

    closeModal({commit}) {
      commit("closeModal");
    }
  }
}