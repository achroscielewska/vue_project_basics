const increment = ({ commit })  => {
  commit('simpleIncrement');
};

const decrement = ({ commit })  => {
  commit('decrement');
};

const asyncIncrement = ({ commit }, payload) => {
  setTimeout(() => { commit('increment', payload); }, 1000)
};

const asyncDecrement = context => {
  setTimeout(() => { context.commit('decrement'); }, 1000)
};
