import Vue from 'vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt'
// import { Button, Select } from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import './style/main.css'

import App from './components/App.vue'

Vue.use(ElementUI, { locale })
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  render: h => h(App)
})
