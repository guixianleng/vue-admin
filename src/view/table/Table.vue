<template>
	<div>
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
				prop="sex"
				label="性别"
				align="center">
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
  	<edit-dialog :isEdit="isEdit" v-if="isShow" :editInfo="editInfo" v-model="isShow" @success="handleSuccess"/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import editDialog from '../components/EditDialog'
export default {
  components: {
    editDialog
  },
  computed: {
    ...mapGetters({
      'get_date_obj': 'get_date_obj'
    })
  },
  data () {
    return {
      multipleSelection: [],
      isShow: false,
      isEdit: false,
      editInfo: {}
    }
  },
  mounted () {
    this.$store.dispatch('get_date_obj')
    setTimeout(() => {
      console.log(this.get_date_obj)
    }, 1000)
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
      console.log(index, row)
      this.editInfo = row
      this.isEdit = true
      this.isShow = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleSuccess (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
