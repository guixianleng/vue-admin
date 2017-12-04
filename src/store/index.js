import api from '../api/index'
import Vuex from 'vuex'
import vue from 'vue'

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
      // console.log(arguments)
      // console.log(json.data)
      commit('GET_DATE_OBJ', {
        params: params,
        data: json.data
      })
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
  mutations
})

export default store
