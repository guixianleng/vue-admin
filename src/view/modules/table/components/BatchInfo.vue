<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="100px">
    <el-form-item label="姓名" prop="name"
        :rules="[
          {required: true, message: '请输入真实姓名', trigger: 'blur', validator: validator.rule.username}
        ]">
      <el-input :maxlength="4" v-model.trim="form.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="mobile"
        :rules="[
          {required: true, message: '请输入手机号', trigger: 'blur'},
          Object.assign({trigger: 'blur', validator: validator.rule.isPhone})
        ]">
      <el-input :maxlength="11" v-model.trim="form.mobile"></el-input>
    </el-form-item>
    <el-form-item label="日期" prop="valueDate"
      :rules="[
        {required: true, message: '请填写日期', trigger: 'blur'}
      ]">
      <el-date-picker
        v-model="form.valueDate"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="地址" prop="address" 
      :rules="[
        {required: true, message: '请输入地址', trigger: 'blur'}
      ]">
      <address-cascader v-model="form.address" :clearable="true"  style="width: 100%" :grade="3" placeholder="请选择地址"/>
    </el-form-item>
    <el-form-item label="证件号码" prop="idNo" 
      :rules="[
        {required: true, message: '请输入证件号码', trigger: 'blur'},
        Object.assign({trigger: 'blur', validator: validator.rule.isIp.validator.bind(this)})
      ]">
      <el-row>
        <el-col :span="5">
          <el-select v-model="form.idType" placeholder="请选择证件类型" style="margin-right: 5px;">
            <el-option
              v-for="item in idTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="19">
          <el-input v-model="form.idNo" placeholder="请输入证件号码"></el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitForm('form')">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import AddressCascader from '../../../components/AddressCascader'
import validator from '@/utils/validator'
export default {
  props: {
    info: {
      type: Object
    }
  },
  components: {
    AddressCascader
  },
  data () {
    return {
      validator,
      idTypes: [
        {
          value: 1,
          label: '身份证号'
        },
        {
          value: 2,
          label: '护照'
        },
        {
          value: 3,
          label: '其他证件'
        }
      ],
      rules: {},
      form: {
        name: '',
        valueDate: '',
        idType: 1,
        idNo: '',
        address: [],
        mobile: ''
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  watch: {
    info (value) {
      this.form.name = value.name
      this.form.valueDate = value.valueDate
      this.form.idType = value.idType
      this.form.idNo = value.idNo
      this.form.address = value.address
      this.form.mobile = value.mobile
    }
  },
  methods: {
    handleClose () {
      this.$emit('input', false)
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

<style lang="scss">

</style>
