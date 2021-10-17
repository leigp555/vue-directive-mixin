<template>
<div>
  <button @click="changeColor()">换肤</button>
  <button @click="changeFontSize('big')">大字</button>
  <button @click="changeFontSize('normal')">中字</button>
  <button @click="changeFontSize('small')">小字</button>
</div>
</template>

<script>
export default {
  inject:["changeColor","changeFontSize"],
  // methods:{
  //   change(){
  //     this.changeColor()
  //   }
  // }
}
</script>

<style scoped>

</style>