import { createStore } from 'vuex'
import tasksModule from './modules/TasksStore'
import typesModule from './modules/TypesStateTask'

export default createStore({
  state() {
    return {
      isLoading: false,
      isAlert: null
    }
  },
  getters: {
    getLoading(state) {
      return state.isLoading
    },
    getAlert(state) {
      return state.isAlert
    }
  },
  mutations: {
    setIsLoading(state, payload) {
      return state.isLoading = payload
    },
    setIsAlert(state, payload) {
      return state.isAlert = payload

    },
    closeIsAlert(state) {
      return state.isAlert = null
    }
  },
  modules: {
    tasks: tasksModule,
    types: typesModule
  }
})
