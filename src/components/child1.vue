<template>
  <div class="child1">
  </div>
</template>
<script>
import MyVue from "../extends";

export default {
  data() {
    return {
      name: "child1"
    }
  },
  extends:MyVue
}
</script>
<style scoped>
.child1 {
  width: 50px;
  height: 50px;
  background-color: magenta;
}
</style>