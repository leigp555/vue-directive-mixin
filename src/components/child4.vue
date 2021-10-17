<template>
  <div class="child" >
    <hr>
    <button @click="remove">删除</button>
  </div>
</template>
<script>
import log from "../mixins/log.js"
export default {
  data(){
    return {
      name:"child4",
    }
  },
  mixins:[log]
  // props:["show"],
  // created() {
  //   console.log("child4出生了")
  // },
  // destroyed() {
  //   console.log("child4消亡了")
  // }
}
</script>
<style scoped>
.child{
  width: 50px;
  height: 50px;
  background-color: black;
}
</style>