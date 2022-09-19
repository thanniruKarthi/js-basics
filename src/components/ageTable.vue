<template>
  <v-app>
    <searchGlobal @funSearchSender="funSearch($event)"/>
    <v-form
    ref="form"
    v-model="valid"
      lazy-validation>
      <v-dialog v-model="dialog">
        <template v-slot:activator="{on}">
          <v-flex text-right align-right>
            <v-btn class="blue" v-on="on">
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-flex>
        </template>
        <v-card>
          <v-card-text class="white">
            <v-container>
              <v-text-field
      label="Empid"
      v-model="form.empid"
      :counter="10"
      placeholder="enter empid"
      :rules="form.numberRules"
      required
      ></v-text-field>
    <v-text-field
      v-model="form.age"
      :rules="form.nameRules"
      label="age"
      placeholder="enter age"
      required
    ></v-text-field>
 
        
        
    <v-btn
    :disabled="!valid"
    color="success"
    class="mr-4"
    @click="validate"
  >
    Validate
    </v-btn>
  </v-container>
    </v-card-text>
  </v-card>
  </v-dialog>
  </v-form>
<v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>id</th>
            <th>empid</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody class="text-left">
          <tr v-for="item in list" v-bind:key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.empid}}</td>
            <td>{{item.age}}</td>
            <td>
              <v-btn class="mx-1" fab dark small color="cyan" @click="editItem(item)" >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>

            </td>
            <td>
              <v-btn class="mx-1" fab dark small color="cyan" @click="deleting(item.id)" >
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
//  import VueAxios from 'vue-axios'

var test;
  export default {
    
    name:'SubmitForm',
    data:(()=>{
    return{
      valid: true,
      list:[],
      
     form:{
      empid:'',
      age:'',
      numberRules: [
        v => !!v || 'Number is required',
        v => (v && v.length <= 10) || 'Number must be less than 10 characters',
      ],
      value: [],
      headers: [
      {
        text: 'Id',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      { text: 'empId', value: 'empid',sortable:true},
      { text: 'Age', value: 'age',sortable:true},
    ],
    desserts: [],
    }
    }
  }),
  mounted() {

Vue.axios.get('http://127.0.0.1:40193/readage')

  .then((resp) => {
    this.list = resp.data;
  })
},

  methods: {
    async sendData() {
      await Vue.axios.post(`http://127.0.0.1:40193/createage`, {
        empid: this.empid,
        age: this.age,
        
        
      })
      this.dialog = false
      Vue.axios.get('http://127.0.0.1:40193/readdept')

        .then((resp) => {
          this.list = resp.data;
        });
        this.$refs.form.reset()

    },
    async deleting(id) {
      await Vue.axios.delete(`http://127.0.0.1:40193/deletedept/${id}`)

      Vue.axios.get('http://127.0.0.1:40193/readdept')

        .then((resp) => {
          this.list = resp.data;
        })

    },
    editItem(item) {
      this.flag=false
      this.dialog = true
      test = item
      this.form.empid = item.empid
      this.form.age= item.age
    },
    async edit() {
      this.flag=true
      this.dialog=false
      test.empid = this.form.empid
      test.age = this.from.age
      this.$refs.form.reset()
      await axios.put(`http://127.0.0.1:40193/updatedept/${test.id}`, {
        empid: test.empid,
        age: test.age,
      })
        .then(response => {
          console.log(response);
        });
      
      this.sendData()
      
    },
    change(message)
    {
      this.message=message
    },
    funSearch(val){
      this.list = val.data
    }
    
  }
}
</script>
