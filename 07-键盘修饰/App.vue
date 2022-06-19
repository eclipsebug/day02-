<template>

  <div id="app">
 <!-- <input type="text" @keydown.13="keyEvent($event)"> -->
 <input type="text" @keydown="keyEvent($event)">
  </div>
</template>

<script>
// 按键修饰符
// -给键盘事件使用(keydown keyup...使用修饰符)

// .enter
// .esc
// e.keyCode获取键盘码
// 按键修饰符可以连续使用
export default {
 name:"App",
 data(){
  return{
   
  }
 },
 methods:{
keyEvent(e){
  console.log(e.keyCode);
}
 }
}
</script>

<style scoped>

</style>
