<template>
  <div class="table1">
    <el-table  :data="qykArr" style="width: 100%;">
      <el-table-column fixed prop="name" label="权益卡名称" width="200"></el-table-column>
      <el-table-column prop="term" label="领取条件" width="200"></el-table-column>
      <el-table-column prop="date2" label="有效期" width="200"></el-table-column>
      <el-table-column  label="权益" width="300"><div v-for="(item,idx) in qykArr" :key="idx"><span v-text="item.power[idx]"></span></div></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row >
  <el-col :span="6" :offset="15"><div class="grid-content bg-purple"><el-pagination :push="5" background layout="prev, pager, next" :total="30"></el-pagination></div></el-col>
</el-row>
    
  </div>
</template>



<script>
import {mapActions,mapMutations,mapState} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  methods: {
        ...mapActions(['getqykArr']),
    ...mapMutations(['upqykArr']),
    handleEdit(index, row) {
      console.log(index, row);

    },
    handleDelete(index, row) {
      console.log(index, row);
    },

   
  },
  computed: {
    ...mapState(["qykArr"]),
    
  },
   mounted() {
    this.getqykArr();
    
    console.log(this.tableData);
    
  }
};
</script>



<style lang="scss" scoped>
.el-table-column {
  background: #666;
}
.el-col{
    margin-bottom:20px;

    margin-top:20px;
}

</style>