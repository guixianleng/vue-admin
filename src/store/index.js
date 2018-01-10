import api from '../api/index'
import Vuex from 'vuex'
import vue from 'vue'
import login from './modules/login'

vue.use(Vuex)

const state = {
  get_date: {}
}

const getters = {
  get_date_obj: state => state.get_date
}

const actions = {
  get_date_obj ({commit, state}, params) {
    api.mineBaseMsgApi(params).then((json) => {
      commit('GET_DATE_OBJ', json.data)
    }).catch((ERR) => {
      return false
    })
  }
}

const mutations = {
  GET_DATE_OBJ (state, params) {
    state.get_date = params
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
