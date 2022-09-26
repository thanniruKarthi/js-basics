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
                        <th>hid<button @click="sort('hid','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('hid','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                        <th>customerid<button @click="sort('cusid','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('cusid','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button>
                           </th>
                        <th>branch<button @click="sort('branch','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('branch','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                        <th>Street<button @click="sort('street','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button><button @click="sort('street','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                        <th>pin_code<button @click="sort('pin_code','asc')">
                                <v-icon small>mdi-arrow-up</v-icon>
                            </button>
                            <button @click="sort('pin_code','desc')">
                                <v-icon small>mdi-arrow-down</v-icon>
                            </button></th>
                            <th>customer name</th>
                            <th>address</th>
                            <th>edit/delete</th>
                    </tr>
                </thead>
                <tr v-for="(item,i) in list" :key="i">
                    <td>{{item.id}}</td>
                    <td>{{item.hid}}</td>
                    <td>{{item.cusid}}</td>
                    <td>{{item.branch}}</td>
                    <td>{{item.street}}</td>
                    <td>{{item.pincode}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>
                        <v-btn @click="edit(item)" color="transparent" fab small elevation="0">
                            <v-icon small color="green">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn @click="remove(item.id)" color="transparent" fab small elevation="0">
                            <v-icon small color="red">mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </v-simple-table>
    </v-app>
</template>
<script>
    var test;
    const  headers={'appKey': 'FbTspRD7MFuZgSY-8Z6PbPsJraf52dBL'}
    import Vue from 'vue';
     import axios from 'axios';
     import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
    export default{

    data() {
        return {
            run:'http://127.0.0.1:40193/searchHotel',
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
        Vue.axios.get('http://127.0.0.1:40193/readHotel',{headers})
      .then((resp) => {
        console.log(resp);
        this.list = resp.data;
      })
  
    },
    methods:{
        async addItem() {
      await Vue.axios.post(`http://127.0.0.1:40193/insertHotel`, {
        id: this.input.hid,
        cusid:this.input.cusid,
        branch:this.input.branch,
        street:this.input.street,
        pincode: this.input.pin_code,
        
      },{headers})
      this.formDialog=false
      Vue.axios.get('http://127.0.0.1:40193/readHotel')
      .then((resp) => {
        this.list = resp.data;
      },{headers})
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
      this.input.pin_code=item.pincode
    },
    async editItem() {
      this.flag=false
      test.hid=this.input.hid
      test.cusid = this.input.cusid
      test.branch = this.input.branch
      test.street= this.input.street
      test.pincode=this.input.pin_code
      this.$refs.form.reset()
      this.formDialog=false
      await axios.post(`http://127.0.0.1:40193/updateHotel/${test.id}`, {
        id: test.hid,
        cusid:test.cusid,
        branch:test.branch,
        street:test.street,
        pincode:test.pin_code
        
      },{headers})
.then(response => {
          console.log(response);
        });

      
      
    },
    sort(column,order)
    {
      Vue.axios.post('http://127.0.0.1:40193/sortHotel',{value:column,order:order},{headers})
      .then((resp) => {
        this.list = resp.data;
      })
    },
    async remove(id){
      await Vue.axios.delete(`http://127.0.0.1:40193/deleteHotel/${id}`,{headers})
      Vue.axios.get('http://127.0.0.1:40193/read1',{headers})
        .then((resp) => {
          this.list = resp.data;
        })
    },
    searchBar(value)
    {
this.list=value.data
    },
    }
    }
</script>