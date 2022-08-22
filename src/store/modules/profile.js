import { mutationTypes } from "../types/mutations"

export const profile = {
    state(){
      return {
        username:"fernando-altamirano7"

      }
    },
    getters:{
      [mutationTypes.update_username]: (state) => {
        return state
      }
    },
    mutations:{},
    
  }