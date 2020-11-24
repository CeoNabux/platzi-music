import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import routes from "@/routes"

Vue.use(VueRouter)

Vue.use(EventBus)

Vue.use(Buefy)

const router = new VueRouter({ routes })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
