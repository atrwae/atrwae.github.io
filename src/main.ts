import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18nMixin from '@/mixins/i18nMixin'

Vue.config.productionTip = false
Vue.mixin(i18nMixin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
