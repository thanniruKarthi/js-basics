import Vue from 'vue'
import VueRouter from 'vue-router'
import deptTableVue from '@/components/deptTable.vue'
import ageTableVue from '../components/ageTable.vue'
import  searchGlobal from '../components/searchGlobal.vue'
import DirectiveAge from '../components/DirectiveAge.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path:'/TableDept',
    name:'deptTableVue',
    component:deptTableVue

  },
 
  {
    path:'/Tableage',
    name:'Tableage',
    component:ageTableVue
  },
  {
    path:'/searchglobal',
    name:'globalsearch',
    component:searchGlobal
  },
  {
    path:'/Directive',
    name:'Directive',
    component:DirectiveAge
  },
  
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
