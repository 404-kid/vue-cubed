import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCubed from './plugins/vue-cubed'


Vue.use(VueCubed)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
