<template>
  <el-header>
    <div class="project-info">后台管理系统</div>
    <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-info">
          {{username}}
          <img class="logo" src="../../static/images/login.jpg">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      name: 'header'
    }
  },
  computed: {
    username () {
      let username = localStorage.getItem('USERNAME')
      return username
    }
  },
  methods: {
    handleCommand (command) {
      this.$store.dispatch('Logout').then(() => {
        this.$router.push({ path: '/login' })
      }).catch(err => {
        this.$message.error(err)
      })
    }
  }
}
</script>
<style scoped lang="scss">
.el-header {
  background-color: #155263;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  line-height: 60px;
  .project-info {
    float: left;
    width: 90%;
    text-align: left;
    font-size: 22px;
    color: #fff;
  }
  .el-dropdown-info {
    position: relative;
    display: inline-block;
    padding-left: 50px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
  }
  .logo {
    position: absolute;
    left: 0;
    top: 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>