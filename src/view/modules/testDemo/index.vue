<template>
  <div class="content-box">
    <!-- 具名插槽 -->
    <name-slot>
      <h1 slot="header">这是一个标题</h1>
      <p>sdhsfsd</p>
      <p>dsfsdsdfsd2</p>
      <p slot="footer">这是一个底部内容</p>
    </name-slot>
    <!-- 作用域插槽 -->
    <scope-slot>
      <template slot-scope="props">
        <p>{{props.text.name}}</p>
        <p>{{props.text.age}}</p>
        <p>{{props.text.sex}}</p>
      </template>
    </scope-slot>
    <!--  -->
    <scoped-name-slot>
      <template slot-scope="props">
        <p slot="button"></p>
        <p slot="text"></p>
      </template>
    </scoped-name-slot>
  </div>
</template>

<script>
import NameSlot from './components/NameSlot'
import ScopeSlot from './components/ScopeSlot'
import ScopedNameSlot from './components/ScopedNameSlot'
export default {
  components: {
    NameSlot,
    ScopeSlot,
    ScopedNameSlot
  }
}
</script>

<style lang="scss" scoped>

</style>
