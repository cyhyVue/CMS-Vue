<template>
  <div class="cliend_new">
      <div class="cliend_new_content">
          <div class="cliend_new_content_top">
              <el-row>
                <el-col :span="4"><div class="grid-content bg-purple" id="box">
                    <Elastic></Elastic>
                    <!-- <el-button type="primary" class="cliend_new_button1">添加客户</el-button> -->
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light">
                <el-button type="text" class="cliend_new_button">粉丝管理</el-button>
                    </div></el-col>
                </el-row>
          </div>
            <Main></Main>
            <Footer></Footer>
            <Bottom></Bottom>
          
      </div>
  </div>
</template>

<script>
import Main from './Main.vue'
import Footer from './Footer.vue'
import Bottom from './Bottom.vue'
import Elastic from './Elastic.vue'
export default {
    components: {
        Main,
        Footer,
        Bottom,
        Elastic
    }
}
</script>

<style lang="scss" scoped>
.cliend_new {
    width: 1026px;
    // height: 734px;
    background: #ffffff;
    margin: 17px 17px 0 17px;
    padding: 16px 0 0 16px;
    > .cliend_new_content {
        width: 1008px;
        // height: 718px;
        background: #f7f8fa;
        > .cliend_new_content_top{
            height: 52px;
            background: #ffffff;
        }
    }
    
}
#box {

}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #ffffff;
  }
  .cliend_new_button {
      float: right;
      font-size: 15px;
  }
</style>