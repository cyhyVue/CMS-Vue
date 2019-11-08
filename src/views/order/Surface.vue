  <template>
  <div>
    <el-table
    ref="multipleTable"
      :data="orderArr2"
      style="width: 100%"
      >
      <el-table-column
        prop="src"
        label="商品"
        width="180">
        <template scope="scope">
            <img :src="scope.row.src" style="max-width: 60px;
    max-height: 60px;
    vertical-align: middle;">
        </template>
        <!-- <img src="https://img.yzcdn.cn/upload_files/2018/01/22/FnlHRufXMtUI_AbAEP0tux_nDL1T.png?imageView2/2/w/120/h/120/q/75/format/webp"
        style="max-width: 60px;
    max-height: 60px;
    vertical-align: middle;"> -->
      </el-table-column>
      <el-table-column
        prop="current_price"
        label="单价(元) / 数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Quantity"
        label="售后">
      </el-table-column>
      <el-table-column
        prop="name"
        label="买家 / 收货人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="current_zent"
        label="配送方式">
      </el-table-column>
      <el-table-column
        prop="Paid amount"
        label="实收金额(元)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Order Status"
        label="订单状态">
      </el-table-column>
    </el-table>

<div class="block">
    <el-pagination class="ccc"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5]"
      style="float:right;width:358px;margin-top:20px"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10">
    </el-pagination>
  </div>
    </div>
  </template>

  <script>
  import { mapState,mapActions,mapMutations } from 'vuex'
  export default {
    
      props:['item'],
      computed:{
          ...mapState(['orderArr2']),
      },
      data(){
          return{
              form:[{
                  name:"",
                  region:"",
                  date1:"",
                  date2:"",
                  delivery:false,
                  type:[],
                  resource:"",
                  desc:""
              }],
              multipleTable:[]
      };
      },
      mounted() {
          this.getOrder()
      },
      methods:{
          ...mapActions(['getOrder']),
          ...mapMutations(['updateOrderArr']),
          onSubmit(){
              console.log("1234",)
          },
          toggleSelection(rows){
              if(rows){
                  rows.forEach(row=>{
                      this.$refs.multipleTable.toggleRowSelection(row);
                  });
              }else{
                  this.$refs.multipleTable.clearSelection();
              }
          },
          handleSelectionChange(val){
              this.multipleSelection = val;
          },
          handleSizeChange(val){
              console.log('每页 ${val} 条');
          },
          handleCurrentChange(val){
              console.log('当前页：${val}');
              this.updateOrderArr({page:val})
          }
      }
      

};
    // export default {
    //   data() {
    //     return {
    //       tableData: [{
    //         date: '2016-05-02',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1518 弄'
    //       }, {
    //         date: '2016-05-04',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1517 弄'
    //       }, {
    //         date: '2016-05-01',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1519 弄'
    //       }, {
    //         date: '2016-05-03',
    //         name: '王小虎',
    //         address: '上海市普陀区金沙江路 1516 弄'
    //       }]
    //     }
    //   }
    // }
  </script>
  <style lang="scss" scoped>
.block{
        margin-top: 16px;
        display: block;
        .ccc{
            display: flex;
            justify-content: flex-end;
            font-size: 14px;
        }
}
</style>

