<template>
  <el-container>
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
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>Vue-admin</el-header>
        <el-main>
          <el-table
          ref="multipleTable"
          :data="get_date_obj.data.list"
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
              <el-button type="link">编辑</el-button>
              <el-button type="link">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <!-- <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button> -->
          <el-button @click="toggleSelection()">取消选择</el-button>
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
  line-height: 60px;
}

.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: 1000px;
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  padding: 0
}
</style>
