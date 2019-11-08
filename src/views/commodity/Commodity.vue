<template>
  <div class="app" id="app" ref="com">
    <!-- 公共头部如下 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
           <el-menu-item index="1">销售中</el-menu-item>
           <el-menu-item index="2">已售罄</el-menu-item>
           <el-menu-item index="3">仓库中</el-menu-item>
      </el-menu>
      <!-- <div class="line"></div> -->
      <Comhead></Comhead>
      <Commain></Commain>

 </div>
</template>

<script>
import Comhead from './Comhead.vue'
import Commain from './Commain.vue'
export default {
  data() {
    return {   
    

      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
     handleSelect(key, keyPath) {
      console.log(key, keyPath);

    },
    
  },
  components:{
         Comhead,
         Commain
       },
       mounted() {
    let h = window.screen.height;
    console.log(h);
    h = h * 0.8;
    this.$refs.com.style.height = h + "px";
  }
};
</script>


<style>
  
</style>

