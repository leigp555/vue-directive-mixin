<template>
<div class="fff">
  子组件
  <change-theme />
</div>
</template>

<script>
import ChangeTheme from "./changgeTheme";
export default {
  components: {ChangeTheme},
}
</script>

<style scoped>
.fff{
  width: 100px;
  height: 100px;
  background-color: #666;
}
</style>