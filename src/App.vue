<template>
  <div id="app">
  

     <lnav></lnav>

     <login></login>
   
  </div>
</template>

<script>
import lnav from './components/left-nav'
import login from "./views/login/Login"


export default {
  name: 'cms',
  components: {
    lnav,
    login

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
html,body{
  height: 100%;
  width: 100%;
  overflow:hidden;
  min-width: 1100px;

  background: rgb(230, 230, 231);
}

/** 清除内外边距 **/
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,
dl, dt, dd, ul, ol, li, 
pre,
form, fieldset, legend, button, input, textarea, 
th, td {
    margin: 0;
    padding: 0;   }
    ul,li{list-style: none;}
a{text-decoration: none;}
i,em{font-style:normal;}

/* 重置 HTML5 元素 */
 article, aside, details, figcaption, figure, footer,header, hgroup, menu, nav, section,
summary, time, mark, audio, video {
    display: block;
    margin: 0;
    padding: 0;
} 

</style>
