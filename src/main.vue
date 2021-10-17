<template>
  <div :class="`image theme-${themeName} theme-${fontSize}`">
    <span>我爱中国</span>
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
    <hr>
    <hr>
    <child6/>
  </div>
</template>
<script>
import Child1 from "./components/child1.vue"
import Child2 from "./components/child2.vue"
import Child3 from "./components/child3.vue"
import Child4 from "./components/child4.vue"
import Child5 from "./components/extends.vue"
import Child6 from "./provide-indect/inject"

export default {
  components: {
    Child1: Child1,
    Child2: Child2,
    Child3: Child3,
    Child4: Child4,
    Child5: Child5,
    Child6: Child6
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
      themeName: "orange",
      fontSize:"normal"
    }
  },
  beforeDestroy() {
    console.log("大哥亡了");
  },
  provide() {
    return {
      changeColor: this.changeTheme,
      changeFontSize:this.changeSize
    }
  },
  methods: {
    changeSize(value){
      if(["normal","big","small"].indexOf(value)>=0){
        this.fontSize=value
        console.log(this.fontSize)
      }
    },
    changeTheme() {
      if (this.themeName === "orange") {
        this.themeName = "blue"
      }else if(this.themeName==="blue"){
        this.themeName="orange"
      }
    },
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
.image>button{
  font-size: inherit;
}
.image.theme-orange {
  border: 1px solid red;
  height: 800px;
  width: 700px;
  background-color: orange;
}

.image.theme-blue {
  border: 1px solid red;
  height: 700px;
  width: 700px;
  background-color: blue;
}
.image.theme-normal{
  font-size: 20px;
}
.image.theme-big{
  font-size: 25px;
}
.image.theme-small{
  font-size: 15px;
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