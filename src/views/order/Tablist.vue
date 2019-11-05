<template>
    <div class="border">
        <el-row class="Tablist">
  <el-col :span="1.5"><el-button class="button" style="border-radius:5px 0 0 0" type="info" plain>全部</el-button></el-col>
  <el-col :span="1.5"><el-button class="button" type="info" plain>待付款</el-button></el-col>
  <el-col :span="1.5"><el-button class="button" type="info" plain>待发货</el-button></el-col>
  <el-col :span="1.5"><el-button class="button" type="info" plain>已发货</el-button></el-col>
  <el-col :span="1.5"><el-button class="button" type="info" plain>已完成</el-button></el-col>
  <el-col :span="1.5"><el-button class="button" type="info" plain>已关闭</el-button></el-col>
  <el-col :span="1.5"><el-button class="button" style="border-radius:0 5px 0 0;border-right:2px solid #eaecee" type="info" plain>退款中</el-button></el-col>
</el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
    border: 1px solid 
  }
//   .border{
//     //   border-bottom: 16px
//   }
  .Tablist{
    margin-top:16px;
    border-bottom: 2px solid #e9eaec;
    // margin-bottom: 16px
  }
    .button{
        border-right: 0;
        border-radius: 1px;
    }
</style>