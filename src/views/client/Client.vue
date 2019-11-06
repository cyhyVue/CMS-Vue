<template>
  <div class="client">
      <Left></Left>
      <Middle></Middle>
      <Right></Right>
  </div>
</template>

<script>
import Left from './Left.vue'
import Middle from './Middle/Middle.vue'
import Right from './Right.vue'
export default {
    components: {
        Left,
        Middle,
        Right
    }
}
</script>

<style lang="scss" scoped>
    .client {
        margin: 0;
        padding: 0;

    }
</style>