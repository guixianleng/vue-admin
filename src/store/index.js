import api from '../api/index'
import Vuex from 'vuex'
import vue from 'vue'
import login from './modules/login'

vue.use(Vuex)

const state = {
  table_base_list: []
}

const getters = {
  table_base_list: state => state.table_base_list
}

const actions = {
  table_base_list ({commit, state}, params) {
    api.baseTable(params).then((json) => {
      commit('TABLE_BASE_LIST', json.data)
    }).catch((ERR) => {
      return false
    })
  }
}

const mutations = {
  TABLE_BASE_LIST (state, params) {
    state.table_base_list = params
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    login
  }
})

export default store
