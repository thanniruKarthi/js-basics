<template>
  <v-app>
    <v-form methos="post"
      ref="form"
      
      lazy-validation
    >
    <v-dialog
    v-model="dialog"
    >
    <template v-slot:activator="{on}">
      <v-flex text-right align-right>
      <v-btn class="blue"
        v-on="on"> <v-icon dark>
        mdi-plus
      </v-icon>
      </v-btn>
    </v-flex>
    </template>
    <v-card-text class=" white lighten-2">

      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
          </v-col> 
          <v-col
            cols="12"
            md="4"
          >
          <v-text-field
              v-model="empid"
              
              :counter="10"
              label="empid"
              required
            ></v-text-field>
          </v-col> 
          <v-col
            cols="12"
            md="4"
          >
          <v-text-field
              v-model="name"
              :counter="10"
              label="name"
              required
            ></v-text-field>
          </v-col> 
          <v-col
            cols="12"
            md="4"
          >
          <v-text-field
              v-model="dept"
              
              :counter="10"
              label="dept"
              required
            ></v-text-field>
          </v-col> 
          <v-btn
    elevation="2" class="blue"
  
    @click="sendData"
  >submit</v-btn>
      </v-row>
      </v-container>

    </v-card-text>
  </v-dialog>
  </v-form>

<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            id
          </th>
          <th>
            empid
          </th>
          <th>
            name
          </th>
          <th>
            dept
          </th>
          <th>
            edit
          </th>
          <th>
            delete
          </th>
       

        </tr>
      </thead>
      <tbody class="text-left">
        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{item.id}}</td>
        <td>{{item.empid}}</td>
        <td>{{item.name}}</td>
        <td>{{item.dept}}</td>
        <td>
          <v-btn
          class="mx-1"
          fab
          dark
          small
          color="cyan"
          @click="editing(item)"
          
        >
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
   
  </td>
  <td> 
    <v-btn
    class="mx-1"
    fab
    dark
    small
    color="cyan"
    @click="deleting(item.id)"
    
  >
    <v-icon dark>
      mdi-delete
    </v-icon>
  </v-btn>

</td>
  
        
        </tr>
      </tbody>
      </template>
   
</v-simple-table>

</v-app>
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
    return {
      empid:'',
      name:'',
      dept:'',
      list:[],
      dialog:false,
      arr:[]
    }
  },
  mounted()
  {

    Vue.axios.get('http://127.0.0.1:40193/readdept')
    
    .then((resp)=>
    {
       this.list=resp.data;
    })
  },
  methods:{
    async sendData()
            {
              await Vue.axios.post(`http://127.0.0.1:40193/createdept`,{
                empid:this.empid,
                name:this.name,
                dept:this.dept
                })
                this.dialog=false
                Vue.axios.get('http://127.0.0.1:40193/readdept')
    
    .then((resp)=>
    {
       this.list=resp.data;
    })
                
    },
    async deleting(id)
    {
     await Vue.axios.delete(`http://127.0.0.1:40193/deletedept/${id}`)

     Vue.axios.get('http://127.0.0.1:40193/readdept')
    
    .then((resp)=>
    {
       this.list=resp.data;
    })
  
    },
    // editing(id,empid,name,dept)
    // {
    //   this.dialog=true
    //   this.item.empid=empid
    //   this.item.name=name
    //   this.item.dept=dept
     
    //   let values={
    //     empid:this.item.empid,name:this.item.name,dept:this.item.dept
    //   }
    //   Vue.axios.put(`http://127.0.0.1:40193/updatedept/${id}`,values)
    //   {
    //     Vue.axios.get('http://127.0.0.1:40193/readdept')
    
    // .then((response)=>
    // {
    //    this.list=response.data;
    // });
    // this.item.empid=''.
    // this.item.name='',
    // this.item.dept=''
    // this.$refs.form.reset()
    //   }
    // }
    // edit(item)
    // {
    //  this.dialog=true
    //  this.temp=item
    //  let id = item.id
    //     let obj= this.arr.find(o => o.id == id)
    //     this.name = item.name
        
    //     this.dialog = true
    //     console.log(obj)
    //     this.tempObj = item 
      
        
    // },

    
 }
  

}
</script>