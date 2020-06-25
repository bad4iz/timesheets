import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import * as modules from './modules';

import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,

  modules,

  strict: process.env.NODE_ENV !== 'production',
});

if (module.hot) {
  module.hot.accept(
    ['./getters', './actions', './mutations', './state', './modules'],
    () => {
      store.hotUpdate({
        getters: import('./getters'),
        actions: import('./actions'),
        mutations: import('./mutations'),
        state: import('./state'),
        modules: import('./modules'),
      });
    }
  );
}

export default store;
