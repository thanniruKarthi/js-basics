<template>
  <v-app>
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
                <v-text-field v-model="empid"  label="outlined" value="empid" required :rules="numberRules"></v-text-field>
              </v-col>
              <v-col  md="4">
                <v-text-field v-model="name" label="name" required :rules="nameRules"></v-text-field>
              </v-col>
              <v-col  md="4">
                <v-text-field v-model="dept"  label="dept" required :rules="nameRules"></v-text-field>
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

  </v-app>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
var test;
Vue.use(VueAxios, axios)
export default {
  name: 'api-integration',
  data() {
    return {
      empid: '',
      numberRules:[
      v => !!v || 'input is required',
      v => (!isNaN(parseFloat(v)) && v >= 0 && v <=99999)||'input must be number && max 5 numbers',
      ],
      name: '',
      nameRules: [
        v => !!v || 'input is required',
        v => (v && v.length <= 20) || 'input must be less than 15 characters',
        v=>/^[a-zA-z]+$/.test(v)||'input is not valid'
      ],
      dept: '',
      list: [],
      dialog: false,
      arr: [],
      flag:true
    }
  },
  mounted() {

    Vue.axios.get('http://127.0.0.1:40193/readdept')

      .then((resp) => {
        this.list = resp.data;
      })
  },
  methods: {
    async sendData() {
      await Vue.axios.post(`http://127.0.0.1:40193/createdept`, {
        empid: this.empid,
        name: this.name,
        dept: this.dept,
        
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
      this.empid = item.empid
      this.name = item.name
      this.dept = item.dept


    },
    async edit() {
      this.flag=true
      this.dialog=false
      test.empid = this.empid
      test.name = this.name
      test.dept = this.dept
      this.$refs.form.reset()
      await axios.put(`http://127.0.0.1:40193/updatedept/${test.id}`, {
        empid: test.empid,
        name: test.name,
        dept: test.dept

      })
        .then(response => {
          console.log(response);
        });
      console.log(test.name)
      this.sendData()
      
    },


    
  }


}
</script>