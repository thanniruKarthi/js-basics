<template>
  <v-form method="post">
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
            v-model="empname"
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
  </v-form>
</template>
<script>
    import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
    export default{
        name:'formDisplay',
        data()
        {

            return{
           empid:'',
           empname:'',
           dept:'',
               
            } 
        },
        methods:{
            sendData()
            {
               Vue.axios.post(`http://127.0.0.1:40193/createdept`,{
                empid:this.empid,
                name:this.empname,
                dept:this.dept
                })
                
            }

        },

    }

</script>