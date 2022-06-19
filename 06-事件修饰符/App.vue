<template>

  <div id="app">
   <div class="father" @click="fu">
    父盒子
    <div class="son" @click(e)="son">子盒子 </div>
   </div>
   <hr/>
   <a @click.prevent href="http://www.baidu.com">百度</a>
   <hr/>
   
   <button @click.once="sayHi">sayHi</button>
  </div>
</template>

<script>
// 事件修饰符
// v-on：事件.修饰符

// .stop ---> 阻止冒泡

// .prevent --->阻止默认行为

// .once --->事件只执行一次

// 事件修饰符可单独使用
export default {
 name:"App",
 data(){
  return{
   
  }
 },
 methods:{
 fu(){
console.log('父盒子被点击');
 },
 son(){
console.log('子盒子被点击');

 },
 sayHi(e){
  e.stopPropagation()
  alert('你好')
 }
 }
}
</script>

<style scoped>
.father{
  width: 300px;
  height: 300px;
  background-color: red;
}
.son{
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
