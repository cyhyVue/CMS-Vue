<template>
  <div class="home">
  <div class="home-box">
    <div class="hbox">
      <el-row :span="23">
        <el-col :span="23" :push="1" style="  height: 60px;
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
          <el-col :span="10" :push="2" style="  height: 60px;">
            <p class="text">支付订单数</p>
            <p class="text1">0</p>
            <p class="text2">昨日0</p>

          </el-col>
          
          <el-col :span="10" :push="2"  style="  height: 60px;">
            <p class="text">支付金额(元)</p>
            <p class="text1">0.00</p>
            <p class="text2">昨日0.00</p>
          </el-col>
        </el-row>
        <el-row style="height:50%;">
           <el-col :span="10" :push="2"  style="  height: 60px;">
             <p class="text">浏览量</p>
            <p class="text1">3<i class="el-icon-top"></i></p>
            <p class="text2">昨日0</p>
          </el-col>
          <el-col :span="10" :push="2"  style="  height: 60px;">
            <p class="text">累计客户数</p>
            <p class="text1">1</p>
            
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <el-row style="height:50%">
          <el-col :span="10" :push="2"  style="  height: 60px;">
            <p class="text">本月目标(元)</p>
            <p class="text1">100000.00</p>
            
          </el-col>
          <el-col :span="10" :push="2"  style="  height: 60px;">
             <p class="text">完成进度(%)</p>
            <p class="text1">49%</p>
            
          </el-col>
        </el-row>
        <el-row style="height:50%;">
           <el-col :span="10" :push="2"  style="  height: 60px;">
             <p class="text">可用店铺余额(元)</p>
            <p class="text1">16580000.00</p>
          
          </el-col>
          <el-col :span="10" :push="2"  style="  height: 60px;">
             <p class="text">待结算(元)</p>
            <p class="text1">45820.00</p>
            
          </el-col>
        </el-row>

      </div>
     
    </div>
    
    
      <!-- //2222222222222222222222222222222222222222222 -->

    <div class="hbox2">
      <div class="tab" >
          <el-tabs  style="margin-left:40px;" v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane  label="全部事项" name="qb">
      <div class="main-text">
       
        <p>1231546879</p>
        <p>1231546879</p>
        <p>1231546879</p>
        <p>1231546879</p>
        
        
    
      </div>

    </el-tab-pane>
    <el-tab-pane label="店铺基础" name="dp">店铺基础</el-tab-pane>
    <el-tab-pane label="商品体验" name="sp">商品体验</el-tab-pane>
    <el-tab-pane label="物流体验" name="wl">物流体验</el-tab-pane>
    <el-tab-pane label="售后管理" name="sh">售后管理</el-tab-pane>
    <el-tab-pane label="服务管理" name="fw">服务管理</el-tab-pane>
    <el-tab-pane label="流量表现" name="ll">流量表现</el-tab-pane>
  </el-tabs>
      </div>
     
    </div>
    <!-- ////最新推荐 -->
    <div class="ad">
   <el-col :span="2" :push="1" style="height:20%;font-size:20px;">最新推荐</el-col>
  <el-row type="flex" class="row-bg" justify="space-around" align="middle" >

  <el-col :span="5" ><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="5" ><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="5" ><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="5" ><div class="grid-content bg-purple"></div></el-col>

</el-row>
    </div>
    <div class="ad">
      经营建议

    </div>

     <div class="ad1">
         <el-col :span="2" :push="1" style="height:20%;font-size:20px;">学习交流</el-col>
         
      <el-row type="flex"  justify="space-around" align="middle">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
 
</el-row>

  <el-row type="flex"  justify="space-around" align="middle">
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
 
</el-row>
    </div>
    <div class="ad2">
       <el-col :span="2" :push="1" style="height:20%;font-size:20px;">更多推荐</el-col>
      <el-row type="flex"  justify="space-around" align="middle">
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>

    </div>

    </div>
    <div class="mini">
      <div class="mini0" style="height:160px;">
        <img src="https://img.yzcdn.cn/upload_files/2019/11/05/FsXtsnrT7NdUs9OmCWwOuDClsP2_.png" alt="">
      </div>
 
      <div style="margin-top: 20px;text-indent:20px;" class="mini0">
        <div class="kf"><i class="el-icon-phone"></i> 桌面在线客服</div>
        <div class="kf"><i class="el-icon-s-platform"></i> 移动端在线客服</div>
      </div>
      <div class="mini1">
        <span>产品动态</span>
        <p>12345678</p>
        <p>12345678</p>
        <p>12345678</p>
        <p>12345678</p>
        <p>12345678</p>
      </div>
      <div class="mini1"></div>
      <div class="mini1"></div>
    
      
      </div>
      
</div>
 
</template>

<script>
export default {
    data() {
      return {
        activeName: 'qb'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };

</script>

<style lang="scss" scoped>
.mini1{
  width: 100%;
  height: 200px;
  margin-top: 20px;
background: #fff;
 text-indent:20px;
 
>span{
  display:block;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-weight: 900;
}
>p{
  font-size: 14px;
  line-height: 30px;
  color: rgb(100, 100, 100)
}
}
.mini0{
  width: 100%;
  height: 130px;
background: #fff;

}
.main-text{
  width: 100%;
  height: 230px;
  overflow-y: scroll 

}
.ad2{
  width: 100%;
  height: 150px;
  background: #ffffff;
  margin-top: 20px;
  .el-row{
    width: 100%;
    height: 80%;
  >.el-col{
    height: 60px;
    background: rgb(252, 120, 120);
  }
  
  }
}
.home {
  height: 640px;
  overflow: auto;
  
}
.home-box{
  height: 100%;
  width:80%;
  float: left;
}
.mini{
  width:18%;
  background: rgb(247, 248, 250);
  height: 100%;
  float: right;
  margin-right:10px

 
  
}
 
.ad{
  width: 100%;
  height: 190px;
  margin-top: 20px;
  background: rgb(255, 255, 255);
 
  >.el-row{
    height: 80%;
    width: 100%;
    background: rgb(196, 173, 173);
    >.el-col{
      height: 70%;
      background: #000;
    }

  }


}
.ad1{
    width: 100%;
  height: 260px;
  margin-top: 20px;
  background: rgb(255, 255, 255);
  >.el-row{
    height: 100px;
    width: 100%;
    >.el-col{
      height: 90%;
      background: #000;
    }
  }

}

.hbox {
  width:100%;
  height: 290px;
  background: rgb(255, 255, 255);
  display: inline-block;

}
.hbox2{
  width:100%;
  height: 290px;
  background: rgb(255, 255, 255);
  margin-top:20px;
  display: inline-block;


}

.left{
   display: inline-block;
  width: 49%;
  height: 200px;
  background: rgb(255, 255, 255);
  border-right: 1px solid rgb(155, 155, 155)

}
.right {
  display: inline-block;
  width: 49%;
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
.kf{
  height: 65px;
  width: 100%;
  line-height: 65px;
  background: rgb(148, 218, 177);

}

</style>