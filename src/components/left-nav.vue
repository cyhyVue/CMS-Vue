<template>
  <div class="home">

      <el-container>
  <el-aside width="150px" align="middle" >
      
       <el-col style="height:70px;" :span="24"><img src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg" alt=""></el-col>
       <el-col :span="24"><span class="tab on">概况</span></el-col>
       <el-col :span="24"><span class="tab">商品</span></el-col>
       <el-col :span="24"><span class="tab">订单</span></el-col>
       <el-col :span="24"><span class="tab">客户</span></el-col>

  </el-aside>
  <el-container>
    <el-header height="70px" >
         <div style="float:left;line-height:70px;"><span class="name">xxzhh</span><span class="vip">SVIP</span><span class="vip">有赞担保</span></div>
         
         <div style="float:right;line-height:70px"><i class="el-icon-user-solid"></i><span class="call">1867920000</span>></div>
    </el-header>
    <el-main>

      <router-view></router-view>

        
    </el-main>
  </el-container>
</el-container>

  </div>
</template>

<script>
export default {

}


</script>

<style lang="scss" scoped>
.name{
    font-weight: 900;
    font-size: 20px;
}
.el-aside{
  background: rgb(67, 67, 67);

  
}
.el-aside:first-child{
    height: 100%;
}
.el-header{
  background-color: rgb(255, 255, 255);
  
}
.el-col{
    height: 50px;

}
.tab{
    display: block;
    line-height: 50px;
    width: 100%;
    height: 100%;
    color: rgb(255, 205, 205)
}
.on{
    color: #383838;
    background: rgb(255, 255, 255);
}
    
    img{
  
    height: 55%;
    border-radius: 50%;
    line-height: 50px;
    margin-top:9%;
    

}
.call{
    margin-left:10px;
    margin-right:10px;

    font-size: 17px;
    color: rgb(90, 71, 71);

}
.vip{
    
    border:solid 1px #666;
    color: rgb(255, 0, 0);
    border-radius: 2px;
    margin-left:10px;
    font-size: 12px;

}
</style>