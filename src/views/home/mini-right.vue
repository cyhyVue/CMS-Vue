<template>
  <div class="mini">
    <div class="mini0" style="height:160px;">
      <img src="https://img.yzcdn.cn/upload_files/2019/11/05/FsXtsnrT7NdUs9OmCWwOuDClsP2_.png" alt />
    </div>

    <div style="margin-top: 20px;text-indent:20px;" class="mini0">
      <div class="kf">
        <i class="el-icon-phone"></i> 桌面在线客服
      </div>
      <div class="kf">
        <i class="el-icon-s-platform"></i> 移动端在线客服
      </div>
    </div>
    <div class="mini1">
      <span>产品动态</span>
      <div v-for="(item,idx) in adArr " :key="idx">
        <p v-cloak>{{item.desc}}</p>
      </div>
    </div>
    <div class="mini1">
      <span>有赞头条</span>
      <div v-for="(item,idx) in adArr " :key="idx">
        <p v-cloak>{{item.desc}}</p>
      </div>
    </div>
    <div class="mini1">
      <span>最新动态</span>
      <div v-for="(item,idx) in adArr " :key="idx">
        <p v-cloak>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getadArr"])
  },
  computed: {
    ...mapState(["adArr"])
  },
  mounted() {
    this.getadArr();
  }
};
</script>

<style lang="scss" scoped>
.mini1 {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background: #fff;
  text-indent: 20px;

  > span {
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 900;
  }
}
p {
  font-size: 14px;
  line-height: 30px;
  color: rgb(116, 93, 93);
}
.mini0 {
  width: 100%;
  height: 130px;
  background: #fff;
}
.mini {
  width: 18%;
  background: rgb(230, 230, 231);

  height: 100%;
  float: right;
  margin-right: 10px;
}
.kf {
  height: 65px;
  width: 100%;
  line-height: 65px;
  background: rgb(148, 218, 177);
}
</style>