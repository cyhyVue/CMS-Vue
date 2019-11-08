<template>
  <div class="cliend_footer">
    <div class="cliend_footer_new">
      <div style="margin-top: 20px"></div>
        <el-table
          ref="multipleTable"
          :data="clientArr2"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">              
            </el-table-column>

            <el-table-column prop="names" label="客户" width="100">     
            </el-table-column>

            <el-table-column prop="city" label="地区" width="100">      
            </el-table-column>

            <el-table-column prop="Telephone" label="电话" width="100" show-overflow-tooltip>
            </el-table-column>

            <el-table-column prop="balance" label="存储余额" width="100" show-overflow-tooltip>
            </el-table-column>

            <el-table-column prop="buy" label="购买次数" width="100" show-overflow-tooltip>
            </el-table-column>
            
            <el-table-column prop="all" label="累计消费金额" width="120" show-overflow-tooltip>
            </el-table-column>

            <el-table-column prop="date" label="上次消费时间" width="120" show-overflow-tooltip>
            </el-table-column>

            <el-table-column prop label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
                </el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
    <div style="width:1008px;height:55px;">
      <el-col :span="1"></el-col>
      <el-col :span="2">
        <span style="width:25px;height:54px;line-height: 54px;
    text-align: center">当前选页</span>
      </el-col>

      <el-col :span="3">
        <el-select v-model="value1" placeholder="加标签">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label1"
            :value="item.value1">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="3">
        <el-select v-model="value2" placeholder="给积分">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label2"
            :value="item.value2">
          </el-option>
        </el-select>
      </el-col>
      
      <el-col :span="2">
        <el-select v-model="value3" placeholder="更多">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label3"
            :value="item.value3"
          ></el-option>
        </el-select>
      </el-col>
    </div>

    <div style="width:1008px;height:40px;">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// import { removeListener } from 'cluster';
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      num: 1,
      options: [
        {
          value1: "选项1",
          label1: "黄金糕",
          value2: "选项1",
          label2: "我啊",
          value3: "选项1",
          label3: "牛了"
        },
        {
          value1: "选项2",
          label1: "双皮奶",
          value2: "选项2",
          label2: "哎呀",
          value3: "选项2",
          label3: "黄金糕"
        },
        {
          value1: "选项3",
          label1: "哎",
          value2: "选项3",
          label2: "哈哈",
          value3: "选项3",
          label3: "黄"
        },
        {
          value1: "选项4",
          label1: "男生",
          value2: "选项4",
          label2: "不管",
          value3: "选项4",
          label3: "啦糕"
        },
        {
          value1: "选项5",
          label1: "不做",
          value2: "选项5",
          label2: "年月",
          value3: "选项5",
          label3: "黑恶"
        }
      ],
      value1: "",
      value2: "",
      value3: "",
      input: ""
    };
  },
  computed: {
    ...mapState(["clientArr2"])
  },
  mounted() {
    this.getClient();
    setTimeout(() => {
      console.log("=================>>>>", this.clientArr2);
    }, 1000);
  },
  methods: {
    handleCheckAllChange(val) {},
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleChange(value) {
      console.log(value);
    },
    handleCurrentChange(val) {
      this.updateClientArr({ page: val });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      row = this.tableData = this.clientArr2;
      row.splice(index, 1);
    },
    ...mapMutations(["updateClientArr"]),
    ...mapActions(["getClient"])
  }
};
</script>

<style lang="scss" scoped>
.block {
  float: right;
}
.cliend_footer {
  height: 350px;
  background: #ffffff;
}
.cliend_footer_top {
  height: 52px;
  background: #f7f8fa;
}
.cliend_footer_new {
  height: 250px;
  background: #ffffff;
  overflow: scroll;
}
.cliend_footer_new_box {
  height: 65px;
  margin-left: 14px;
}
.cliend_footer_top_span1 {
  width: 42px;
  display: inline-block;
  height: 52px;
  line-height: 52px;
  text-align: center;
}
.cliend_footer_footer_span1 {
  width: 42px;
  height: 52px;
  display: inline-block;
  line-height: 52px;
  text-align: center;
}
</style>