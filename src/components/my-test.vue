<template>
  <div class='container'>
    <div class="header">头部</div>
    <div class="content">
      <!-- 默认插槽 -->
      <slot name="con" :msg="bbb">默认内容</slot>
    </div>
    <div class="footer">
      <slot name="ten">默认底部</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-test',
  data () {
    return {
      bbb: 'my-test的数据'
    }
  }
}
</script>
<style scoped lang="less">

</style>
