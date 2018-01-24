<template>
  <div class="content-box">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        align="center"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        align="center"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="100">
        <template slot-scope="scope">
          <el-dropdown @command="handleCommand" size="mini" trigger="click">
            <span class="el-dropdown-link">
              更多<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <!-- 更多 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 1}" class="set_downsize">编辑</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 2}" class="set_downsize">黑名单</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 3}" class="set_downsize">白名单</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 4}" class="set_downsize">续费</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 5}" class="set_downsize">处理</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 6}" class="set_downsize">查看处理情况</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 7}" class="set_downsize">流失</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 8}" class="set_downsize">查看流失情况</el-dropdown-item>
              <el-dropdown-item :command="{index: scope.$index, row: scope.row, style: 9}" class="set_downsize">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      info: {},
      tableData: []
    }
  },
  mounted () {
    api.moreTableList().then(res => {
      this.tableData = res.data.data.list
      console.log(this.tableData)
    })
  },
  methods: {
    handleCommand (command) {
      console.log(command)
      let obj = {
        1: (row) => {
          this.isTimeSignUp = true
          this.info = row
        },
        2: (row) => {
          this.isGiven = true
          this.isGivenClose = true
          this.info = row
        },
        3: (row) => {
          this.isRenewClose = true
          this.isRenew = true
          this.info = row
        },
        4: (row) => {
          this.isRenewClose = true
          this.isRenew = false
          this.info = row
        },
        7: (row) => {
          this.info = row
          this.islossedClose = true
          this.islossed = true
        },
        8: (row) => {
          this.info = row
          this.islossedClose = true
          this.islossed = false
        },
        10: (row) => {
          this.info = Object.assign({isClassCancelDispose: 0, isClassDispose: true}, row)
          this.isDisposeClose = true
          this.isDispose = true
        },
        11: (row) => {
          this.info = Object.assign({isClassCancelDispose: 1, isClassDispose: true}, row)
          this.isDisposeClose = true
          this.isDispose = false
        }
      }
      obj[command.style](command.row)
    }
  }
}
</script>

<style>

</style>
