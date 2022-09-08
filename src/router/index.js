import Vue from 'vue'
import VueRouter from 'vue-router'
import formData from '../components/formData.vue'
import tableData from '../components/tableData.vue'
Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  name: 'formData',
  component: formData
  },
  {
    path:'/tableData',
    name:'tableData',
    component:tableData
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
