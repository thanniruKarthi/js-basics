<template>
    <v-app>
        
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
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
            
<!-- <v-checkbox  
                v-model="subject"
      label="Math"
      value="Math"
    ></v-checkbox>
    <v-checkbox
    v-model="subject"
      label="Science"
      value="science"
    ></v-checkbox>
    <v-checkbox
    v-model="subject"
      label="social"
      value="social"
    ></v-checkbox>  -->
    
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
      >
        Validate
      </v-btn>
  
     
    </v-form>
   
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
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        gender:'',
        genderRules: [
          v => !!v || 'Name is required'],

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
        subject:[]
        
      }),
      
  
      methods: {
        validate () {
          console.log(this.subject)
          this.$refs.form.validate()
          const arr = {
            name : this.name,
            email : this.email,
            gender :this.gender,
            choice :this.subject,
            items:this.select,

          }
          console.log(JSON.stringify(arr))
        },
    
      },
     
      
    }
    
  </script>
  