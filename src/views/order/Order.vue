<template>
  <div class="boxx" ref="boxx">
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
   
    let h = window.screen.height;
    console.log(h);
    h = h * 0.8;
    this.$refs.boxx.style.height = h + "px";
  
  },
  methods:{
    // ...mapActions(['getOrder'])
  }
}

</script>

<style lang="scss" scoped>
.boxx{
  // height: 80%;
        width: 100%;

  overflow-y: scroll;


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