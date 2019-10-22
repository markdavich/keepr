export default {
  state: {
    userKeeps: [],
    userKeepsColumns: {
      // 0: [ Array of keeps ],
      // 1: [ Array of keeps ]
    }
  },
  mutations: {

  },
  actions: {
    setUserKeepsColumns({ commit, dispatch, state, rootState }) {
      dispatch("setUserViewColumnCount");
      let columnCount = rootState.Settings.display.columnCount;
      let keeps = state.keeps;
      let keepsColumns = {};

      // Create all the keys with a cooresponding array
      for (let i = 0; i < columnCount; i++) {
        keepsColumns[i] = []
      };

      // Add all the keeps to the columns
      for (let i = 0; i < keeps.length; i++) {
        let key = i % columnCount;
        keepsColumns[key].push(keeps[i]);
      };

      commit("setKeepsColumns", keepsColumns);
    },

    // Pass 'rootState' in order to get access to other store modules
    // EXAMPLE: rootState.ModuleName.statePropertyName
    // setUserKeeps({commit, rootState}) {
    //   let userId = rootState.Auth.user.user_id;
    //   let userKeeps = 
    // }
  }

}