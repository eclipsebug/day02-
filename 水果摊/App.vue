<template>

  <div id="app">
    <div :class="{big}">
      <div :class="{normal}" >
        欢迎光临_vue开发的收银系统_水果店
   <div :class="{normal}">苹果 10￥/斤，折扣8折</div>
<div :class="{normal}">请输入你要购买的斤数<input type="number" v-model="value" v-if="value>=0"></div>
<button @click="buy">结账购买</button>
<div :class="{normal}">结算账单:总价{{a}}￥元 折扣价格{{b}} 省了{{c}}</div>

        </div>
    </div>
   
  </div>
</template>

<script>

export default {
 name:"App",
 data(){
  return{
    big:true,
   welcome:true,
   normal:true,
   value:0,
   a:0,
   b:0,
   c:0
  }
 },
 methods:{
keyEvent(e){
  console.log(e.keyCode);
},
buy(){
  return this.a=this.value*10, this.b=this.value*8, this.c=this.value*2
}
 },
 watch:{
 a(val){

 }
 }
}
</script>

<style scoped>
.big{
  display: flex;
      justify-content: center;
      /* align-items: center; */
  width: 1204px;
  height: 600px;
}

.normal{
  margin: 0 auto;
  width: 500px;
  height: 25px;
  border: 1px solid black;
  margin: 5px;
}
</style>
