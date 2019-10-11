import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins'
import vuetify from './plugins/vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import excel from 'vue-excel-export'
 
Vue.use(excel)

sync(store, router)

// Vue.prototype.$axios = axios;
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
