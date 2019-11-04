import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function fetch(api,callback){
    axios({
        methed:"GET",
        url:'http://localhost:8080'+api  
    }).then(res=>{
        let data=null
        if(res.data.err===0){
            data=res.data.data
        }
        callback&&callback(data)
    }).catch(err=>{
        console.log("请求异常，",err)
    }).then(()=>{
        //都会执行
    })
}


const store = new Vuex.Store({
  state: { //让我们来创建一个 store。用于储存数据对象

  },
  // 同步数据更新
  mutations: {
 
  },
  // 异步数据请求，与后端API进行交互
  actions: {
    getAds() {//fetch方法演示
        fetch('/db/ads.json', data=>{
          console.log(data)

        })
      }
  }
})
export default store