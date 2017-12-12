<template>
  <el-dialog title="编辑信息" :visible.sync="isEdit" @close="handleClose">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="姓名" 
        prop="name"
        :rules="[
          {required: true, message: '请输入真实姓名', trigger: 'blur'}
        ]">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" 
      prop="birthday"
      :rules="[
        {required: true, message: '请填写出生日期', trigger: 'blur'}
      ]">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地址" prop="address" 
      :rules="[
        {required: true, message: '请输入原居住地址', trigger: 'blur'}
      ]">
        <!-- <el-cascader
          :options="options"
          v-model="form.address"
          @change="handleChange">
        </el-cascader> -->
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
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
        address: []
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
    if (typeof(this.editInfo) != '{}') { // eslint-disable-line
      this.form.name = this.editInfo.name
      this.form.birthday = this.editInfo.birthday
      this.form.address = this.editInfo.address
    }
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

<style>

</style>

