<template>
  <div class="child" >
    <hr>
  </div>
</template>
<script>
// import log from "../mixins/log.js"
import MyVue from "../extends.js";
export default {
  data(){
    return {
      name:"child5",
    }
  },
  extends:MyVue,
  // mixins:[log]
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
  background-color: yellow;
}
</style>