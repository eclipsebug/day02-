<template>

  <div id="app">
  <ul>
    <li v-for="(val,index) of persons" :key="id">
      {{val.name}}
    </li>
  </ul>
 <button @click="change">走一走</button>
  </div>
</template>

<script>

export default {
 name:"App",
 data(){
  return{
    persons:[
      {id:"1",name:"程序员"},
      {id:"2",name:"帅哥"},
      {id:"3",name:"美女"},

    ]
  
  }
 },
methods:{
   change(){
   this.persons.push(this.persons[0])
   this.persons.shift()
   }
}
 
 }
</script>

<style scoped>

</style>
