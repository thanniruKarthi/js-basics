<template>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
id
          </th>
          <th class="text-left">
            empid
          </th>
          <th class="text-left">
            name
          </th>
          <th class="text-left">
            dept
          </th>
       

        </tr>
      </thead>
      <tbody class="text-left">
        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{item.id}}</td>
        <td>{{item.empid}}</td>
        <td>{{item.name}}</td>
        <td>{{item.dept}}</td>
        
        </tr>
      </tbody>
      </template>
</v-simple-table>

</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default{
  name:'api-integration',
  data()
  {
    return {list:undefined}
  },
  mounted()
  {
    Vue.axios.get('http://127.0.0.1:40193/readdept')
    
    .then((resp)=>
    {
       this.list=resp.data;
    })
  }
}
</script>