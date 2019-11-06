<template>
  <div class="Comhead">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
           <el-menu-item index="1">销售中</el-menu-item>
           <el-menu-item index="2">已售罄</el-menu-item>
           <el-menu-item index="3">仓库中</el-menu-item>
      </el-menu>
      <!-- <div class="line"></div>
      <el-row>
           <el-button type="primary">发布商品</el-button>
      </el-row> -->
 </div>
</template>

<script>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.combody {
  background: white;
}
.el-menu-demo{
  padding-left: 10px;
  .el-menu-item{
    margin-left: 30px
  }
}
.el-row {
  margin-top: 10px;
  &:last-child {
    margin-bottom: 0;
    .el-button {
      margin-left: 10px;
    }
  }
}

</style>


export default Comhead