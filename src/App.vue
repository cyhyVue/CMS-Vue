<template>
  <div id="app">

    <div v-if="$route.path === '/login'">
     <router-view name="login"></router-view>

    </div>
  
<div v-else>
     <lnav></lnav>

</div>
 
  </div>
</template>

<script>
import lnav from './components/left-nav'

export default {
  name: 'cms',
  components: {
    lnav,
   

  }
}
</script>

<style>
/** 清除内外边距 **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,dl, dt, dd, ul, ol, li, pre,form, fieldset, legend, button, input, textarea,th, td {
    margin: 0;
    padding: 0;   }
    ul,li{list-style: none;}
a{text-decoration: none;}
i,em{font-style:normal;}

/* 重置 HTML5 元素 */
 article, aside, details, figcaption, figure, footer,header, hgroup, menu, nav, section,summary, time, mark, audio, video {
    display: block;
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body{
  height: 100%;
  width: 100%;
  overflow:hidden;
  min-width: 1440px;

  background: rgb(230, 230, 231);
}

@media (max-width: 1440px) and (min-width: 768px) {
    html {
        zoom: 87%; 
        overflow: auto; 
    }
    @-ms-viewport { width: 1920px; }  
}  
</style>
