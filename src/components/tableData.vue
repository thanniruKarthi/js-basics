<template>

  <v-app>
  <v-form
    ref="form"
    v-model="valid"
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
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <br>
    <h3>Gender</h3>
    <v-radio-group
      v-model="gender"
      :rules="genderRules">
            <v-radio
              label="male"
              color="primary"
              value="male"
            ></v-radio>
            <v-radio
              label="female"
              color="secondary"
              value="femlae"
            ></v-radio>
            <v-radio
              label="not prefer to say"
              color="success"
              value="not prefer to say"
            ></v-radio>
          </v-radio-group>
          <h2>Favourite subject</h2>
      <v-checkbox
      v-model="subject"
        v-for="(cho) in choice"
        :key="cho.id"
        :label="cho.name"
        :value="cho.name"
        required
      ></v-checkbox>
      
  <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="location"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
      v-if="!rand"
      
    >
      Validate
    </v-btn>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="editing"
      v-if="rand"
      
    >
      edit
    </v-btn>
   
  </v-card-text>
  </v-dialog>
   
  </v-form>
  
  <v-simple-table>
    <thead>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>gender</th>
        <th>subject</th>
        <th>location</th>
        
       
      </tr>
    </thead>
    <tbody>
       <tr
        v-for="(item,name) in arr" :key = "name">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.gender}}</td>
        <td>{{ item.choice}}</td>
        <td>{{ item.items}}</td>
        <v-btn @click="edit(item)"><v-icon dark>
      mdi-pencil
    </v-icon></v-btn> 
        <v-btn @click="Delete(item)"><v-icon dark>
      mdi-delete
    </v-icon></v-btn>
      </tr>
    </tbody>
  </v-simple-table>
</v-app>
</template>

<script>

  export default {
    data: () => ({
      
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        v=>/^[a-zA-z]+$/.test(v)||'name is not valid'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      gender:'',
      genderRules: [
        v => !!v || 'gender is required'],

      choice: [
       {id :1,name:'math'},{id:2,name:'physics'},{id:3,name:'social'}],
    
      items: [
        'Andhra Pradesh',
        'Tamil Nadu',
        'Kerala',
        'Karnataka',
        'Goa',
        'Telangana',
      ],
      checkbox: false,
      radioGroup:1,
      select:null,
      subject:[],
      arr:[],
      dialog:false,
      
     rand:false,
     temp:{}
    }),

    

    methods: {
      validate () {
        //const arr=this.arr
        this.$refs.form.validate()
        this.rand=false,
        this.arr.push ({
          name : this.name,
          email : this.email,
          gender :this.gender,
          choice :this.subject,
          items:this.select,
        })
        this.dialog = false
        this.$refs.form.reset()
        //console.log(JSON.stringify(arr))
      },
    edit(item)
    {
     this.dialog=true
     this.rand=true
     this.temp=item
     let id = item.id
        let obj= this.arr.find(o => o.id == id)
        this.name = item.name
        this.email = item.email
        this.gender = item.gender
        this.choice=this.subject
        this.select=item.items
        this.dialog = true
        console.log(obj)
        this.tempObj = item 
      


        
    },
    editing()
    {
      let data= this.arr.findIndex(tempor => tempor.id == this.temp.id)
      this.arr[data].name = this.name
      this.arr[data].email=this.email
      this.arr[data].gender = this.gender
      this.arr[data].choice=this.subject
      this.arr[data].items=this.select
      this.$refs.form.reset()
      this.dialog=false
      this.rand=false
      this.$refs.form.reset()
    },
      Delete(item)
      {
        this.editedIndex = this.arr.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.arr.splice(item, 1)
      },
      
      
  
    },
   
    
  }
  
</script>
