import Vue from 'vue'
import router from './router'
import App from './App.vue'
import fastclick from 'fastclick'
import VueAwesomeSwiper  from 'vue-awesome-swiper'

//reset.css
import './assets/reset.css'
import './assets/border.css'
//icon-font
import './assets/iconfont.css'
//swiper
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
//使用fastclick
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
