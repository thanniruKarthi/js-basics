import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import globalSearch from './components/searchGlobal.vue'
Vue.config.productionTip = false

Vue.filter('dot-dot',function(value)
{
  if(value.length>10)
  {
  const result = value.slice(0,10)+'...';
  return result
  }
  else{
    return value
  }
})
Vue.component('globalSearch',globalSearch)

Vue.directive('comma', {
  componentUpdated(el, binding,vnode) {
    console.log(binding.value)
    binding.value = binding.value.replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(binding.value)
    vnode.context.data.empid = binding.value
  }
}),
new Vue({

  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
