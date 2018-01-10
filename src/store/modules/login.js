import { loginByUserInfo } from '../../api/login'

const login = {
  state: {
    username: localStorage.getItem('USERNAME'),
    role: localStorage.getItem('ROLE'),
    newrouter: [],
    psw: localStorage.getItem('PSW')
  },
  getters: {
    username: state => state.username,
    role: state => state.role,
    newrouter: state => state.newrouter,
    psw: state => state.psw
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_NEWROUER: (state, newrouter) => {
      state.newrouter = newrouter
    },
    SET_PSW: (state, psw) => {
      state.psw = psw
    }
  },
  actions: {
    Logins ({ commit }, info) {
      return new Promise((resolve, reject) => {
        let data = {}
        loginByUserInfo.map(function (item) { // 获取所以用户信息
          if (info.username === item.username && info.psw === item.psw) {
            commit('SET_USERNAME', item.username)  // 将username和role进行存储
            localStorage.setItem('USERNAME', item.username) // 存入 session
            commit('SET_ROLE', item.role)
            localStorage.setItem('ROLE', item.role)
            commit('SET_PSW', item.psw)
            localStorage.setItem('PSW', item.psw)
            data = {username: item.username, psw: item.psw}
          } else {
            return data
          }
        })
        resolve(data)
      }).catch(() => {
        // reject(error)
      })
    },
    Roles ({ commit }, newrouter) {
      return new Promise((resolve, reject) => {
        commit('SET_NEWROUER', newrouter) // 存储最新路由
        resolve(newrouter)
      }).catch(() => {
        // reject(error)
      })
    },
    Logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_USERNAME', '')
        commit('SET_ROLE', '')
        commit('SET_NEWROUER', [])
        commit('SET_PSW', '')
        location.reload()
        localStorage.removeItem('USERNAME')
        localStorage.removeItem('ROLE')
        localStorage.removeItem('PSW')
        resolve()
      }).catch(() => {
        // reject(error)
      })
    }
  }
}

export default login
