import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'

sync(store, router)

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    changePlatform(platform){
      this.$emit('platformClicked', platform);
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
