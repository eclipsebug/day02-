<template>

  <div id="app">
  <!-- 链接 百度 -->
  <a href="http://www.baidu.com">跳转链接</a>
  <!-- 链接 B乎 -->
<br/>
   <a v-bind:href="link">B乎</a>

   <div v-bind:style="{background:color}">111</div>

   <div :class="{box:isShow}">222</div>
  </div>
</template>

<script>
// 指令：v-开头

// 1. v-bind 用于属性的动态绑定
// - 语法：v-bind：属性="表达式"
// -简写: v-bind:属性 ---> :属性

// 特殊用法: style,class

// v-bind:style
// {属性名:属性值}

// v-bind:class
// {class:true}
export default {
 name:"App",
 data(){
  return{
   link:"http://www.zhihu.com",
   color:"red",
   isShow:true

  }
 }
}
</script>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>
