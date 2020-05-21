export default {
  increment: ({ commit }) => {
    commit('simpleIncrement');
  },
  decrement: ({ commit }) => {
    commit('decrement');
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => { commit('increment', payload); }, 1000)
  },
  asyncDecrement: context => {
    setTimeout(() => { context.commit('decrement'); }, 1000)
  }
}

