<template>
  <div class="hbox2">
    <div class="tab">
      <el-tabs style="margin-left:40px;" v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部事项" name="qb">
          <div class="main-text">
            <div v-for="(item,idx) in glArr" :key="idx">
              <p>
                <i class="el-icon-warning"></i>
                <em v-text="item.desc"></em>
                <a>立即处理</a>
              </p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="店铺基础" name="dp">店铺基础</el-tab-pane>
        <el-tab-pane label="商品体验" name="sp">商品体验</el-tab-pane>
        <el-tab-pane label="物流体验" name="wl">物流体验</el-tab-pane>
        <el-tab-pane label="售后管理" name="sh">售后管理</el-tab-pane>
        <el-tab-pane label="服务管理" name="fw">服务管理</el-tab-pane>
        <el-tab-pane label="流量表现" name="ll">流量表现</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      activeName: "qb"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    ...mapActions(["getglArr"])
  },
  computed: {
    ...mapState(["glArr"])
  },
  mounted() {
    this.getglArr();
  }
};
</script>

<style lang="scss" scoped>
.hbox2 {
  width: 100%;
  height: 290px;
  background: rgb(255, 255, 255);
  margin-top: 20px;
  display: inline-block;
}
.main-text {
  width: 100%;
  height: 230px;
  overflow-y: scroll;
}
p {
  color: rgb(105, 70, 70);
}
a {
  color: blue;
  position: relative;
  right: -330px;
}
</style>