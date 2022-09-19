<template>
  <v-app>
    <searchGlobal @funSearchSender="funSearch($event)"/>
    <v-form methos="post" ref="form" lazy-validation>
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
            <v-row>
              <v-col md="4">
                <v-text-field v-model="data.empid"  label="empid" value="empid" required :rules="numberRules" v-comma="data.empid"></v-text-field>
              </v-col>
              <v-col  md="4">
                <v-text-field v-model="data.name" label="name" required :rules="nameRules"></v-text-field>
              </v-col>
              <v-col  md="4">
                <v-text-field v-model="data.dept"  label="dept" required :rules="nameRules"></v-text-field>
              </v-col>
              <v-btn elevation="2" class="blue" @click="sendData" v-if="flag">submit</v-btn>
              <v-btn elevation="2" class="blue" @click="edit" v-else>edit</v-btn>
            </v-row>
          </v-container>

        </v-card-text>
      </v-card>
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
            <td>{{item.name|dot-dot}}</td>
            <td>{{item.dept}}</td>
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
    <h1>{{this.search}}</h1>

  </v-app>
</template>


<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import searchGlobal from './searchGlobal.vue';
import { getInfo, postInfo, editInfo, deleteInfo} from '../components/serives/api'
var test;
Vue.use(VueAxios, axios)
export default {
  name: 'api-integration',
  data() {
    return {
      data:{
        empid: '',
        name: '',
        dept: '',

      },
     
      numberRules:[
      v => !!v || 'input is required',
      v => (!isNaN(parseFloat(v)) && v >= 0 && v <=99999)||'input must be number && max 5 numbers',
      ],
     
      nameRules: [
        v => !!v || 'input is required',
        v => (v && v.length <= 20) || 'input must be less than 15 characters',
        v=>/^[a-zA-z]+$/.test(v)||'input is not valid'
      ],
     
      list: [],
      dialog: false,
      arr: [],
      flag:true,
      message:''
      
    }
  },
  mounted() {
getInfo()
.then((resp) => {
        this.list = resp.data;
      })
  },
  methods: {
     sendData() {
      console.log('post')
     postInfo(this.data)
      this.dialog = false
     this.getInfo()
        this.$refs.form.reset()

    },
   deleting(id) {
    deleteInfo(id)
.then((resp) => {
          this.list = resp.data;
        })

    },
    editItem(item) {
      this.flag=false
      this.dialog = true
      test = item
     this.data=item


    },
    async edit() {
      this.flag=true
      this.dialog=false
      test.empid = this.data.empid
      test.name = this.data.name
      test.dept = this.data.dept
      this.$refs.form.reset()
   editInfo(this.data)
        .then(response => {
          console.log(response);
        });
      console.log(test.name)
      this.sendData()
      
    },
   
    change(message)
    {
      this.message=message
    },
    funSearch(val){
      this.list = val.data
    }

    
  },

  components:{searchGlobal}


}
</script>