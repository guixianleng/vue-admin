<template>
  <div class="content-box">
    <el-table
      ref="multipleTable"
      :data="tableList"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        align="center">
      </el-table-column>
      <el-table-column
        label="出生日期"
        align="center"
        width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        align="center"
        width="60">
        <template slot-scope="scope">
          {{scope.row.sex === 1 ? '男' : '女'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        align="center"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="describe"
        label="描述"
        align="center"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-input v-model="scope.row.describe" v-if="isEdit"/>
          <span v-else>{{scope.row.describe}}</span>
        </template>
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
      <el-button @click="handleDelete()" type="danger" :disabled="multipleSelection.length === 0">
        <i class="el-icon-delete"></i>
        批量删除
      </el-button>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import api from 'api/table'
export default {
  data () {
    return {
      multipleSelection: [],
      isEdit: false,
      tableList: []
    }
  },
  mounted () {

  },
  methods: {
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
      this.isEdit = true
      this.isShow = true
    },
    handleDelete (index, row) {
    }
  }
}
</script>
