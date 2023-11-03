<template>
  <div class="home">
    <v-card class="mt-8" color="indigo" v-for="film in this.films" :key="film.id">
      <div class="d-flex flex-wrap">
      <v-avatar
        cols="3"
        class="ma-3"
        size="125"
        rounded="0">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
      </v-avatar>
      <v-card-item cols="9">
        <v-card-title>{{ film.title }}</v-card-title>
        <v-card-subtitle>{{ film.desc }}</v-card-subtitle>
      </v-card-item>
      <div class="align-self-center ml-auto flex-shrink-1" cols="3">
        <v-btn class="mr-4 " v-for="(hour,i) in film.hours" :key="i">
          {{ hour }}
        </v-btn>
      </div>
      </div>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
  },
  data() {
    return {
      films: [
        {
          id:1,
          title:"test1",
          desc:"zzzz",
          hours:["8:00","9:00","10:00"]
        },
        {
          id:2,
          title:"test2",
          desc:"xxxx",
          hours:["8:00","9:00","10:00"]

        },
        {
          id:3,
          title:"test3",
          desc:"yyyy",
          hours:["8:00","9:00","10:00"]
          
        }
      ]
    }
  }
};
</script>
