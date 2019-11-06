<template>
  <div class="Comhead">
    <!-- 公共头部如下 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
           <el-menu-item index="1">销售中</el-menu-item>
           <el-menu-item index="2">已售罄</el-menu-item>
           <el-menu-item index="3">仓库中</el-menu-item>
      </el-menu>
      <div class="line"></div>

      <el-row>
           <el-button type="primary">发布商品</el-button>
      </el-row>

<!-- 灰色部分如下 -->
<div>

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


  <div>
    <!-- 列表详情如下 -->
            <el-table
            ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="30">
    </el-table-column>
 

    <!-- :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    > -->
    <el-table-column
      prop="pri"
      label="商品 价格"
      sortable
      width="110">
    </el-table-column>
    <el-table-column
      prop="name"
      label="访问量"
      sortable
      width="100">
    </el-table-column>
    <el-table-column
      prop="adds"
      label="库存"
      sortable
      width="110">
    </el-table-column>
      <el-table-column
      prop="adds"
      label="总销量"
      sortable
      width="110">
    </el-table-column>
       <el-table-column
      label="创建时间"
      width="100">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
      <el-table-column
      prop="adds"
      label="序号"
      sortable
      width="130">
    </el-table-column>

    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div style="margin-top: 20px">
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button>改分组</el-button>
    <el-button>下架</el-button>
    <el-button>批量设置</el-button>
  </div>


  </div>
  <!-- 列表详情如上 -->

 </div>
</template>

<script>
export default {
  data() {
    return {


             options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input: '',
         tableData: [{
          date: '2016-05-02',
          pri:'12',
          name: '123',
          adds:'11541',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          pri:'1',
          name: '123',
          adds:'1131',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          pri:'11',
          name: '123',
          adds:'1121',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          pri:'1333',
          name: '123',
          adds:'1111',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
          handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    formatter(row, column) {
        return row.address;
      },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
       
  }
};
</script>


<style>
  
</style>

