<template>
  <div class="hbox">
    <el-row :span="23">
      <el-col :span="23" :push="1" style="  height: 60px;
  line-height: 60px;">
        <span>
          实时概况
          更新时间：
          <span>{{data}}</span>
          <i class="el-icon-warning-outline"></i>
        </span>
      </el-col>
    </el-row>

    <div class="left">
      <div v-for="(item,idx) in topArr.list" :key="idx">
        <el-col :span="10" :push="2" style="  height: 100px;">
          <p class="text" v-text="item.type">支付订单数</p>
          <p class="text1" v-text="item.newmsg">0</p>
          <span class="text2">昨日:</span>
          <span class="text2" v-text="item.msg">昨日0</span>
        </el-col>
      </div>
    </div>

    <div class="right">
      <el-row>
        <div v-for="(item,idx) in topArr1.list" :key="idx">
          <el-col :span="10" :push="2" style="  height: 80px;">
            <p class="text" v-text="item.type">支付订单数</p>
            <p class="text1" v-text="item.newmsg">0</p>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      data: new Date().getHours() + ":" + new Date().getMinutes()
    };
  },
  computed: {
    ...mapState(["topArr"]),
    ...mapState(["topArr1"])
  },
  mounted() {
    this.gettopArr(), this.gettopArr1();
  },
  methods: {
    ...mapActions(["gettopArr"]),

    ...mapActions(["gettopArr1"])
  }
};
</script>

<style lang="scss" scoped>
.hbox {
  width: 100%;
  height: 290px;
  background: rgb(255, 255, 255);
  display: inline-block;
}

.left {
  display: inline-block;
  width: 49%;
  height: 200px;
  background: rgb(255, 255, 255);
  border-right: 1px solid rgb(155, 155, 155);
  > .el-col {
    margin-bottom: 30px;
  }
}
.right {
  display: inline-block;
  width: 49%;
  height: 200px;
  background: rgb(255, 255, 255);
  > .el-col {
    > .text1 {
      margin-top: 10px;
    }

    margin-bottom: 10px;
  }
}
.text {
  font-size: 16px;
  color: rgb(110, 82, 82);
  margin-top: 10px;
}
.text1 {
  margin-top: 10px;
  font-size: 22px;
  font-weight: 600;
}
.text2 {
  font-size: 12px;
  color: rgb(124, 124, 124);
}
</style>