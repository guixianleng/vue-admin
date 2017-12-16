<template>
  <div id="app">
    <el-container>
      <el-container>
        <el-header>
          <h1>Vue-admin后台管理系统</h1>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
              <el-col :span="24">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-menu-item index="1">
                    <i class="el-icon-loading"></i>
                    <span slot="title">项目简介</span>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-document"></i>
                      <span>表格</span>
                    </template>
                    <el-menu-item-group>
                      <router-link to="/view/table">
                        <el-menu-item index="2-1">基础表格</el-menu-item>
                      </router-link>
                      <el-menu-item index="2-2">vue组件</el-menu-item>
                    </el-menu-item-group>
                    <!-- <el-menu-item-group title="分组2">
                      <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="2-4-1">选项1</el-menu-item>
                    </el-submenu> -->
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span slot="title">表单</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="3-1">基础表单</el-menu-item>
                      <el-menu-item index="3-2">表单上传</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-star-on"></i>
                      <span slot="title">图形</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="4-1">echarts</el-menu-item>
                      <el-menu-item index="4-2">vueMap</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-edit"></i>
                      <span slot="title">富文本</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="5-1">vue编辑器</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default{
  name: 'app',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-container{
    width: 1200px;
    margin: 0 auto;
  }
  .el-header {
    background-color:#24c881;
    border-radius: #24c881;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #324157;
    text-align: center;
    line-height: 200px;
    min-height: 1000px;
    .el-menu {
      background-color: #324157;
      .el-menu-item {
        color: #20a0ff
      }
      .el-submenu__title{
        color: #24c881
      }
      .el-menu-item-group__title {
        padding: 0
      }
      .el-submenu .el-menu {
        background-color: #143A52;
      }
    }
  }
  .el-main {
    color: #333;
    padding: 0
  }
}
</style>
