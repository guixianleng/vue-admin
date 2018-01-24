<template>
<div class="content-box">
  <el-row :gutter="20">
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <chart :options="polar"/>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <chart :options="polarColumnar"></chart>
      </div>
    </el-col>
  </el-row>
  <!-- <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-purple">
        <chart :options="chinaMap" class="map"></chart>
      </div>
    </el-col>
  </el-row> -->
</div>
</template>

<script>
export default {
  data () {
    let data = []
    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: ' value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      polarColumnar: {
        title: {
          text: '极坐标系下的堆叠柱状'
        },
        angleAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          z: 10
        },
        radiusAxis: {},
        polar: {},
        series: [{
          type: 'bar',
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'
        },
        {
          type: 'bar',
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a'
        },
        {
          type: 'bar',
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a'
        }],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      },
      chinaMap: {
        title: {
          text: 'iphone销量',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['iphone3', 'iphone4', 'iphone5']
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],           // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {name: '北京', value: this.randomData()},
              {name: '天津', value: this.randomData()},
              {name: '上海', value: this.randomData()},
              {name: '重庆', value: this.randomData()},
              {name: '河北', value: this.randomData()},
              {name: '河南', value: this.randomData()},
              {name: '云南', value: this.randomData()},
              {name: '辽宁', value: this.randomData()},
              {name: '黑龙江', value: this.randomData()},
              {name: '湖南', value: this.randomData()},
              {name: '安徽', value: this.randomData()},
              {name: '山东', value: this.randomData()},
              {name: '新疆', value: this.randomData()},
              {name: '江苏', value: this.randomData()},
              {name: '浙江', value: this.randomData()},
              {name: '江西', value: this.randomData()},
              {name: '湖北', value: this.randomData()},
              {name: '广西', value: this.randomData()},
              {name: '甘肃', value: this.randomData()},
              {name: '山西', value: this.randomData()},
              {name: '内蒙古', value: this.randomData()},
              {name: '陕西', value: this.randomData()},
              {name: '吉林', value: this.randomData()},
              {name: '福建', value: this.randomData()},
              {name: '贵州', value: this.randomData()},
              {name: '广东', value: this.randomData()},
              {name: '青海', value: this.randomData()},
              {name: '西藏', value: this.randomData()},
              {name: '四川', value: this.randomData()},
              {name: '宁夏', value: this.randomData()},
              {name: '海南', value: this.randomData()},
              {name: '台湾', value: this.randomData()},
              {name: '香港', value: this.randomData()},
              {name: '澳门', value: this.randomData()}
            ]
          },
          {
            name: 'iphone4',
            type: 'map',
            mapType: 'china',
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {name: '北京', value: this.randomData()},
              {name: '天津', value: this.randomData()},
              {name: '上海', value: this.randomData()},
              {name: '重庆', value: this.randomData()},
              {name: '河北', value: this.randomData()},
              {name: '安徽', value: this.randomData()},
              {name: '新疆', value: this.randomData()},
              {name: '浙江', value: this.randomData()},
              {name: '江西', value: this.randomData()},
              {name: '山西', value: this.randomData()},
              {name: '内蒙古', value: this.randomData()},
              {name: '吉林', value: this.randomData()},
              {name: '福建', value: this.randomData()},
              {name: '广东', value: this.randomData()},
              {name: '西藏', value: this.randomData()},
              {name: '四川', value: this.randomData()},
              {name: '宁夏', value: this.randomData()},
              {name: '香港', value: this.randomData()},
              {name: '澳门', value: this.randomData()}
            ]
          },
          {
            name: 'iphone5',
            type: 'map',
            mapType: 'china',
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {name: '北京', value: this.randomData()},
              {name: '天津', value: this.randomData()},
              {name: '上海', value: this.randomData()},
              {name: '广东', value: this.randomData()},
              {name: '台湾', value: this.randomData()},
              {name: '香港', value: this.randomData()},
              {name: '澳门', value: this.randomData()}
            ]
          }
        ]
      }
    }
  },
  methods: {
    randomData () {
      return Math.round(Math.random() * 1000)
    }
  }
}
</script>

<style lang="scss">
.echarts {
  height: 300px;
  .map {
    min-height: 800px;
    min-width: 100%;
  }
}
</style>
