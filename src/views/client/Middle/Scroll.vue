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
                <el-select v-model="value" placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">权益卡:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value" filterable placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">性别:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
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
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">来源方式:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">微信地域:</span> 
            </el-col>            
            <el-col :span="5"><div class="block">
                <el-select v-model="value" filterable placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
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
                <el-select v-model="value" filterable placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">购买次数:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>

            <el-col :span="2">
               <span class="cliend_span">笔单价:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
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
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">储存余额:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
            <el-col :span="2">
               <span class="cliend_span">累计金额:</span> 
            </el-col>            
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
            </div>
            </el-col>
             <el-col :span="1">
                <span class="cliend_span1">-</span>
            </el-col>
            <el-col :span="2"><div class="block">
                <el-input v-model="input" placeholder="次"></el-input>
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
                <scroll></scroll>
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
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value: '',
            input: ''
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
        font-size: 15px;
    }
    .cliend_span1 {
        display: block;
        text-align: center;
        font-size: 15px;
    }
</style>