<template>

  <div id="app">
<!-- 跳转到百度 -->
<a @click="goBaidu(10,$event)" href="http://www.baidu.com">百度</a>
  </div>
</template>

<script>
// 事件对象
// 1.绑定事件的函数默认会接收大事件对象
// -用法与原生一样

// 2.触发事件的同时，传递参数，会把原有的事件对象覆盖

// 3.想传递参数10，也想传递事件对象
// --   $event
export default {
 name:"App",
 data(){
  return{
   
  }
 },
 methods:{
 goBaidu(num,e){
  e.preventDefault()
     console.log(num);

 }
 }
}
</script>

<style scoped>

</style>
