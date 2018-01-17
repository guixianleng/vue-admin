const pattern = {
  email: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
  phone: /^1[3|4|5|7|8][0-9]{9}$/,
  mobile: /^1[3|4|5|7|8][0-9]{9}$/,
  password: /^[a-zA-Z0-9_]+$/,
  nickname: /^[A-Za-z0-9_、.\u4e00-\u9fa5]{4,20}$/,
  ip: /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/,
  username: /^[\u4E00-\u9FA5A-Za-z]+$/,
  idNo: /^[A-Za-z0-9]+$/
}

export default {
  pattern,
  rule: {
    email: {
      pattern: pattern.email,
      message: '邮箱格式不正确'
    },
    phone: {
      pattern: pattern.phone,
      message: '电话号码格式不正确'
    },
    mobile: {
      pattern: pattern.mobile,
      message: '手机号码格式不正确'
    },
    password: {
      pattern: pattern.password,
      message: '密码格式不正确'
    },
    nickname: {
      pattern: pattern.nickname,
      message: '昵称格式不正确'
    },
    ip: {
      pattern: pattern.ip,
      message: '身份证号不合法'
    },
    username: {
      pattern: pattern.username,
      message: '姓名格式不正确'
    },
    isEmail: {
      validator (rule, value, callback) {
        if (value) {
          if (pattern.email.test(value)) {
            callback()
          }
          callback(new Error('请输入正确的邮箱!'))
        }
      }
    },
    isPassword: {
      validator (rule, value, callback) {
        if (value) {
          if (pattern.password.test(value)) {
            callback()
          }
          callback(new Error('请输入格式正确的密码!'))
        }
      }
    },
    isPhone: {
      validator (rule, value, callback) {
        if (value) {
          if (pattern.phone.test(value)) {
            callback()
          }
          callback(new Error('请输入正确的手机号!'))
        }
      }
    },
    userName: {
      validator (rule, value, callback) {
        if (value) {
          if (pattern.username.test(value)) {
            callback()
          }
          callback(new Error('该姓名含非法字符，请使用中英文!'))
        } else {
          callback()
        }
      }
    },
    isIp: {
      validator (rule, value, callback) {
        if (value) {
          if (this.form.idType === 1) {
            if (value) {
              if (pattern.ip.test(value)) {
                callback()
              }
              callback(new Error('不是真实的证件号码，请重新输入'))
            }
          } else {
            if (value) {
              if (pattern.idNo.test(value)) {
                callback()
              }
              callback(new Error('证件号码错误，请重新输入'))
            }
          }
        } else {
          callback()
        }
      }
    }
  }
}
