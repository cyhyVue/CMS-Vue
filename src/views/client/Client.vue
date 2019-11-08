<template>
  <div class="client" ref="cli">
      <!-- <Left></Left> -->
      <Middle></Middle>
      <!-- <Right></Right> -->
  </div>
</template>

<script>
// import Left from './Left.vue'
import Middle from './Middle/Middle.vue'
// import Right from './Right.vue'
export default {
    components: {
        // Left,
        Middle,
        // Right
    },
    mounted() {
    let h = window.screen.height;
    console.log(h);
    h = h * 0.8;
    this.$refs.cli.style.height = h + "px";
  }
}
</script>

<style lang="scss" scoped>
    .client {
        
        width: 100%;
        margin: 0;
        padding: 0;
        overflow-x: scroll;

    }
</style>