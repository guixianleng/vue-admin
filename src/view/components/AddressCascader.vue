<template>
  <el-cascader
    class="address-cascader"
    ref="cascader"
    v-bind="$props"
    :options="optionsTree"
    @change="handleChange" />
</template>

<script>
  import axios from 'axios'
  import {Cascader} from 'element-ui'
  
  export default {
    props: {
      ...Cascader.props,
      grade: {
        type: Number,
        default: 3
      },
      options: {
        type: Array,
        required: false
      },
      addressTree: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        optionsTree: []
      }
    },
    mounted () {
      /**
       * 修改记录 By 何仕敬
       * 添加对发布服务-培训-地址区多选中的港澳特殊处理
       * 不影响组件原有使用
       */
      axios.get('/static/area.json').then(({data}) => {
        this.$areaJson = data
        if (this.addressTree.length) {
          this.optionsTree = this.addressTree // 使用传递渲染好的地址数据
        } else {
          this._initAddressData(data) // 使用默认初始化地址数据
        }
      })
    },
    methods: {
      _initAddressData (data) {
        // 初始化地址数据
        let result = []
        data.province.forEach(p => {
          let city = []
          if (data.city[p.areaId] && this.grade > 1) {
            data.city[p.areaId].forEach(c => {
              let area = []
              if (data.area[c.areaId] && this.grade > 2) {
                data.area[c.areaId].forEach(a => {
                  a.parentId === c.areaId && area.push({
                    value: a.areaId,
                    label: a.title
                  })
                })
              }
              let cityObject = {
                value: c.areaId,
                label: c.title
              }
              if (this.grade > 2 && area.length) {
                cityObject.children = area
              }
              city.push(cityObject)
            })
          }
          result.push({
            value: p.areaId,
            label: p.title,
            children: this.grade > 1 ? city : null
          })
        })
        this.optionsTree = result
      },
      handleChange (value) {
        this.$emit('change', value).$emit('input', value)
        this.$emit('update:label', this.getLabel(value))
      },
      getLabel (value) {
        let result = []
        value.forEach((item, index) => {
          if (index === 0) {
            this.$areaJson.province.forEach(p => {
              p.areaId === item && result.push(p.title)
            })
          }
          if (index === 1 && this.$areaJson.city[value[0]]) {
            this.$areaJson.city[value[0]].forEach(c => {
              c.areaId === item && result.push(c.title)
            })
          }
          if (index === 2 && this.$areaJson.area[value[1]]) {
            this.$areaJson.area[value[1]].forEach(a => {
              a.areaId === item && result.push(a.title)
            })
          }
        })
        return result
      }
    },
    destroyed () {
      this.$areaJson = null
    }
  }
</script>

<style lang="scss">
  @import '~styles/var.scss';
</style>
