<template>
  <div class="home" ref="box">
    <div class="home-box">
      <topg></topg>
      <gl></gl>
      <ad></ad>
      <ad1></ad1>
      <ad2></ad2>
    </div>
    <navr></navr>
  </div>
</template>

<script>
import ad from "./ad";
import ad1 from "./ad1";
import ad2 from "./ad2";
import gl from "./gl";
import navr from "./mini-right";
import topg from "./gaikuang";

export default {
  name: "cms",
  components: {
    ad,
    ad1,
    ad2,
    gl,
    navr,
    topg
  },
  //适应屏幕分辨率
  mounted() {
    let h = window.screen.height;
    console.log(h);
    h = h * 0.8;
    this.$refs.box.style.height = h + "px";
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: auto;

  .home-box {
    width: 80%;
    float: left;
  }
}
</style>