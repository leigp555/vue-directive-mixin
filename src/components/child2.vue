<template>
  <div class="child" >
  </div>
</template>
<script>
import log from "../mixins/log.js"
export default {
  data(){
    return {
      name:"child2",
    }
  },
  mixins:[log],
  // props:["show"],
  // created() {
  //   console.log("child2出生了")
  // },
  // destroyed() {
  //   console.log("child2消亡了")
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