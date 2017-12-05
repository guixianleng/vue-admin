<template>
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
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>表格</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">基础表格</el-menu-item>
                    <el-menu-item index="1-2">vue组件</el-menu-item>
                  </el-menu-item-group>
                  <!-- <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu> -->
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">表单</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">基础表单</el-menu-item>
                    <el-menu-item index="1-2">表单上传</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-star-on"></i>
                    <span slot="title">图形</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">echarts</el-menu-item>
                    <el-menu-item index="1-2">vueMap</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span slot="title">富文本</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">vue编辑器</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-table
            ref="multipleTable"
            :data="get_date_obj.data.list"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              align="center">
            </el-table-column>
            <el-table-column
              label="日期"
              align="center"
              width="120">
              <template slot-scope="scope">{{ scope.row.birthday }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              align="center">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="operate"
              label="操作"
              align="center"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin: 10px 0 0 10px">
            <el-button @click="handleDelete()" type="danger">
              <i class="el-icon-delete"></i>
              批量删除
            </el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
// import api from '../api/index'
export default {
  computed: {
    ...mapGetters({
      'get_date_obj': 'get_date_obj'
    })
  },
  data () {
    return {
      multipleSelection: []
    }
  },
  mounted () {
    this.$store.dispatch('get_date_obj')
    // api.mineBaseMsgApi().then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style>
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
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: 1000px;
}

.el-menu {
  background-color: #D3DCE6;
}

.el-main {
  color: #333;
  padding: 0
}
</style>
