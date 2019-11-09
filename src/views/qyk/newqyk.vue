<template>
<div class="lq">
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><span class="bo1">权益卡管理 / </span><span class="bo"> 新建权益卡</span></div></el-col>
</el-row>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item  label="名称" style="width:290px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="领取设置">
    <el-select v-model="form.term" placeholder="请选择领取条件">
      <el-option label="可直接领取" value="可直接领取"></el-option>
      <el-option label="需付费购买" value="需付费购买"></el-option>
      <el-option label="消费金额满500领取" value="消费金额满500领取"></el-option>

    </el-select>
  </el-form-item>
  <el-form-item label="有效时间">
      <el-col :span="3">

    </el-col>
    <el-col :span="4">
      <el-date-picker  type="date" placeholder="或选择有效日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="1" style="text-align:center;color:#777">至</el-col>
    <el-col :span="4">
      <el-date-picker type="date" placeholder="到期日" v-model="form.date2" style="width: 100%;"></el-date-picker>
    </el-col>
   
  </el-form-item>
            <el-form-item>
     <el-radio-group :span="1" push="1" v-model="form.time">
       <el-checkbox   label="永久有效" name="type"></el-checkbox>

    </el-radio-group>
    </el-form-item>
  
  <el-form-item label="权益礼包">
    <el-checkbox-group v-model="form.power">
      <el-checkbox label="享受会员包邮" name="type"></el-checkbox>
      <el-checkbox label="享受会员消费折扣" name="type"></el-checkbox>
      <el-checkbox label="享受积分回馈" name="type"></el-checkbox>
      <el-checkbox label="获得好友体验卡" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="领卡礼包">
    <el-checkbox-group v-model="form.power">
       <el-checkbox label="送积分" name="type"></el-checkbox>
      <el-checkbox label="送优惠券" name="type"></el-checkbox>
      <el-checkbox label="送赠品" name="type"></el-checkbox>
    </el-checkbox-group>
   
  </el-form-item>
  <el-form-item style="width:55%"  label="使用须知">
    <el-input  type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
   <el-form-item label="激活预设">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            time:'',
          name: '',
          term: '',
          date1: '',
          date2: '',
          delivery: false,
          power: [],
          desc: '',
          st:(new Date()).valueOf()
        }
      }
    },
    methods: {
      onSubmit() {
 
        console.log(this.form);
      }
    }
  }
</script>
<style lang="scss" scoped>

.lq{
    
    padding:30px 20px 20px 20px;

    background: #fff;
    .el-form{
        padding-top:20px;

    }
    .grid-content{
  border-bottom: 1px solid rgb(243, 210, 210);
 
  margin-top:-10px;
  >.bo1{
       line-height: 40px;
  font-size: 15px;
  color: rgb(198, 152, 152);

  }
  >.bo{
       line-height: 40px;
  font-size: 17px;
  font-weight: 600;

  }

    }
}
.el-date-picker{
    width: 200px;
}

</style>