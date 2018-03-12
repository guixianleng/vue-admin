<template>
  <div>
    <div class="scope_contain">
      <slot :text="paramsObj"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paramsObj: {
        name: 'lisi',
        age: 25,
        sex: '男'
      }
    }
  }
}
</script>

<style>

</style>
