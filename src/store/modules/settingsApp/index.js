import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import state from './state';

export const settingsApp = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};
