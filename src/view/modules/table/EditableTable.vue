<template>
  <div class="content-box editable_table">
    <el-table
      :data="tableList"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column
        label="日期"
        align="center"
        width="120">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="string"
        label="热度"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="describe"
        label="标题"
        align="center"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-input v-model="scope.row.describe" v-focus v-if="scope.row.isEdit"/>
          <span v-else>{{scope.row.describe}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        align="center"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">{{scope.row.isEdit ?'确定' : '编辑'}}</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import api from '@/api/index'
export default {
  data () {
    return {
      multipleSelection: [],
      tableList: []
    }
  },
  mounted () {
    api.editableTableList().then(res => {
      // console.log(res)
      this.tableList = res.data.data.list
    })
  },
  methods: {
    handleEdit (index, row) {
      row.isEdit = !row.isEdit
    },
    handleDelete (index, row) {
      api.deleteMember(row.id).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
.editable_table {
  .el-input__inner {
    height: 27px;
    padding: 0 10px;
  }
}
</style>
