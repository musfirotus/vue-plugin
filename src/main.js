import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'

Vue.use(VueSweetalert2);

Vue.filter('currency', function (value) {
  if (!value) return ''
  let dot = value.toString().split(".");
  dot[0]=dot[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return `Rp ${dot.join(".")}`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
