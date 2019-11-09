<template>
<div class="qyk-box">
  <tab1></tab1>

  </div>
</template>
<script>
import tab1 from './tab1'

  export default {
   components:{
       tab1,
       
   }
  };
</script>

<style lang="scss" scoped>

.qyk-box{
    background: #FFF;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    height: 70%;
    overflow-y: scroll;

    
}
</style>
