import Vue from 'vue'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
