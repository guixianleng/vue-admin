<template>
  <div class="content-box">
    <el-table
      ref="multipleTable"
      :data="tableList"
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
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80"
        align="center">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="60"
        align="center">
        <template slot-scope="scope">
          {{scope.row.sex === 1 ? '男' : '女'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="描述"
        align="center"
        width="250"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="85"
        align="center">
        <template slot-scope="scope">
          <el-button :type="['', 'success', 'danger', 'info'][scope.row.status]" size="mini">{{scope.row.status === 0 ? '可操作' : scope.row.status === 1 ? '已编辑' : scope.row.status === 2 ? '已删除' : scope.row.status === 3 ? '已拉黑' : ''}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)" :disabled="scope.row.disableEdit" icon="el-icon-edit">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
          <el-button type="info" size="mini" @click="handleBlack(scope.$index, scope.row)">黑名单</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0 0 10px">
      <el-button @click="handleDelete()" type="danger" :disabled="multipleSelection.length === 0">
        <i class="el-icon-delete"></i>
        批量删除
      </el-button>
    </div>
    <edit-dialog :isEdit="isEdit" v-if="isShow" :editInfo="editInfo" v-model="isShow" @success="handleSuccess"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import editDialog from '../../components/EditDialog'
import api from '@/api/index'
export default {
  components: {
    editDialog
  },
  computed: {
    ...mapGetters({
      // 'table_base_list': 'table_base_list'
    })
  },
  data () {
    return {
      multipleSelection: [],
      tableList: [],
      isShow: false,
      isEdit: false,
      editInfo: {}
    }
  },
  mounted () {
    // this.$store.dispatch('table_base_list')
    api.baseTable().then(res => {
      this.tableList = res.data.data.list
    })
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
      this.editInfo = Object.assign({index: index}, row)
      this.isEdit = true
      this.isShow = true
    },
    handleDelete (index, row) {
      row.status = 2
      // row.disableEdit = true
    },
    handleBlack (index, row) {
      row.status = 3
      // row.disableEdit = true
    },
    handleSuccess (value) {
      this.tableList.map((item, index) => {
        if (index === value.index) {
          item.status = Number(value.status)
          item.name = value.name
          item.birthday = value.birthday
          item.title = value.title
          item.index = value.index
          item.sex = value.sex
          item.disableEdit = value.disableEdit
        }
        return {
          name: item.name,
          birthday: item.birthday,
          title: item.title,
          index: item.index,
          status: item.status,
          sex: item.sex,
          disableEdit: item.disableEdit
        }
      })
    }
  }
}
</script>
