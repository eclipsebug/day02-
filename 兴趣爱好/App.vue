<template>

  <div id="app">
  <div>
    请选择你喜欢的专栏</br>
    <input type="checkbox" v-model="box" value="科幻" id="1">科幻
    <input type="checkbox" v-model="box" value="喜剧" id="2">喜剧
    <input type="checkbox" v-model="box" value="动漫" id="3">动漫
    <input type="checkbox" v-model="box" value="冒险" id="4">冒险
    <input type="checkbox" v-model="box" value="科技" id="5">科技
 
 <form>
   
 </form>
 <!-- <div>{{box.toString()}}</div> -->
 <ul>
  <li v-for="(val,index) in box">{{val,}}{{box.id}}</li>
 </ul>
  </div>
 
  </div>
</template>

<script>

export default {
 name:"App",
 data(){
  return{
     checkedValue:[],//一定必须是数组不能是字符串
                answer:[],
                box:[]
  
  }
 },

 watch:{
        checkedValue:function(new_v,old_v){
            this.answer=this.checkedValue;
        }
    },
 }
</script>

<style scoped>

</style>
