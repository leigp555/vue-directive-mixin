import Vue from 'vue'
import Demo from './main.vue'
import MyVue from "./extends.js";
Vue.config.productionTip = false

new MyVue({
  data:{
    name:"main"
  },
  render: h => h(Demo),
}).$mount('#app')
