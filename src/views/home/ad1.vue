<template>
  <div class="ad1">
    <el-col :span="8" :push="1" style="height:20%;font-size:20px;">学习交流</el-col>

    <el-row type="flex" justify="space-around" align="middle">
      <el-col :span="6">
        <div class="box">
          <img src="http://static.yingyonghui.com/icon/128/6550026.png" alt srcset />
          <div style="display: inline-block;color:#fff;">
            <p class="pt1">123456</p>
            <p class="pt2">123456</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <img src="http://static.yingyonghui.com/icon/128/6549720.png" alt srcset />
          <div style="display: inline-block;color:#fff;">
            <p class="pt1">123456</p>
            <p class="pt2">123456</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <img src="http://static.yingyonghui.com/icon/128/6549999.png" alt srcset />
          <div style="display: inline-block;color:#fff;">
            <p class="pt1">123456</p>
            <p class="pt2">123456</p>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around" align="middle">
      <el-col :span="6">
        <div class="box">
          <img src="http://static.yingyonghui.com/icon/128/6548996.png" alt srcset />
          <div style="display: inline-block;color:#fff;">
            <p class="pt1">123456</p>
            <p class="pt2">123456</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <img src="http://static.yingyonghui.com/icon/128/6548120.png" alt srcset />
          <div style="display: inline-block;color:#fff;">
            <p class="pt1">123456</p>
            <p class="pt2">123456</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box">
          <img src="http://static.yingyonghui.com/icon/128/6547898.png" alt srcset />
          <div style="display: inline-block;color:#fff;">
            <p class="pt1">123456</p>
            <p class="pt2">123456</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ad1 {
  width: 100%;
  height: 260px;
  margin-top: 20px;
      color: #666;

  background: rgb(255, 255, 255);
  > .el-row {
    height: 100px;
    width: 100%;
      

    > .el-col {
      height: 90%;
      background: rgb(255, 255, 255);
      
    }
  }
}
img {
  height: 65px;
}
p{
      color: #666;

}

.pt1,
.pt2 {
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 200%;
}
.pt1 {
  font-weight: 900;
  text-indent: 10px;
}
</style>