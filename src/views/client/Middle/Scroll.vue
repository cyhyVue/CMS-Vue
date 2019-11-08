<template>
      <div>         
         <div v-show="show3">
                <el-collapse-transition>
                    <div v-show="show3">
                    <div class="transition-box">

                        <!-- 第一个 -->
          <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span">客户身份:</span>
            </el-col>
            <el-col :span="5"><div class="block">
                <el-select v-model="value1" placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label1"
                    :value="item.value1">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">权益卡:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value2" filterable placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label2"
                    :value="item.value2">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">性别:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value3" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label3"
                    :value="item.value3">
                    </el-option>
                </el-select>
            </div>
            </el-col>
          </el-row>

            <!-- 第二个 -->
          <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span">来源渠道:</span>
            </el-col>
            <el-col :span="5"><div class="block">
                <el-select v-model="value4" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label4"
                    :value="item.value4">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">来源方式:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value5" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label5"
                    :value="item.value5">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">微信地域:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value6" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label6"
                    :value="item.value6">
                    </el-option>
                </el-select>
            </div>
            </el-col>
          </el-row>

          <!-- 第三个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span">标签:</span>
            </el-col>
            <el-col :span="5"><div class="block">
                <el-select v-model="value7" filterable placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label7"
                    :value="item.value7">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">购买次数:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input1" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input2" placeholder="次"></el-input>
            </div>
            </el-col>

            <el-col :span="2">
               <span class="cliend_span">笔单价:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input3" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input4" placeholder="次"></el-input>
            </div>
            </el-col>
          </el-row>

          <!-- 第四个 -->
            <div style="height:20px;"></div>
          <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span">积分:</span>
            </el-col>           
            <el-col :span="2"><div class="block">
                <el-input v-model="input5" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input6" placeholder="次"></el-input>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">储存余额:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input7" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input8" placeholder="次"></el-input>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">累计金额:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input9" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input10" placeholder="次"></el-input>
            </div>
            </el-col>
          </el-row>
                    </div>
                    
                    </div>
                </el-collapse-transition>
                </div>


                <el-row align="middle" type="flex">
            <el-col :span="3">
                <span class="cliend_span4"></span>
            </el-col>
            <el-col :span="15">
                <el-button type="primary">筛选</el-button>
                <el-button type="text">重置筛选条件</el-button>
                <!-- <scroll></scroll> -->
                 <el-button @click="show3 = !show3">收缩框</el-button>
            </el-col>
            
          </el-row>
                
            </div>
</template>

<script>
export default {
    data: () => ({
      show3: true,
    options: [{
            value1: '选项1',
            label1: '黄',
            value2: '选项',
            label2: '黄',
            value3: '选项1',
            label3: '黄',
            value4: '选项1',
            label4: '黄',
            value5: '选项1',
            label5: '黄',
            value6: '选项1',
            label6: '黄',
            value7: '选项1',
            label7: '黄',
            }, {
            value1: '选项2',
            label1: '糕',
            value2: '选项2',
            label2: '糕',
            value3: '选项2',
            label3: '糕',
            value4: '选项2',
            label4: '糕',
            value5: '选项2',
            label5: '糕',
            value6: '选项2',
            label6: '糕',
            value7: '选项2',
            label7: '糕',
            }, {
            value1: '选项3',
            label1: '黄金',
            value2: '选项3',
            label2: '黄金',
            value3: '选项3',
            label3: '黄金',
            value4: '选项3',
            label4: '黄金',
            value5: '选项3',
            label5: '黄金',
            value6: '选项3',
            label6: '黄金',
            value7: '选项3',
            label7: '黄金',
            }, {
            value1: '选项4',
            label1: '苹果',
            value2: '选项4',
            label2: '苹果',
            value3: '选项4',
            label3: '苹果',
            value4: '选项4',
            label4: '苹果',
            value5: '选项4',
            label5: '苹果',
            value6: '选项4',
            label6: '苹果',
            value7: '选项4',
            label7: '苹果',
            }, {
            value1: '选项5',
            label1: '梨子',
            value2: '选项5',
            label2: '梨子',
            value3: '选项5',
            label3: '梨子',
            value4: '选项5',
            label4: '梨子',
            value5: '选项5',
            label5: '梨子',
            value6: '选项5',
            label6: '梨子',
            value7: '选项5',
            label7: '梨子',
            }],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            input10: '',
        })
    
}
</script>

<style lang="scss" scoped>
.transition-box {
    // background-color: #409EFF;
    color: black;
    padding-bottom: 5px;
    box-sizing: border-box;
  }
//   .box {
//       display: none;
//   }
.cliend_span {
        display: block;
        text-align: end;
        font-size: 14px;
    }
    .cliend_span1 {
        display: block;
        text-align: center;
        font-size: 14px;
    }
</style>