import Vue from 'vue'
import VueRouter from 'vue-router'
import customerTable from '../components/customerTable.vue'
import hotelTable from '../components/HotelTable.vue'
import globalSearch from '../components/globalSearch.vue'
Vue.use(VueRouter)

const routes = [
  
 {
  path:'/customer',
  name:'customer',
  component:customerTable
 },
 {
  path:'/hotel',
  name:'hotel',
  component:hotelTable
 },
 {
  path:'/search',
  name:'search',
  component:globalSearch
 }
  
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
