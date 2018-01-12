<template>
  <el-dialog title="编辑信息" :visible.sync="isEdit" @close="handleClose">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="姓名" prop="name"
          :rules="[
            {required: true, message: '请输入真实姓名', trigger: 'blur'}
          ]">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="birthday"
        :rules="[
          {required: true, message: '请填写日期', trigger: 'blur'}
        ]">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="标题" prop="title" 
        :rules="[
          {required: true, message: '请输入标题', trigger: 'blur'}
        ]">
        <!-- <address-cascader v-model="form.address" :clearable="true"  style="width: 100%" :grade="3" placeholder="请选择居住地址"  @change ="handleChange"/> -->
        <el-input v-model="form.title" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitForm('form')">保存</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
// import AddressCascader from './AddressCascader'
export default {
  components: {
    // AddressCascader
  },
  props: {
    isEdit: {
      type: Boolean,
      default: true
    },
    editInfo: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        name: '',
        birthday: '',
        title: '',
        index: '',
        status: '',
        sex: '',
        disableEdit: ''
      },
      rules: {},
      pickerOptions: {
        disabledDate: function (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  mounted () {
    this.form.name = this.editInfo.name
    this.form.birthday = this.editInfo.birthday
    this.form.title = this.editInfo.title
    this.form.index = this.editInfo.index
    this.form.status = this.editInfo.status
    this.form.sex = this.editInfo.sex
    this.form.disableEdit = this.editInfo.disableEdit
  },
  methods: {
    handleClose () {
      this.$emit('input', false)
    },
    handleChange (data) {
      console.log(data)
    },
    submitForm (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$emit('success', this.form).$emit('input', false)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>

