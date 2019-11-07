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
    clientArr: [],
    clientArr2: [],
  },
  // 同步数据更新
  mutations: {
      updateClientArr(state,payload) {
          if (payload.list) {
              state.clientArr = payload.list
          }
          let page=payload.page||1
          let list = state.clientArr
          state.clientArr2 = list.slice((page-1)*5, page*5)
      },
      updateAdd(state,payload){
        state.clientArr2.push(payload)
      }
 
  },
  // 异步数据请求，与后端API进行交互
  actions: {
    getClient(store) {//fetch方法演示
        fetch('/db/client.json', data=>{
          console.log('00000',data)
          let payload = {
              page:1,
              list: data,
              statusNum:''
          }
          store.commit('updateClientArr',payload)

        })
      }
  }
})
export default store