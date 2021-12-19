export default {
  state() {
    return {
      tasks: [],
      filterTasks: null,
      activeTask: 0
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    filterTasks(state) {
      return state.filterTasks
    },
    mathActiveTask(state) {
      let num = 0
      state.tasks.map((obj) => obj.status === 'active' ? num++ : num)
      return state.activeTask = num
    }
  },
  mutations: {
    createNewTask(state, payload) {
      state.tasks.push(payload)
    },
    renderAllTasks(state, payload) {
      state.tasks.push(...payload)
    },
    changeStateTask(state, payload) {
      return state.tasks.find(task => task.id === payload.id).status = payload.status
    },
    removeTask(state, payload) {
      const idx = state.tasks.findIndex(task => task.id === payload)
      return state.tasks.splice(idx, 1)
    },
    getFilterTasks(state, payload) {
      if (payload.length === 0) {
        return state.filterTasks = []
      }
      state.filterTasks = []
      return state.filterTasks.push(...payload)
    },
    deleteFilterTasks(state) {
      return state.filterTasks = null
    }
  }
}
