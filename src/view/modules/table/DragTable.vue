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
            <!-- <draggable v-model="tableList" :options="{group:'people'}" @start="drag=true" @end="drag=false">
              <transition-group>
                <span class="iconfont icon-drag" :key="scope.$index"></span>
              </transition-group>
            </draggable> -->
            <span class="iconfont icon-drag"></span>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Sortable from 'sortablejs'
import api from '@/api/index'
export default {
  components: {
    draggable,
    Sortable
  },
  data () {
    return {
      tableList: []
    }
  },
  mounted () {
    api.editableTableList().then(res => {
      // console.log(res)
      this.tableList = res.data.data.list
    })
    this.setSort()
    window.test = this
  },
  methods: {
    onEnd (/** Event */ evt) {
      // const oldRow = this.tableList.splice(evt.newIndex, 1)[0]
      const targetRow = this.tableList.splice(evt.oldIndex, 1)[0]
      this.tableList.splice(evt.newIndex, 0, targetRow)
      // this.tableList.splice(evt.oldIndex, 0, oldRow)
    },
    setSort () {
      const el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        onEnd: (/** Event */ evt) => {
          const targetRow = this.tableList.splice(evt.oldIndex, 1)[0]
          this.tableList.splice(evt.newIndex, 0, targetRow)
        },
        onMove: (/** Event */ evt, /** Event */ originalEvent) => {
          // Example: http://jsbin.com/tuyafe/1/edit?js,output
          // console.log(evt, originalEvent)
        }
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
