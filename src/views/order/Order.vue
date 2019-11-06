<template>
  <div class="boxx">
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
  <!-- <el-aside width="200px" style="background:#444444">Aside</el-aside> -->
  <el-container>
    <el-header class="header">订单查询</el-header>
    <el-main class="main">
      <Form></Form>
      <Tablist></Tablist>
      <List></List>
      </el-main>
      <el-footer>
        <Footer></Footer>
        </el-footer>
  </el-container>
    <!-- <el-aside width="200px" style="background:red">Aside</el-aside> -->
</el-container>
  </div>
  
</template>

<script>
import Form from './Form.vue'
import Tablist  from './Tablist.vue'
import List from './List.vue'
import Footer from './Footer.vue'

// import { mapActions } from 'vuex'

export default {
  components:{
    Form,
    Tablist,
    List,
    Footer
  },
  mounted(){
    // this.getOrder()
  },
  methods:{
    // ...mapActions(['getOrder'])
  }
}

</script>

<style lang="scss" scoped>
.boxx{
  height: 77%;
        width: 100%;

  overflow-x: scroll;


}
 Form{
   width: 80%;
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
// List{
//   width: 1008px;
// }
Tablist{
  width: 90%;
}

 .el-header, .el-footer {
    background-color: #f7f8fa;
    color: #333;
    // text-align: center;
    // line-height: 60px;
  }
</style>