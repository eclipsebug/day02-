<template>

  <div id="app">
   你好，Vue
   {{1}}
   {{1+1}}
   {{msg}}--{{age}}---{{address}}

  </div>
</template>

<script>
// vue-插值表达式

// 1.表达式
// -简单表达式：基本数据类型，复杂数据类型，变量
// -复杂表达式：简单表达式+运算符 eg：new Date() ,1+1 

// 2.插值表达式：把表达式的结果展现到DOM结构中

// 3.{{ 表达式}}

// 4.数据驱动视图
// -拒绝直接操作DOM---->数据驱动视图
export default {
 name:"App",
 data:function(){
  return{
    msg:"大大怪将军",
    age:18,
    address:'动漫人物'
  }
 }
}
</script>

<style scoped>

</style>
