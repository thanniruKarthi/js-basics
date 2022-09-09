import Vue from 'vue'
import VueRouter from 'vue-router'
import apiintegration from '../components/api-integration.vue'
import formDisplay from '../components/formDisplay.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path:'/readdata',
    name:'apiintegration',
    component:apiintegration

  },
  {
    path:'/formDisplay',
    name:'formdisplay',
    component:formDisplay
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
