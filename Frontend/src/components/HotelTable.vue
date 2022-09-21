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
                            <v-text-field v-model="input.hid" label="hotel id"></v-text-field>
                            <v-text-field v-model="input.cusid" label="customer id"></v-text-field>
                            <v-text-field v-model="input.branch" :rules="nameRules" label="Branch"></v-text-field>
                            <v-text-field v-model="input.street" :rules="nameRules" label="Street"></v-text-field>
                            <v-text-field v-model="input.pin_code" :rules="numberRules" label="Pin_code"></v-text-field>
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
                        <th>hid<button @click="hidasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="hiddesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                        <th>customerid<button @click="cusidasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="cusiddesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                        <th>branch<button @click="branchasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="branchdesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                        <th>Street<button @click="streetasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="streetdesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                        <th>pin_code<button @click="pincodeasc">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                            <button @click="pincodedesc">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button></th>
                            <th>address</th>
                            <th>edit/delete</th>
                            <th>customer name</th>
                    </tr>
                </thead>
                <tr v-for="(item,i) in list" :key="i">
                    <td>{{item.id}}</td>
                    <td>{{item.hid}}</td>
                    <td>{{item.cusid}}</td>
                    <td>{{item.branch}}</td>
                    <td>{{item.street}}</td>
                    <td>{{item.pin_code}}</td>
                    <td>{{JSON.stringify(item.branch +','+ item.street +','+ item.pin_code)}}</td>
                   <td>
                        <v-btn @click="edit(item)" color="transparent" fab small elevation="0">
                            <v-icon small color="green">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn @click="remove(item.id)" color="transparent" fab small elevation="0">
                            <v-icon small color="red">mdi-delete</v-icon>
                        </v-btn>
                    </td>
                    <td>{{item.name}}</td>
               
                
                </tr>
             
            
            </v-simple-table>
    </v-app>
</template>
<script>
    var test;
    import Vue from 'vue';
     import axios from 'axios';
     import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    export default{

    data() {
        return {
            run:'http://127.0.0.1:40193/searchhotel',
            input: {
                hid: '',
                cusid:'',
                branch:'',
                street: '',
                pin_code:''
            },
            formDialog: false,
            nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      numberRules:[
      v => !!v || 'Number is required',
      v => (v && v.length <= 10) || 'Number must be less than 10 characters'
      ],
      
            list:[],
            names:[],
            flag:true,
            
        }
    },
    mounted() {
        Vue.axios.get('http://127.0.0.1:40193/customername')
      .then((resp) => {
        this.list = resp.data;
        const address = this.list.map(item => ({
               // address : item.branch +','+ item.street +','+ item.pin_code
                address : JSON.stringify(item.branch +','+ item.street +','+ item.pin_code)
            }))
          console.log(address)
      })
    //   Vue.axios.get('http://127.0.0.1:40193/customername')
    //   .then((resp)=>
    //   {
    //     this.names=resp.data
    //   })
    //   Vue.axios.get('http://127.0.0.1:40193/read1')
    //     .then((resp)=>
    //     {
    //         this.list = resp.data;
    //         console.log(this.list)
    //         const address = this.list.map(item => ({
    //             address : item.branch +','+ item.street +','+ item.pin_code
    //             //address : JSON.stringify(item.branch +','+ item.street +','+ item.pin_code)
    //         }))
    //       console.log(address)
    //     })
  
    },
    methods:{
        async addItem() {
      await Vue.axios.post(`http://127.0.0.1:40193/insert1`, {
        id: this.input.hid,
        cusid:this.input.cusid,
        branch:this.input.branch,
        street:this.input.street,
        pincode: this.input.pin_code,
        
      })
      this.formDialog=false
      Vue.axios.get('http://127.0.0.1:40193/read1')
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
      this.input.hid=item.hid
      this.input.cusid=item.cusid
      this.input.branch=item.branch
      this.input.street=item.street
      this.input.pin_code=item.pin_code
    },
    async editItem() {
      this.flag=false
      test.hid=this.input.hid
      test.cusid = this.input.cusid
      test.branch = this.input.branch
      test.street= this.input.street
      test.pin_code=this.input.pin_code
      this.$refs.form.reset()
      this.formDialog=false
      await axios.post(`http://127.0.0.1:40193/update1/${test.id}`, {
        id: test.hid,
        cusid:test.cusid,
        branch:test.branch,
        street:test.street,
        pincode:test.pin_code
        
      })
.then(response => {
          console.log(response);
        });

      
      
    },
    hidasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/hidasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    hiddesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/hiddesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    cusidasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/cusidasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    cusiddesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/cusiddesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    branchasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/branchasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    branchdesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/branchdesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    streetasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/streetasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    streetdesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/streetdesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    pincodeasc()
    {
        Vue.axios.get('http://127.0.0.1:40193/pincodeasc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    pincodedesc()
    {
        Vue.axios.get('http://127.0.0.1:40193/pincodedesc')
      .then((resp) => {
        this.list = resp.data;
      })
    },
    async remove(id){
      await Vue.axios.delete(`http://127.0.0.1:40193/delete1/${id}`)
      Vue.axios.get('http://127.0.0.1:40193/read1')
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