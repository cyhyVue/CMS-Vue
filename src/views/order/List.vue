<template>
    <div>
        <!-- <el-row class="List">
  <el-col class="col" :span="7"><div class="grid-content bg-purple">商品</div></el-col>
  <el-col class="col" :span="3"><div class="grid-content bg-purple-light">单价(元) / 数量</div></el-col>
  <el-col class="col" :span="2"><div class="grid-content bg-purple">售后</div></el-col>
  <el-col class="col" :span="3"><div class="grid-content bg-purple-light">买家 / 收货人</div></el-col>
  <el-col class="col" :span="2"><div class="grid-content bg-purple">配送方式</div></el-col>
  <el-col class="col" :span="3"><div class="grid-content bg-purple-light">实收金额(元)</div></el-col>
  <el-col class="col" :span="3"><div class="grid-content bg-purple">订单状态</div></el-col>
  <el-col class="col" :span="1"><div class="grid-content bg-purple-light">操作</div></el-col>
</el-row> -->
<div class="biaodan">
<!-- <el-button style="width:120px;height:120px;line-height:120px;border: none;"> <el-image
      style="width: 100px; height: 100px;margin: 0 auto 10px"
      :src="url"></el-image></el-button>
    <span style="width:55px;height:20px;font-size: 12px;padding-left:14px">暂无订单</span> -->
    <Surface></Surface>
</div>
    <div class="zent-pagination zent-pagination--normal order-list-pagination">
        <div >
        </div>
    </div>
    </div>
</template>

<script>

// import Paging from './Paging.vue'
import Surface from './Surface.vue'
    export default {
data() {
      return {
        // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'http://localhost:8080/icon4.png'
      }
    },
    components:{
        // Paging,
        Surface
    }
    }
</script>

<style lang="scss" scoped>
    .List{
        height: 40px;
        display: flex;
        background:#f7f8fa;
        line-height: 40px;
        font-size: 14px;
        border-radius: 1px;
    margin-bottom: 16px;
    }
    .col{
        padding-left: 14px;
    }
    .biaodan{
        // height: 151px;
        text-align: center;
        // line-height: 151px;
        // display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        border: 1px solid #ebedf0;
    }
</style>