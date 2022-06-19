<template>

  <div id="app">
<!-- v-on :事件名="函数/赋值语句" -->

<button v-on:click="sayHi">点击</button>
<br/>
<h2>numd ---{{num}}</h2>
<br/>
<button @click="num++">点我num加一</button>
  </div>
</template>

<script>
// v-on --->绑定事件

// 1. methods可以通过this --->data里面的便令和methods其他的方法

// 2.methods不能是箭头函数

// v-on: ---> @
export default {
 name:"App",
 data(){
  return{
    num:0
  }
 },
 methods:{
  fn(){},
  sayHi(){
  console.log(this.num);
  console.log(this.fn);

    alert('你好')
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
