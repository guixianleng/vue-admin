<template>
  <div class="login-container">
    <div class="login_box">
      <el-form :model="loginfrom" :rules="rules" ref="loginfrom" class="demo-ruleForm" label-width="60px">
        <el-form-item label="用户名" prop="username">
          <el-input type="username" v-model="loginfrom.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
          <el-input type="password" v-model="loginfrom.psw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submituUserInfo('loginfrom')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  component: {
    ...mapActions({
      Logins: 'Logins'
    })
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      loginfrom: {
        username: '',
        psw: ''
      },
      rules: {
        psw: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submituUserInfo (data) {
      this.$refs[data].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Logins', {username: this.loginfrom.username, psw: this.loginfrom.psw}).then(res => {
            this.$router.push({ path: '/' })
          }).catch((err) => {
            console.log(err)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #155263;
  width: 100%;
  height: 100%;
  .login_box{
    width: 350px;
    position: fixed;
    left: 39%;
    top: 250px;
    border: 1px solid skyblue;
    border-radius: 10px;
    padding: 60px 60px 20px 25px;
    text-align: center;
    background-color: #FDFDFD
  }
}
</style>