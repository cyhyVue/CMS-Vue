<template>
  <div class="home">
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
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 640px;
  overflow: auto;
  .home-box {
    height: 100%;
    width: 80%;
    float: left;
  }
}
</style>