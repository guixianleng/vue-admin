<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <draggable v-model="contentItems" :options="{group:'people'}" @start="drag=true" @end="drag=false">
        <template v-for="item in contentItems">
          <template v-if="item.subLists">
            <el-submenu :index="item.index">
              <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
              <el-menu-item v-for="(item,i) in item.subLists" :key="i" :index="item.index">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index">
              <i :class="item.icon"></i>{{ item.title }}
            </el-menu-item>
          </template>
        </template>
      </draggable>
    </el-menu>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      contentItems: [
        {
          icon: 'el-icon-setting',
          index: 'readerme',
          title: '项目自述'
        },
        {
          icon: 'iconfont icon-biaoge',
          index: '2',
          title: '表格',
          subLists: [
            {
              icon: 'iconfont icon-biaoge',
              index: 'basetable',
              title: '基础'
            },
            {
              icon: 'el-icon-edit',
              index: 'editableTable',
              title: '编辑'
            },
            {
              icon: 'iconfont icon-drag',
              index: 'dragTable',
              title: '拖拽'
            },
            {
              icon: 'el-icon-upload2',
              index: 'batchTable',
              title: '批量'
            },
            {
              icon: 'el-icon-more',
              index: 'moreTable',
              title: '更多操作'
            }
          ]
        },
        {
          icon: 'iconfont icon-biaodan',
          index: '3',
          title: '表单',
          subLists: [
            {
              index: 'baseform',
              title: '基础'
            },
            {
              index: 'validateForm',
              title: '校验'
            }
          ]
        },
        {
          icon: 'el-icon-picture',
          index: 'vue-echarts',
          title: 'echarts'
        },
        {
          icon: 'iconfont icon-bianji',
          index: 'vueeditor',
          title: '编辑器'
        },
        {
          icon: 'el-icon-location-outline',
          index: 'vueamap',
          title: '高德地图'
        },
        {
          icon: 'iconfont icon-fuwenben',
          index: 'markdown',
          title: 'markdown'
        },
        {
          icon: 'iconfont icon-shangchuan',
          index: 'upload',
          title: '文件上传'
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped>
.sidebar {
  min-height: 800px;
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 80px;
  bottom: 0;
  background: #2e363f;
}
.sidebar > ul {
  height: 100%;
}
</style>