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
          type: 'value',
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
      }
    }
  }
}
</script>

<style>
.echarts {
  height: 300px;
}
</style>
