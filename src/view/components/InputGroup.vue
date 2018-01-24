<template>
  <group
    :value="myValue"
    :gutter="gutter"
    :span="span"
    :button-disabled="buttonDisabled"
    :max-item="maxItem"
    :inline="inline"
    class="input-group"
    :class="classes"
    @add="handleAdd"
    @remove="handleRemove">
    <template scope="scope">
      <el-input v-bind="$props" :value="scope.item" @change="handleChange(scope.index,$event)"/>
    </template>
  </group>
</template>
<script>

  import {Input} from 'element-ui'
  import Group from './Group'
  export default {
    components: {
      Group
    },
    props: {
      ...Input.props, // 继承Input的所有属性
      ...Group.props,
      inline: {
        type: Boolean,
        default: false
      },
      gutter: {
        type: Number,
        default: 0
      }
    },
    computed: {
      classes () {
        return {
          'textarea-group': this.type === 'textarea'
        }
      }
    },
    watch: {
      value (value) {
        this.myValue = value
      }
    },
    data () {
      let myValue = this.value
      if (!this.value || this.value.length === 0) {
        myValue = ['']
      }
      return {
        myValue
      }
    },
    methods: {
      handleChange (index, value) {
        let valueClone = Object.assign([], this.myValue)
        valueClone[index] = value
        this.$emit('input', valueClone).$emit('change', valueClone)
      },
      handleAdd (index) {
        this.myValue.push('')
      },
      handleRemove (index) {
        let valueClone = Object.assign([], this.myValue)
        valueClone.splice(index, 1)
        this.$emit('input', valueClone).$emit('change', valueClone)
      }
    }
  }
</script>

<style lang="scss">
    @import '~styles/var.scss';
    .input-group{
      max-width:500px;
    }
    .textarea-group{
      .btn-icon{
        position:absolute;
        min-height: 100%;
      }
    }
</style>
