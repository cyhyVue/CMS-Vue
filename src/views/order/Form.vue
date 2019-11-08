<template>
    
<el-form ref="form" :model="form" label-width="80px" style="background:#f7f8fa;">
  <!-- <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item> -->
  <el-form-item label="订单搜索">
    <el-select v-model="form.region" placeholder="订单号">
      <el-option label="订单号"  value="beijing"></el-option>
      <el-option label="外部单号"  value="shanghai"></el-option>
      <el-option label="收货人姓名" value="hangzhou"></el-option>
      <el-option label="收货人手机号" value="nanjing"></el-option>
      <el-option label="收货人手机号后四位" value="sichuan"></el-option>
    </el-select>
    <el-input v-model="form.input" style="width:227px;padding-left:12px"></el-input>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="4.1">
      <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="1">至</el-col>
    <el-col :span="6">
      <el-date-picker type="date" placeholder="结束日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-row>
  <el-col :span="7"><el-form-item label="商品名称:">
      <el-input v-model="form.input" placeholder="请输入" style="width:215px;"></el-input></el-form-item></el-col>
  <el-col :span="7"><el-form-item label="订单类型:">
      <el-select v-model="form.name" placeholder="全部">
      <el-option label="全部" value="hunan"></el-option>
      <el-option label="普通订单" value="zhuzhou"></el-option>
      <el-option label="代付订单" value="guangxi"></el-option>
      <el-option label="送礼订单" value="nanhai"></el-option>
      <el-option label="送礼社群版订单" value="shantou"></el-option>
      <el-option label="心愿订单" value="yueyang"></el-option>
      <el-option label="分销供货订单" value="xitian"></el-option>
      <el-option label="扫码收款" value="weigou"></el-option>
      <el-option label="酒店订单" value="zouren"></el-option>
      <el-option label="维权订单" value="nanbeichao"></el-option>
      <el-option label="周期购订单" value="qingchao"></el-option>
      <el-option label="多人拼团订单" value="songchao"></el-option>
      <el-option label="知识付费订单" value="tangchao"></el-option>
      <el-option label="抽奖拼团订单" value="mingchao"></el-option>
      <el-option label="储值卡/礼品卡订单" value="huangjia"></el-option>
      <el-option label="分销买家订单" value="qingchao"></el-option>
      <el-option label="定金预售订单" value="hongjiu"></el-option>
      <el-option label="F码订单" value="lafei"></el-option>
      <el-option label="砍价0元购订单" value="luoman"></el-option>
      <el-option label="堂食点餐订单" value="boerduo"></el-option>
      <el-option label="海淘订单" value="guizu"></el-option>
      <el-option label="积分兑换订单" value="xixuegui"></el-option>
      <el-option label="社区团购订单" value="jiangshi"></el-option>
    </el-select>
    </el-form-item></el-col>
  <el-col :span="7">
      <el-form-item label="订单类型:"><el-select v-model="form.date1" placeholder="全部">
      <el-option label="全部" value="tianshidao"></el-option>
      <el-option label="退款处理中" value="zhongkui"></el-option>
      <el-option label="退款结束" value="tianshen"></el-option>
          </el-select></el-form-item>
  </el-col>
</el-row>
<el-row>
  <el-col :span="7"><el-form-item label="订单状态:"><el-select v-model="form.date2" placeholder="全部">
      <el-option label="全部" value="huangdi"></el-option>
      <el-option label="待付款" value="taijian"></el-option>
      <el-option label="待发货" value="yingxiong"></el-option>
      <el-option label="已发货" value="gouxiong"></el-option>
      <el-option label="已完成" value="dexing"></el-option>
      <el-option label="已关闭" value="lilei"></el-option>
      <el-option label="退款中" value="nanchang"></el-option>
          </el-select></el-form-item>
  </el-col>
  <el-col :span="7"><el-form-item label="配送方式:"><el-select v-model="form.desc" placeholder="全部">
      <el-option label="全部" value="rigou"></el-option>
      <el-option label="快递发货" value="namaipi"></el-option>
      <el-option label="上门自提" value="caonima"></el-option>
      <el-option label="同城配送" value="dongjing"></el-option>
          </el-select></el-form-item></el-col>
  <el-col :span="7"><el-form-item label="付款方式:"><el-select v-model="form.type" placeholder="全部">
      <el-option label="全部" value="shishigui"></el-option>
      <el-option label="微信支付" value="yinghuadao"></el-option>
      <el-option label="微信支付-自有"  value="fushishan"></el-option>
      <el-option label="银行卡支付" value="beihaidao"></el-option>
      <el-option label="支付宝支付" value="guangdao"></el-option>
      <el-option label="储值卡支付" value="changqi"></el-option>
      <el-option label="货到付款/到店付款" value="huoshanbaofa"></el-option>
      <el-option label="找人代付" value="shenyuexhanzheng"></el-option>
      <el-option label="赠品兑换" value="ribenchenmo"></el-option>
      <el-option label="优惠兑换" value="nanjingdatusha"></el-option>
      <el-option label="礼品卡支付" value="beimeizhou"></el-option>
      <el-option label="组合支付" value="dayangzhou"></el-option>
      <el-option label="分期支付" value="meiguo"></el-option>
      <el-option label="有赞零钱" value="jiujinshan"></el-option>
          </el-select></el-form-item></el-col>
</el-row>
<el-row>
  <el-col :span="7"><el-form-item label="订单来源:"><el-select v-model="form.resource" placeholder="全部">
      <el-option label="全部" value="niuyue"></el-option>
      <el-option label="微信-商家小程序" value="huashengdun"></el-option>
      <el-option label="微信-商家微商城" value="huarenjie"></el-option>
      <el-option label="百度-商家小程序" value="jianada"></el-option>
      <el-option label="有赞精选" value="erluoshi"></el-option>
      <el-option label="爱逛" value="bajishitan"></el-option>
      <el-option label="商家自有App" value="gangguo"></el-option>
      <el-option label="浏览器" value="shatewangguo"></el-option>
      <el-option label="支付宝" value="hanguo"></el-option>
      <el-option label="腾讯QQ" value="chaoxianguo"></el-option>
      <el-option label="微博" value="yuenan"></el-option>
      <el-option label="其他" value="aodaliya"></el-option>
          </el-select></el-form-item>
  </el-col>
  <el-col :span="7"><el-form-item label="是否加星:"><el-select v-model="form.onSubmit" placeholder="全部">
      <el-option label="全部" value="xinigejuyuan"></el-option>
      <el-option label="加星" value="huangqiwei"></el-option>
          </el-select></el-form-item></el-col>
  <el-col :span="7"></el-col>
</el-row>
  


  <el-form-item>
    <el-button type="primary" @click="onSubmit">筛选</el-button>
    <el-button>导出</el-button>
  </el-form-item>
</el-form>
</template>

<script>
    export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          input: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss" scoped>


</style>