import Vue from 'vue'
import VueRouter from 'vue-router'
import formData from '../components/formData.vue'
Vue.use(VueRouter)

const routes = [
  {
  path: '/formData',
  name: 'formData',
  component: formData
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
