import Vue from 'vue'
import App from './App.vue'
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client'

Vue.config.productionTip = false

Vue.use(VueSocketio, io('http://localhost:3000'));

new Vue({
  render: h => h(App),
}).$mount('#app')
