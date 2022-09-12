import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
Vue.filter('dot-dot',function(value)
{
  if(value.length>10)
  {
  const result = value.slice(0, 10)+'...';
  return result
  }
  else{
    return value
  }
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
