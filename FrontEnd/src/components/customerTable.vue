<template>
    <v-app>
        <div>
          <div>
            <globalSearch :link="run" @linking="searchBar"/>
          </div>
                <v-form refs="form">
                    <v-dialog width="600" v-model="formDialog">

                        <template v-slot:activator="{ on,attr }">
                            <v-flex text-right align-right>
                                <v-btn  elevation='5' color="primary" v-bind="attr" v-on="on">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </v-flex>

                        </template>
                        <v-card text class="white">
                            <v-text-field v-model="input.cusid" label="customer id"></v-text-field>
                            <v-text-field v-model="input.name" :rules="nameRules" label="customer Name">
                            </v-text-field>
                            <v-text-field v-model="input.owner" :rules="nameRules" label="owner"></v-text-field>
                            <v-btn v-if="flag" @click="addItem" class="red">
                                submit</v-btn>
                            <v-btn v-else @click="editItem" class="green">
                                save</v-btn>
                        </v-card>
                    </v-dialog>
                </v-form>
            </div>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>customerid<button @click="sort('cusid','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('cusid','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                    
                        <th>name<button @click="sort('name','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('name','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                        
                        <th>owner<button @click="sort('owner','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('owner','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                            <th>Edit/Delete</th>
                            <th>count</th>
                    </tr>
                </thead>
                <tr v-for="(item,i) in list" :key="i">
                    <td>{{item.id}}</td>
                    <td>{{item.cusid}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.owner}}</td>
                    <td>
                        <v-btn @click="edit(item)" color="transparent" fab small elevation="0">
                            <v-icon small color="green">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn @click="remove(item.id)" color="transparent" fab small elevation="0">
                            <v-icon small color="red">mdi-delete</v-icon>
                        </v-btn>
                    </td>
                    <td>{{item.count}}</td>
                </tr>
            </v-simple-table>
    </v-app>
</template>
<script>
    var test;
    import Vue from 'vue';
     import axios from 'axios';
     import VueAxios from 'vue-axios'
     const  headers={'appKey': 'FbTspRD7MFuZgSY-8Z6PbPsJraf52dBL'}
Vue.use(VueAxios, axios)
    export default{
    data() {
        return {
          run:'http://127.0.0.1:40193/customerSearch',
            input: {
                cusid: '',
                name:'',
                owner: ''
            },
            formDialog: false,
            nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
            list:[],
            flag:true
        }
    },
    mounted() {
      
        Vue.axios.get('http://127.0.0.1:40193/readCustomer',{headers})
      .then((resp) => {
        this.list = resp.data;
      },{headers})
  
    },
    methods:{
        async addItem() {
         
      await Vue.axios.post(`http://127.0.0.1:40193/insertCustomer`, {
        id: this.input.cusid,
        name: this.input.name,
        owner: this.input.owner,
        
      },{headers})
      this.formDialog=false
      Vue.axios.get('http://127.0.0.1:40193/readCustomer',{headers})
      .then((resp) => {
        this.list = resp.data;
      })
      this.$refs.form.reset()
    },
    async edit(item)
    {
        this.flag=false
      this.formDialog = true
      test = item
      this.input.cusid=item.cusid
      this.input.name=item.name
      this.input.owner=item.owner
    },
    async editItem() {
      this.flag=false
      test.cusid = this.input.cusid
      test.name = this.input.name
      test.owner = this.input.owner
      this.$refs.form.reset()
      this.formDialog=false
      await axios.post(`http://127.0.0.1:40193/updateCustomer/${test.id}`, {
        id: test.cusid,
        name: test.name,
        owner: test.owner
      },{headers})
.then(response => {
          console.log(response);
        });
        this.$refs.form.reset()
    },
sort(datad,order)
    {
      Vue.axios.post('http://127.0.0.1:40193/customerSort',{value:datad,order:order})
      .then((resp) => {
        this.list = resp.data;
      })
    },
    async remove(id){
      await Vue.axios.delete(`http://127.0.0.1:40193/deleteCustomer/${id}`,{headers})
      Vue.axios.get('http://127.0.0.1:40193/readCustomer',{headers})
        .then((resp) => {
          this.list = resp.data;
        })
    },
    searchBar(value)
    {
this.list=value.data
    }
    }
    }
</script>