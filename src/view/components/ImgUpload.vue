<template>
  <preview-box :title="title" :class="{'img-upload': !$slots.default,'img-upload-value': !$slots.default&&value}" v-loading="loading">
    <button v-if="!$slots.default" type="button">
      <img v-if="value" :src="value" class="avatar">
      <i v-else class="el-icon-plus"></i>
    </button>
    <el-upload
      v-bind="$props"
      :before-upload="handleBeforeUpload"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-error="handleError"
       >  
        <slot v-if="$slots.default"></slot>
        <button type="button" class="img-upload-value-button" t v-if="!$slots.default&&value">
          <i class="el-icon-upload"></i>上传图片
        </button>
    </el-upload>
  </preview-box>
</template>

<script>
  import {Upload} from 'element-ui'
  let props = Object.assign({}, Upload.props)
  delete props.onSuccess
  delete props.beforeUpload
  delete props.onProgress
  delete props.onError
  export default {
    props: {
      ...props,
      value: {
        type: String
      },
      showFileList: {
        type: Boolean,
        default: false
      },
      headers: {
        type: Object,
      },
      accept: {
        type: String,
        default: 'image/jpeg,image/png'
      },
      size: {
        type: Number,
        default: 1024 * 1024 * 5
      },
      validateEvent: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        loading: false,
        title: document.all ? '可能要双击才能选择文件' : ''
      }
    },
    methods: {
      handleBeforeUpload (file) {
        if (file.size > this.size) {
          this.$message.error(`上传的文件不能超过${this.size / 1024 / 1024}M`)
          return false
        }
        if (!/(.png|.jpeg|.jpg)$/.test(file.name)) {
          this.$message.error('图片格式格式不正确,请重新上传')
          return false
        }
        if (this.disabled) {
          return false
        }
        return true
      },
      handleProgress () {
        this.loading = true
      },
      handleSuccess (res) {
        this.loading = false
        if (res.result === '0') {
          let url = res.data.url
          this.$emit('change', res.data).$emit('success', url).$emit('input', url).$emit('blur')
          if (this.validateEvent) { // 触发表单校验
            this.dispatch('ElFormItem', 'el.form.change', [url])
            this.dispatch('ElFormItem', 'el.form.blur', [url])
          }
        } else {
          this.$emit('exception', res)
          this.$message.error(res.msg || '文件上传失败')
        }
      },
      handleError (err, file, fileList) { //eslint-disable-line
        this.$message.error(`"${file.name}"文件上传失败`)
        this.loading = false
      }
    }
  }
</script>

<style lang="scss">
    @import '~styles/var.scss';
    .is-error .img-upload{
      border-color:#ff4949;
    }
    .img-upload {
        border: 1px dashed $border-color-base;
        display: inline-block;
        height: 150px;
        width: 150px;
        vertical-align: middle;
        position: relative;
        overflow:hidden;
        &:hover {
            border-color: $color-primary;
            .el-icon-plus {
                font-size: 28px;
                color: $color-primary;
            }
        }
        box-sizing: border-box;
        button {
            border: 0;
            outline: none;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background: transparent;
            cursor: pointer;

            .el-icon-plus {
                font-size: 28px;
                color: #8c939d;
            }
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
        .el-upload{
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:100%;
          z-index:90;
          &__input{
            position:absolute\0;
            top:0\0;
            right:0\0;
            height:100%\0;
            width:100%\0;
            opacity:0\0;
            display:block\0;
          }
        }
        &-value{
          .el-upload{
            height:30px;
            bottom:-30px;
            background:rgba(0,0,0,0.6);
          }
          &:hover .el-upload{
            bottom:0px;
          }
          &-button{
            color:#fff;
            height:30px;
            font-size: 14px;
            i{
              font-size:18px;
              margin-right:5px;
              vertical-align: middle;
            }
          }
        }
    }

</style>
