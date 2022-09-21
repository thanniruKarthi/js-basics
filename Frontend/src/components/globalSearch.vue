<template>
    <v-div>
        <v-text-field
                v-model="Key"
                label="search here"
                value="search"
                @keyup="Search"
               >Search
    </v-text-field>
      </v-div>
</template>
    <script>
       import  Vue from "vue"
    import axios from"axios"
    import VueAxios from "vue-axios"
    Vue.use(VueAxios,axios)
  
    export default {
      name: 'searchBar',
      components: {
      },
      methods:{
        async Search(){
            await Vue.axios.post(this.link, {
                Key: this.Key
            }).then((response) => {
               this.$emit('linking',response)
            })
          },
        },
        props: {
          link:String,
        }
    }
    </script>