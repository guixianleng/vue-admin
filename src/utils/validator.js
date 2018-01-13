const validator = {
  password (rule, value, callback) {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      callback()
    }
  },
  username (rule, value, callback) {
    if (value === '') {
      callback(new Error('请输入用户名'))
    } else {
      callback()
    }
  }
}

export default validator
