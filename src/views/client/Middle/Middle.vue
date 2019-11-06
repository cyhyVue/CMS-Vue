<template>
  <div class="client_middle">
      <top></top>
      <new></New>
  </div>
</template>

<script>
import Top from './Top.vue'
import New from './New.vue'
export default {
    components: {
        Top,
        New
    }
}
</script>

<style lang="scss" scoped>
.client_middle {
    width: 1074px;
    height: 870px;
    background: #f7f8fa;
    float: left;
}
</style>