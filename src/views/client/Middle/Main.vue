<template>
  <div class="cliend_main">
      <div class="cliend_main_content">
          <el-row class="cliend_main_top" align="middle" type="flex">
            <el-col :span="4"><el-radio v-model="radio1" label="1" border>备选项1</el-radio></el-col>            
            <el-col :span="4"><el-radio v-model="radio1" label="2" border>备选项2</el-radio></el-col>
            <el-col :span="4"><el-radio v-model="radio1" label="3" border>备选项3</el-radio></el-col>
            <el-col :span="4"><el-radio v-model="radio1" label="4" border>备选项4</el-radio></el-col>
          </el-row>
            <!-- 第一个 -->
          <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span1">上次消费时间:</span>
            </el-col>
            <el-col :span="6"><div class="block">
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="开始日期">
                </el-date-picker>
            </div>
            </el-col>
            <el-col :span="1">
               <span class="cliend_span11"> 至 </span> 
            </el-col>            
            <el-col :span="6"><div class="block">
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="结束日期">
                </el-date-picker>
            </div>
            </el-col>
          </el-row>

            <!-- 第二个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span2">成为客户时间:</span>
            </el-col>
            <el-col :span="6"><div class="block">
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="开始日期">
                </el-date-picker>
            </div>
            </el-col>
            <el-col :span="1">
               <span class="cliend_span22"> 至 </span> 
            </el-col>            
            <el-col :span="6"><div class="block">
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="结束日期">
                </el-date-picker>
            </div>
            </el-col>
          </el-row>

          <!-- 第三个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span3">成为会员时间:</span>
            </el-col>
            <el-col :span="6"><div class="block">
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="开始日期">
                </el-date-picker>
            </div>
            </el-col>
            <el-col :span="1">
               <span class="cliend_span33"> 至 </span> 
            </el-col>            
            <el-col :span="6"><div class="block">
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="结束日期">
                </el-date-picker>
            </div>
            </el-col>
          </el-row>

          <!-- 第四个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span4">关键词:</span>
            </el-col>
            <el-col :span="4"><el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
          </el-row>

            <!-- 第五个 -->
            <div style="height:20px;"></div>
            <scroll></scroll>
            
      </div>
          
           
      
  </div>
</template>

<script>
import Scroll from './Scroll.vue'
export default {
    components: {
        Scroll
    },
     data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
}
</script>

<style lang="scss" scoped>
.cliend_main_top {
    height: 92px;
    // background: red;
    border-bottom: 2px solid #e4e4e5;
    
}
.cliend_main_content {
        width: 967px;
        // height: 396px;
        margin: 0 auto;
        // background: orangered;
        
    }

// .cliend_main_line {
//     border
// }

.cliend_span1 {
    display: block;
    text-align: end;
    font-size: 15px;
    > .cliend_span11 {
        display: block;
        text-align: center;
        font-size: 15px;
    }
}
.cliend_span2 {
    display: block;
    text-align: end;
    font-size: 15px;
    > .cliend_span22 {
        display: block;
        text-align: center;
        font-size: 15px;
    }
}
.cliend_span3 {
    display: block;
    text-align: end;
    font-size: 15px;
    > .cliend_span33 {
        display: block;
        text-align: center;
        font-size: 15px;
    }
}
.cliend_span4 {
    display: block;
    text-align: end;
    font-size: 15px;
}


</style>