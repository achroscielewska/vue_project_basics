import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const namespaced = {
  namespaced: true,
};

const state = {
  conuter: 0
}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
