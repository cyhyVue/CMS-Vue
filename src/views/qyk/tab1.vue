<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="权益卡管理" name="manage">
        <router-link to="newqyk"><el-button type="primary">新增权益卡</el-button></router-link>
      
      <tab2></tab2>

    </el-tab-pane>
    <el-tab-pane label="领卡记录" name="record">领卡记录</el-tab-pane>
    <el-tab-pane label="退卡记录" name="quit">退卡记录</el-tab-pane>
  </el-tabs>
</template>

<script>
import tab2 from "./tab2";

export default {
  data() {
    return {
      activeName: "manage"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    tab2
  }
};
</script>

<style lang="scss" scoped>
</style>