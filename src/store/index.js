import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
        username:"fernando-altamirano7"
    }
  },
  getters: {
    firstname: (state) => state.username.split("-")[0] 
  },
  mutations: {
    updateUsername: (state, username) => {
        state.username = username
    }
  }
})

export default store