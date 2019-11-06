<template>
  <div class="Comhead">
 <el-row>
           <el-button type="primary">发布商品</el-button>
      </el-row>

<!-- 灰色部分如下 -->
<div class="cbox">

<el-row type="flex" class="row-bg" align="middle">
  <el-col :span="3">商品名称或编码:</el-col>
  <el-col :span="3"><el-input v-model="input" placeholder=""></el-input></el-col>
  <el-col :span="3">商品分组:</el-col>
  <el-col :span="3"><el-select v-model="value" placeholder="全部">
               <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select></el-col>
  <el-col :span="3">商品类型:</el-col>
  <el-col :span="3"><el-select v-model="value" placeholder="全部">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select></el-col>
</el-row>

      <el-row type="flex" class="row-bg" align="middle">
          <el-col :span="3">总销量:</el-col>
        <el-col :span="1"><el-input v-model="input" placeholder=""></el-input></el-col>
          <el-col :span="1">---</el-col>
        <el-col :span="1"><el-input v-model="input" placeholder=""></el-input></el-col>
          <el-col :span="3">价格:</el-col>
        <el-col :span="1"><el-input v-model="input" placeholder=""></el-input></el-col>
          <el-col :span="1">---</el-col>
        <el-col :span="1"><el-input v-model="input" placeholder=""></el-input></el-col>
          <el-col :span="3">库存扣减方式:</el-col>
        <el-col :span="3"><el-select v-model="value" placeholder="全部">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select></el-col>
      </el-row>

      <el-row>
           <el-button type="primary">筛选</el-button>
           <el-button>导出报表</el-button>
            <!-- <el-link type="primary">查看已生成报表</el-link>
            <el-link type="primary">清空筛选条件</el-link> -->

             <el-button type="text">查看已生成报表</el-button>
             <el-button type="text">清空筛选条件</el-button>
      </el-row>
  </div>
  <!-- 灰色部分如上 -->
 </div>
</template>

<script>
  import {options} from '@/assets/index'
export default {
  data() {
    return {
      options,
        input: '',
          value: '',
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
.combody {
  background: white;
}
.cbox{
  padding:5px 0 15px 0; 
  background: rgb(248,248,248);
  margin: 5px 0 5px 0
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


