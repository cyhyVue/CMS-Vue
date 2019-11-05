<template>
  <div class="home">
  <div class="home-box">
    <div class="hbox">
      <el-row>
        <el-col :span="23" push="1" style="  height: 60px;
  line-height: 60px;">
          <span>
            实时概况
            更新时间：2019-11-05 15:26:49
            <i class="el-icon-warning-outline"></i>
          </span>
        </el-col>
      </el-row>
      <div class="left">
        <el-row style="height:50%">
          <el-col :span="10" push="2" style="  height: 60px;">
            <p class="text">支付订单数</p>
            <p class="text1">0</p>
            <p class="text2">昨日0</p>

          </el-col>
          
          <el-col :span="10" push="2"  style="  height: 60px;">
            <p class="text">支付金额(元)</p>
            <p class="text1">0.00</p>
            <p class="text2">昨日0.00</p>
          </el-col>
        </el-row>
        <el-row style="height:50%;">
           <el-col :span="10" push="2"  style="  height: 60px;">
             <p class="text">浏览量</p>
            <p class="text1">3<i class="el-icon-top"></i></p>
            <p class="text2">昨日0</p>
          </el-col>
          <el-col :span="10" push="2"  style="  height: 60px;">
            <p class="text">累计客户数</p>
            <p class="text1">1</p>
            
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <el-row style="height:50%">
          <el-col :span="10" push="2"  style="  height: 60px;">
            <p class="text">本月目标(元)</p>
            <p class="text1">100000.00</p>
            
          </el-col>
          <el-col :span="10" push="2"  style="  height: 60px;">
             <p class="text">完成进度(%)</p>
            <p class="text1">49%</p>
            
          </el-col>
        </el-row>
        <el-row style="height:50%;">
           <el-col :span="10" push="2"  style="  height: 60px;">
             <p class="text">可用店铺余额(元)</p>
            <p class="text1">16580000.00</p>
          
          </el-col>
          <el-col :span="10" push="2"  style="  height: 60px;">
             <p class="text">待结算(元)</p>
            <p class="text1">45820.00</p>
            
          </el-col>
        </el-row>

      </div>
     
    </div>

    <div class="hbox2">
      <el-row>
        <el-col :span="23" push="1" style="  height: 60px;
  line-height: 60px;">
          <span>
           智能助手
            <i class="el-icon-warning-outline"></i>
          </span>
        </el-col>
      </el-row>
      <div class="left1">
        
      </div>
      <div class="right1">
       

      </div>
     
    </div>

     <div class="hbox2">
      <el-row>
        <el-col :span="23" push="1" style="  height: 60px;
  line-height: 60px;">
          <span>
           智能助手
            <i class="el-icon-warning-outline"></i>
          </span>
        </el-col>
      </el-row>
      <div class="left1">
        
      </div>
      <div class="right1">
       

      </div>
     
    </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 640px;
  overflow: auto;
}

.hbox {
  width:1030px;
  height: 290px;
  background: rgb(255, 255, 255);
}
.hbox2{
  width:1030px;
  height: 290px;
  background: rgb(255, 255, 255);
  margin-top:20px;

}

.left{
   display: inline-block;
  width: 49.9%;
  height: 200px;
  background: rgb(255, 255, 255);
  border-right: 1px solid rgb(155, 155, 155)

}
.right {
  display: inline-block;
  width: 50%;
  height: 200px;
  background: rgb(255, 255, 255);
}
.text{
  font-size: 16px;
  color: rgb(112, 112, 112);
  margin-top:10px;
}
.text1{
  margin-top:10px;
   font-size: 22px;
   font-weight: 900;

}
.text2{
  font-size: 14px;
  color: rgb(124, 124, 124)
}
.left1{
   display: inline-block;
  width: 24.9%;
  height: 200px;
  background: rgb(255, 255, 255);
  border-right: 1px solid rgb(155, 155, 155)

}
.right1 {
  display: inline-block;
  width: 75%;
  height: 200px;
  background: rgb(255, 255, 255);
}
</style>