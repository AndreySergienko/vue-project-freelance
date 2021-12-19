export default {
  state() {
    return {
      types: [
        {
          type: 'all',
          text: 'Все'
        },
        {
          type: 'active',
          text: 'Активный'
        },
        {
          type: 'done',
          text: 'Выполнен'
        },
        {
          type: 'cancelled',
          text: 'Отменён'
        },
        {
          type: 'pending',
          text: 'Выполняется'
        }
      ]
    }
  },
  getters: {
    types(state) {
      return state.types
    }
  }
}
