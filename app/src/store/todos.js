// Initial state
export const state = {
  filter: 'all',
  tasks: [
    // {
    //   label: String,
    //   done: Boolean,
    //   id: Integer
    // }
  ]
}

// mutations
export const mutations = {
  addTodo (state, label) {
    state.tasks.push({
      label, done: false,
      id: state.tasks.length
    })
  },
  toggleTodo (state, { id, val }) { state.tasks.find(t => t.id === id).done = val },
  setFilter (state, filter) { state.filter = filter }
}

// actions
export const actions = {
  addTodo ({ commit }, label) { commit('addTodo', label) },
  toggleTodo ({ commit }, payload) { console.log(commit, payload); commit('toggleTodo', payload) },
  setFilter ({ commit }, value) { commit('setFilter', value) }
}

// getters
export const getters = {
  getTasks: state => {
    if (state.filter === 'all') {
      return state.tasks
    } else if (state.filter === 'done') {
      return state.tasks.filter(t => t.done)
    } else if (state.filter === 'todo') {
      return state.tasks.filter(t => !t.done)
    }
  },
  getFilter: state => state.filter
}
