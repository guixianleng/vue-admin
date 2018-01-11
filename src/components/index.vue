<template>
  <div class="wrapper">
    <x-header></x-header>
    <x-slider></x-slider>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import xHeader from './Header.vue'
import xSlider from './Slider.vue'
export default {
  components: {
    xHeader,
    xSlider
  }
}
</script>

<style lang="scss">
.wrapper {
  position: relative;
  .content {
    margin-left: 10px;
    padding: 10px 0 0 210px;
  }
}
</style>
