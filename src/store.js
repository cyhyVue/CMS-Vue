import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
//方法封装
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
        console.log("接口请求异常，",err)
    }).then(()=>{
        //都会执行
    })
}


const store = new Vuex.Store({
  state: { //让我们来创建一个 store。用于储存数据对象
    topArr:[],
    topArr1:[],
    glArr:[],
    adArr:[]


  },
  // 同步数据更新
  mutations: {
    uptopArr(state,payload){
        state.topArr = payload
        console.log(state.topArr);
    },
    uptopArr1(state,payload){
        state.topArr1 = payload
        console.log(state.topArr);
    },
    upglArr(state,payload){
        state.glArr=payload
        console.log( state.glArr);
        
    },
    upadArr(state,payload){
        state.adArr = payload
        console.log(state.adArr);
        
    }
 
  },
  // 异步数据请求，与后端API进行交互
  actions: {
    gettopArr(){
        fetch('/db/top.json',function(data){
            console.log(data);
            store.commit('uptopArr',data[0])
            
            
        })
    },
    gettopArr1(){
        fetch('/db/top.json',function(data){
            console.log(data);
            store.commit('uptopArr1',data[1])
            
            
        })
    },
    getglArr(){
        fetch('/db/gl.json',function(data){
            store.commit('upglArr',data)
        })
    },
    getadArr(){
        fetch('/db/ad.json',function(data){
            store.commit('upadArr',data)
        })
    }
    
  }
})
export default store