import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Optionally install the BootstrapVue icon components plugin
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
