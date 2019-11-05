<template>
  <div>
    <!-- <el-container> -->
  <!-- <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>
      <Form></Form>
    </el-main>
  </el-container>
</el-container> -->

<el-container>
  <el-aside width="200px" style="background:#444444">Aside</el-aside>
  <el-container>
    <el-header class="header">订单查询</el-header>
    <el-main class="main">
      <Form></Form>
      <Tablist></Tablist>
      <List></List>
      </el-main>
  </el-container>
</el-container>
  </div>
  
</template>

<script>
import Form from './Form.vue'
import Tablist  from './Tablist.vue'
import List from './List.vue'
export default {
  components:{
    Form,
    Tablist,
    List
  }
}

</script>

<style scoped>
 Form{
   width: 1008px;
   height: 355px;
   /* border: 2px solid #fff; */
 }
 .el-container .el-aside {
    line-height: 355px;
  }
.main{
  border: 16px solid #f7f8fa;
  border-bottom: 0;
  /* width: 1008px; */
}
.header{
  border: 1px solid #ececec;
  line-height: 60px;
  font-size: 12px;
}
List{
  width: 1008px;
}
</style>