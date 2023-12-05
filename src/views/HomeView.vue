<template>
  <div class="home">
    <v-text-field class="mt-8" type="date" v-model="dateInput"></v-text-field>
    <div v-if="this.films.length > 0">
    <v-card
      class="mt-8"
      color="indigo"
      v-for="film in this.films"
      :key="film.id"
    >
      <div class="d-flex flex-wrap">
        <v-avatar cols="3" class="ma-3" size="125" rounded="0">
        </v-avatar>
        <v-card-item cols="9">
          <v-card-title>{{ film.title }}</v-card-title>
          <v-card-subtitle>{{ film.desc }}</v-card-subtitle>
        </v-card-item>
        <div class="align-self-center ml-auto flex-shrink-1" cols="3">
          <v-btn
            class="mr-4"
            v-for="(hour,i) in film.hours"
            :key="i"
            :disabled="!islogged"
            @click="this.$router.push({path:'tickets/'+hour.showingId })"
          >
            {{ hour.hour }}
          </v-btn>
          <v-tooltip activator="parent" location="start" :disabled="islogged"
            >Zaloguj się by zarezerwować</v-tooltip
          >
        </div>
      </div>
    </v-card>
    </div>
    <div class="mt-4" v-else>
      Brak filmów na ten dzień
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // @ is an alias to /src
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      dateInput: new Date().toISOString().substr(0, 10),
      films: [],
    };
  },
  computed: {
    ...mapState('user',['islogged'])
  },
  watch: {
    async dateInput(newDate) {
      let x = await this.$store.dispatch("movie/getTable", newDate);
      let new_films = [];
      for (let i of x.data) {
        let new_film = {
          id: i.movieId,
          title: i.title,
          desc: i.description,
          hours: []
        };

        for (let show of i.showings) {
          let termin = new Date(show.item1);
          let obj = {
            hour: termin.getHours() + ":" + termin.getMinutes(),
            showingId:show.item2
          };
          new_film.hours.push(obj);
        }
        new_films.push(new_film);
      }
      this.films = new_films;
    },
  },

  async mounted() {
    let x = await this.$store.dispatch("movie/getTable", this.dateInput);
    let new_films = [];
    for (let i of x.data) {
      let new_film = {
        id: i.movieId,
        title: i.title,
        desc: i.description,
        hours: []
      };

      for (let show of i.showings) {
        let termin = new Date(show.item1);
        let obj = {
          hour: termin.getHours() + ":" + termin.getMinutes(),
          showingId: show.item2
        };
        new_film.hours.push(obj);
      }
      new_films.push(new_film);
    }
    this.films = new_films;
  },
};
</script>
