<template>
  <div class="content-box">
    <div class="amap-page-container">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
        <!-- <el-amap-marker v-for="(marker,index) in markers" :key="index" :position="marker" ></el-amap-marker> -->
      </el-amap>
    </div>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap'
let amapManager = new AMapManager()
export default {
  data () {
    return {
      amapManager: amapManager,
      zoom: 15,
      geocoder: {},
      markers: [],
      center: [121.59996, 31.197646],
      address: '',
      events: {
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          var self = this
          let { lng, lat } = e.lnglat
          this.lng = lng
          this.lat = lat
          // 这里通过高德 SDK 完成。
          var geocoder = new AMap.Geocoder({ // eslint-disable-line
            radius: 1000,
            extensions: 'all'
          })
          geocoder.getAddress([lng, lat], function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              if (result && result.regeocode) {
                self.address = result.regeocode.formattedAddress
              }
            }
          })
        }
      },
      searchOption: {
        city: '全国',
        citylimit: false
      },
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: ['MapType', 'ToolBar', { // Scale比例尺，ToolBar工具条，OverView鹰眼，
        pName: 'Geolocation', // 定位插件
        events: {
          init (o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                this.lng = result.position.lng
                this.lat = result.position.lat
                this.center = [this.lng, this.lat]
                this.loaded = true
              }
            })
          },
          click: (e) => {
            let {lng, lat} = e.lnglat
            this.lng = lng
            this.lat = lat
            // 这里通过高德 SDK 完成。
            var geocoder = new AMap.Geocoder({ // eslint-disable-line
              radius: 1000,
              extensions: 'all'
            })
          }
        }
      }]
    }
  },
  methods: {
    onSearchResult (pois) {
      let latSum = 0
      let lngSum = 0
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi
          lngSum += lng
          latSum += lat
          this.markers.push([poi.lng, poi.lat])
        })
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        }
        this.center = [center.lng, center.lat]
      }
    }
  }
}
</script>


<style lang="scss">
.content-box{
  position: relative;
  .amap-page-container {
    margin-top: 30px;
    .amap-demo {
      height: 500px;
    }
    .search-box {
      position: absolute;
      top: 10px;
      left: 30px;
      background-color: #66BFBF;
    }
  }
  .el-vue-search-box-container .search-box-wrapper input {
    background-color: #66BFBF
  }
}
</style>
