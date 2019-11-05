<template>

  <div class="login-box">
    <el-container>
      <el-header style="height: 96px;">
        <img src="../../assets/logo.png" alt />
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div class="imp-box">
                <p>账号登录</p>
                <div class="inp1">
                  <el-input placeholder="请输入账号" v-model="input1" clearable ></el-input>
                </div>
                <div class="inp2">
                  <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
                </div>
                <div class="bt1"><el-button type="primary" style="width: 100%">登录</el-button></div>
                <div class="che1">
                  <el-checkbox v-model="checked">已阅读并同意</el-checkbox><a target="_blank" rel="noopener noreferrer" href="https://www.youzan.com/intro/rule/detail?alias=14nykbyyf&amp;pageType=rules">《用户使用协议》</a>
                </div>
                    
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <img src="https://b.yzcdn.cn/public_files/1e97c2268d18bd0231fb5b0a512b8d7f.png" alt />
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <div class="foot"> <p style="text-align:center;font-size:12px;color:#666">© 2012 - 2019 zhh.com</p></div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      checked: true
    };
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  margin: 0 auto;
  width: 900px;
  .el-header {
    background-color: rgb(255, 255, 255);
    color: #333;
    line-height: 96px;
    border-bottom: 1px solid rgb(228, 228, 228);
    img {
      width: 180px;
      display: inline-block;
      margin-top: 35px;
      margin-left: -30px;
    }
  }
}
.el-col {
  margin-top:50px;
  height: 500px;
  background: rgb(255, 255, 255);
  img {
    width: 380px;
    margin-left: 40px;
  }

  .imp-box {

    width: 385px;
    height: 350px;
    background: rgb(255, 255, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    > p {
      font-size: 20px;
      height: 70px;
      line-height: 75px;
      background: rgb(255, 255, 255);
      font-weight: 900;
      text-indent: 20px;
    }
    .inp1,.inp2,.bt1,.che1{
   width: 92%;
   margin:25px auto;
   
   
    }
    
  }
}
</style>