<template>
  <div class="child" v-if="child">
    <button @click="child=false">删除</button>
  </div>
</template>
<script>
import log from "../mixins/log";

export default {
  data(){
    return {
      name:"child3",
      child:true
    }
  },
  mixins: [log]

  // props:["show"],
  // created() {
  //   console.log("child3出生了")
  // },
  // destroyed() {
  //   console.log("child3消亡了")
  // }
}
</script>
<style scoped>
.child {
  width: 50px;
  height: 50px;
  background-color: grey;
}
</style>