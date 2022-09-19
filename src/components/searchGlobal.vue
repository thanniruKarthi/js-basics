<template>
<v-card>
    
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Search" solo dense v-model="message"></v-text-field>
          <v-btn @click="change()">submit</v-btn>
        </v-col>
      </v-row>
    </v-card>

</template>
<script>
import axios from 'axios';


export default {

  data: () => {
    return {}

  },
  methods: () => ({
    async change() {
      console.log(this.message)
      await axios.post(`http://127.0.0.1:40193/search`, {
        Key: this.message
      }).then(response => {
        this.$emit("funSearchSender", response)
      })
    }

  })

}
</script>