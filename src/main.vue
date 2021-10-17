<template>
  <div class="image">
    <div class="children" v-y @click.stop></div>
    <div class="onBind" v-on2:click="add">模拟on</div>
    <hr>
    <button @click="hidden">隐藏</button>
    <hr>
    <Child1 v-if="child1Visible"/>
    <button @click="child1Visible=false">关闭</button>
    <Child2 v-if="child2Visible"/>
    <button @click="child2Visible=false">关闭</button>
    <Child3 v-if="child3Visible"/>
    <button @click="child3Visible=false">关闭</button>
    <Child4 v-if="child4Visible"/>
    <button @click="child4Visible=false">关闭</button>
    <Child5 v-if="child5Visible"/>
    <button @click="child5Visible=false">关闭</button>
    <hr>
  </div>
</template>
<script>
import Child1 from "./components/child1.vue"
import Child2 from "./components/child2.vue"
import Child3 from "./components/child3.vue"
import Child4 from "./components/child4.vue"
import Child5 from "./components/extends.vue"

export default {
  components: {
    Child1: Child1,
    Child2: Child2,
    Child3: Child3,
    Child4: Child4,
    Child5: Child5
  },
  directives: {
    'y': {
      inserted(el) {
        el.addEventListener("click", () => {
          console.log("y")
        })
      },

    },
    "on2": {
      inserted: function (el, info) {
        el.addEventListener(info.arg, info.value)
      },
      unbind: function (el, info) {
        el.removeEventListener(info.arg, info.value)
      }
    }
  },
  data() {
    return {
      n: 100,
      visible: "show",
      child1Visible: true,
      child2Visible: true,
      child3Visible: true,
      child4Visible: true,
      child5Visible: true,
    }
  },
  beforeDestroy() {
    console.log("大哥亡了");
  },
  methods: {
    add() {
      console.log("点击了on2")
    },
    hidden() {
      this.visible = !this.visible
    },
    deleteEl() {

    }
  }
}
</script>
<style scoped>
.image {
  border: 1px solid red;
  height: 500px;
  width: 500px;
  background-color: orange;
}

.children {
  width: 50px;
  height: 50px;
  background-color: red;
}

.onBind {
  width: 50px;
  height: 50px;
  background-color: yellow;
  color: black;
  font-size: 10px;
}
</style>