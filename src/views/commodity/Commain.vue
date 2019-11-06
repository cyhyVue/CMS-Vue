<template>
    <div class="Commain">
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
                    :data="tableData"
                    style="width: 100%"
                    :default-sort = "{prop: 'date', order: 'descending'}"
                    >
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
                  
                    >
                    </el-table-column>
                    <el-table-column label="操作">
                    <!-- <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template> -->
                       
                        <template slot-scope="scope">
                                <el-button
                                 @click="open"
                                @click.native.prevent="deleteRow(scope.$index, tableData)"
                                type="text"
                                size="small">
                                移除
                                </el-button>
                            </template>



                    </el-table-column>
                </el-table>


<!-- 底部下面 要加浮动-->
        <div class="bottom">
        <div style="margin-top: 20px" class="bleft">
            <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">当页全选</el-checkbox> -->
                    <el-button>取消选择</el-button>
                    <el-button>改分组</el-button>
                    <el-button>下架</el-button>
                    <el-button>批量设置</el-button>
        </div>
        <div class="block">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total=tableData.length>
                </el-pagination>
        </div>
        </div>
  </div>
  <!-- 列表详情如上 -->
  
</template>

<script>
import {tableData} from '@/assets/index'
export default {
    data(){
        return{
            tableData,
            // 分页功能
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
            
          handleSelectionChange(val) {
        this.multipleSelection = val;
      },
            
            
        //     // 全选
        //     checkAll: false,
        // checkedCities: ['上海', '北京'],
        // cities: cityOptions,
        // isIndeterminate: true   


        }  
        },
        methods:{
// 全选选项
// handleCheckAllChange(val) {
//         this.checkedCities = val ? cityOptions : [];
//         this.isIndeterminate = false;
//       },
//       handleCheckedCitiesChange(value) {
//         let checkedCount = value.length;
//         this.checkAll = checkedCount === this.cities.length;
//         this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
//       },

            // 分页功能
             handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

                    // 删除功能
                        deleteRow(index, rows) {
                         rows.splice(index, 1)
                        },
       
            // 删除商品确认弹框
            open() {
                    this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
   
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                    });
                },
 
  }
};
</script>

<style lang="scss" scoped>

.bottom{
   .bleft{
       float: left;
       margin-left:30px
   } 
   .block{
       float: right;
       margin: 20px 70px 0 0
   }
}
</style>


