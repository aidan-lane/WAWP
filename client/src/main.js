import Vue from 'vue'
import App from './App.vue'
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueSocketio, io('http://localhost:3000'));
// Bootstrap
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
