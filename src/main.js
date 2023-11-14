import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'
// tiptapVuetify plugin
import './plugins/tiptap-vuetify'
import './plugins/gtag'
import '@babel/polyfill'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
