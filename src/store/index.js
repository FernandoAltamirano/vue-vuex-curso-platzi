import { createStore } from 'vuex'
import {profile} from './modules/profile'

const store = createStore({
  state(){
    return {
    }
  },
  getters: {
    firstname: (state,getters,rootState) => {
      console.log(rootState)
      return rootState.profile.username.split("-")[0] 
    }
  },
  mutations: {
    updateUsername: (state, username) => {
        state.username = username
    }
  },
  modules:{
    profile
  }
})

export default store