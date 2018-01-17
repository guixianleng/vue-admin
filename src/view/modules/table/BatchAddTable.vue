<template>
  <div class="content-box">
    <div class="memberStyle">
      <el-table
        :data="list"
        empty-text="暂无新增"
        style="width: 100%">
        <el-table-column
          label="序号"
          align="center"
          width="55">
          <template slot-scope="scope">
            {{scope.$index + 1}}
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="手机号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          align="center">
        </el-table-column>
        <el-table-column
          prop="idNo"
          label="证件号"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">
          <template slot-scope="scope">
            <el-button type="link" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="link" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="this.list.length">
        <div class="add-btn">
          <el-button  @click="handleAdd" type="link">+ 新增</el-button>
        </div>
        <div class="btn-wrapper center">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
        </div>
      </div>
      <div class="now_add_btn" v-else>
        <el-button  @click="handleAdd" type="primary">立即添加</el-button>
      </div>
    </div>
    <!-- 弹框增加或编辑 -->
    <div class="studentStyle">
      <el-dialog title="填写新增信息" :visible.sync="isShow" @close="handleColse">
        <batch-add :studentInfo="studentInfo" v-if="isClose" v-model="isClose" @success="handleSuccess"/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import BatchAdd from './components/BatchInfo'
export default {
  components: {
    BatchAdd
  },
  data () {
    return {
      isShow: false,
      isClose: false,
      studentInfo: {},
      list: [],
      isEdit: false, // 是否编辑成员
      editIndex: ''
    }
  },
  methods: {
    handleAdd (index, row) {
      this.isShow = true
      this.isClose = true
      this.isEdit = false
      this.isAdd = true
      this.studentInfo = {}
    },
    handleEdit (index, row) {
      this.isClose = true
      this.isShow = true
      this.isEdit = true
      let scope = this
      setTimeout(function () {
        scope.studentInfo = row
        scope.editIndex = index
      }, 300)
    },
    handleColse () {
      this.studentInfo = {}
      this.isClose = false
    },
    handleDelete (index, row) {
      let h = this.$createElement
      this.$msgbox({
        title: '温馨提示',
        message: h('div', null, [
          h('div', {style: 'width: 130px; word-break: break-all; padding-bottom: 10px;'}, '删除后不可恢复'),
          h('div', {style: 'width: 240px;'}, '确认删除该学员吗？')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.list.filter((item, n) => {
          if (n === index) {
            this.list.splice(n, 1)
          }
          return this.list
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        // console.log(err)
      })
    },
    handleCancel () {
      let h = this.$createElement
      this.$msgbox({
        title: '温馨提示',
        message: h('div', null, [
          h('div', {style: 'width: 130px; word-break: break-all; padding-bottom: 10px;'}, '要离开此页面吗？'),
          h('div', {style: 'width: 240px;'}, '系统不会保存您所添加的信息哦！')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        history.back()
      }).catch(() => {})
    },
    handleSuccess (value) {
      let isExist = false // 手机号+姓名已存在于列表
      let isIdNo = false // 证件号码已存在于列表
      let errMsg = '您刚才添加过啦！'
      let idNoMsg = '您刚才添加过该证件号码啦！'
      if (this.isEdit) {
        for (let i = 0; i < this.list.length; i++) {
          if (i !== this.editIndex) {
            if (this.list[i].mobile === value.mobile && this.list[i].name === value.name) {
              isExist = true
            }
          }
        }
        if (isExist) {
          this.$message.error(errMsg)
          this.isShow = false
          return
        }
        this.list.splice(this.editIndex, 1, value)
        this.isShow = false
      } else {
        for (let j = 0; j < this.list.length; j++) {
          if (this.list[j].mobile === value.mobile && this.list[j].name === value.name) {
            isExist = true
          } else if (this.list[j].idNo && this.list[j].idNo === value.idNo) {
            isIdNo = true
          }
        }
        if (isExist) {
          this.$message.error(errMsg)
          this.isShow = false
          return
        } else if (isIdNo) {
          this.$message.error(idNoMsg)
          this.isShow = false
          return
        }
        this.list.push(value)
        this.isShow = false
      }
    },
    handleSubmit () {
      // api.addStudent(JSON.stringify(this.list), {context: this, successMsg: '修改成功'}).then(res => {
      //   history.back()
      // })
    }
  }
}
</script>

<style lang="scss">
.memberStyle{
  .add-btn {
    margin-top: 20px;
    text-align: center;
    .el-button {
      width: 100%;
      border: none
    }
  }
  .now_add_btn {
    text-align: center;
    margin-top: 50px;
  }
  .btn-wrapper {
    margin-top: 70px; 
  }
}
.studentStyle {
  .el-dialog--small {
    width: 600px;
  }
  .el-dialog__body {
    padding-bottom: 90px;
  }
}
</style>
