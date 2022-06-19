<template>

  <div id="app">
  <ul>
    <li v-for="(val,index) of persons" :key="index">
      {{val}}  <button @click="del">删除</button>
    </li>
  </ul>
 <button @click="add">生成</button>
  </div>
</template>

<script>

export default {
 name:"App",
 data(){
  return{
    persons:[
     1,5,3

    ]
  
  }
 },
methods:{
   add(){
   this.persons.push(Math.floor(Math.random()*10))

   },
   del(){
    this.persons.pop()
   }
}
 
 }
</script>

<style scoped>

</style>
