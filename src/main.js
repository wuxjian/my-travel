import Vue from 'vue'
import router from './router'
import App from './App.vue'
import fastclick from 'fastclick'

//reset.css
import './assets/reset.css'
import './assets/border.css'

Vue.config.productionTip = false
//使用fastclick
fastclick.attach(document.body)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
