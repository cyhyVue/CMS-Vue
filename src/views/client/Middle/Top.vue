<template>
  <div class="client_top">
      <span>客户查询</span>
      <span><img src="../../.././assets/Client_img/icon1.png" alt=""></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .client_top {
        width: 1074px;
        height: 56px;
        background: #ffffff;
        border: #cccccc 1px solid;
        > span:nth-child(1) {
            width: 112px;
            height: 56px;
            float: left;
            // background: orange;
            font-size: 15px;
            color: black;
            text-align: center;
            line-height: 56px;
        }
        > span:nth-child(2) {
            width: 66px;
            height: 56px;
            float: right;
            // background: yellow;
            > img {
                display: inline-block;
                width: 44px;
                height: 32px;
                border: solid 1px #cccccc;
                margin: 12px 0 0 10px;

            }
        }
    }
</style>