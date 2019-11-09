<template>
  <div class="home">

      <el-container>
  <el-aside width="150px"  style=" height: 1000px;text-align:center" >
      
       <el-col style="height:70px;" :span="24"><img src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!60x60.jpg" alt=""></el-col>
       <el-col :span="24"><router-link to="/home" tag="span" class="tab" activeClass="active">概况</router-link></el-col>
       <el-col :span="24"><router-link  to="/Commodity" tag="span" class="tab" activeClass="active">商品</router-link></el-col>
       <el-col :span="24"><router-link to="/Order" tag="span" class="tab" activeClass="active">订单</router-link></el-col>
       <el-col :span="24"><router-link to="/client" tag="span" class="tab" activeClass="active">客户</router-link></el-col>
       <el-col :span="24"><router-link to="/qyk" tag="span" class="tab" activeClass="active">权益卡</router-link></el-col>

        

  </el-aside>
  <el-container>
    <el-header height="70px" >
         <div style="float:left;line-height:70px;"><span class="name">xxzhh</span><span class="vip">SVIP</span><span class="vip">有赞担保</span></div>
         
         <div style="float:right;line-height:70px"><i class="el-icon-user-solid"></i><span class="call">1867920000</span>>
         
         <el-button type="danger" round size="mini" style="margin-left:20px" @click="click"><em>退出</em></el-button>
          
         </div>
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
data() {
  return {
   
}
},
methods: {
  click(){
    this.$confirm('', '确定要退出账号吗?', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '手滑了'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '账号退出成功!'
            });
              let res = []
    localStorage.setItem('login',JSON.stringify(res))
        setTimeout(()=>{
         this.$router.replace('/login')
      },1000)
          })
          .catch(action => {
            
          });
  
  }
  
},
}


</script>

<style lang="scss" scoped>
.el-main{
  height: 100%;
  overflow-y: scroll;

}
.active{
  background: rgb(255, 255, 255);
  color: rgb(26, 26, 26)!important;
  font-size: 18px;

}
.name{
    font-weight: 1200;
    font-size: 20px;
}
.el-aside{
  background: rgb(67, 67, 67);

 

  
}
span:hover{
  
  font-size: 18px;
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
    color: rgb(245, 197, 197)
}
.on{
    color: #1a1a1a;
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