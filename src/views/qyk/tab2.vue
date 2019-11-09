<template>
     <!-- //二级选项卡 -->
         <div class="t-box">
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="使用中" name="inuse">
        <table1></table1>

    </el-tab-pane>
    <el-tab-pane label="已禁用" name="forb">配置管理</el-tab-pane>
    <el-tab-pane label="已过期" name="lose">角色管理</el-tab-pane>
   
  </el-tabs>
         </div>
</template>

<script>
import table1 from './table1'
export default {
 data() {
      return {
        activeName: 'inuse'
      

      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        table1
    }
}
</script>

<style lang="scss" scoped>

    .t-box{
        padding-top: 20px;
    }
</style>