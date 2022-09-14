<template>
  
    <v-app>
      
      <v-form method="post" ref="form" lazy-validation>
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
                  <v-text-field v-model="empid"  label="empid" value="empid" required :rules="numberRules"></v-text-field>
                </v-col>
                <v-col  md="4">
                  <v-text-field v-model="age" label="age" required :rules="numberRules"></v-text-field>
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
                age
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
              <td v-Comma>{{item.empid}}</td>
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
  import VueAxios from 'vue-axios'

  var test;
  Vue.use(VueAxios, axios)
  export default {
    name: "api-integration",
    data() {
        return {
            empid: "",
            numberRules: [
                v => !!v || "input is required",
                v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 99999) || "input must be number && max 5 numbers",
            ],
            age: "",
            list: [],
            dialog: false,
            arr: [],
            flag: true
        };
    },
    mounted() {
        Vue.axios.get("http://127.0.0.1:40193/readage")
            .then((resp) => {
            this.list = resp.data;
        });
    },
    methods: {
        async sendData() {
            await Vue.axios.post(`http://127.0.0.1:40193/createage`, {
                empid: this.empid,
                age: this.age,
            });
            this.dialog = false;
            Vue.axios.get("http://127.0.0.1:40193/readage")
                .then((resp) => {
                this.list = resp.data;
            });
            this.$refs.form.reset();
        },
        async deleting(id) {
            await Vue.axios.delete(`http://127.0.0.1:40193/deleteage/${id}`);
            Vue.axios.get("http://127.0.0.1:40193/readage")
                .then((resp) => {
                this.list = resp.data;
            });
        },
        editItem(item) {
            this.flag = false;
            this.dialog = true;
            test = item;
            this.empid = item.empid;
            this.age = item.age;
        },
        async edit() {
            this.flag = true;
            this.dialog = false;
            test.empid = this.empid;
            test.age = this.age;
            this.$refs.form.reset();
            await axios.put(`http://127.0.0.1:40193/updateage/${test.id}`, {
                empid: test.empid,
                age: test.age,
            })
                .then(response => {
                console.log(response);
            });
            console.log(test.name);
            this.sendData();
        },
    },
  
}
  </script>