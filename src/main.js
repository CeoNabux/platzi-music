import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import routes from "@/routes"
import msToMm from "@/filters/ms-to-mm"
import blur from "@/directives/blur"
import store from "@/Store.js"

Vue.use(VueRouter)

Vue.use(EventBus)

Vue.use(Buefy)

Vue.use(msToMm)

Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
