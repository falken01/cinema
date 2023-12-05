<template>
  <h2 class="pt-4">Edytor seansów</h2>
  <div class="hall d-flex justify-space-around">
    <div class="hallList mt-8 justify-center">
      <p>Wybrana sala:</p>
      <select
        v-model="selectedHall"
        style="background-color: white; width: 80%"
      >
        <option v-for="(hall, i) in hallList" :value="hall" :key="i">
          {{ hall.name }}
        </option>
      </select>
      <br />
      <p>Aktualne pokazy</p>
      <textarea
        readonly
        v-model="ChosenShowingsText"
        style="width: 100%; height: 200px"
      ></textarea>
      >
    </div>
    <div class="details mt-8" style="width: 300px">
      <div>
        <p>Film:</p>
        <select
          v-model="selectedMovie"
          style="background-color: white; width: 300px"
        >
          <option v-for="(movie, i) in MovieList" :value="movie" :key="i">
            {{ movie.title }}
          </option>
        </select>
      </div>
      <p>Termin</p>
      <div class="d-flex" style="width: 300px">
        <v-text-field
          label="YYYY-MM-DD HH:MM:SS"
          type="string"
          class="pr-2"
          v-model="givenDate"
        ></v-text-field>
      </div>
      <div class="d-flex hallEdit justify-space-between">
        <v-btn :color="AddButtonColor" @click="AddButtonClick()">dodaj</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowingsView",
  data() {
    return {
      AddButtonColor: "green",
      hallList: [],
      selectedHall: null,
      selectedMovie: null,
      ChosenShowingsText: "",
      ShowingsList: [],
      MovieList: [],
      givenDate: "",
    };
  },

  watch: {
    selectedHall(newselectedHall) {
      let newChosenShowingsText = "";
      for (let show of this.ShowingsList) {
        if (show.hallId == newselectedHall.hallId) {
          let showingMovie = null;
          for (let movie of this.MovieList) {
            if (show.movieId == movie.movieId) {
              showingMovie = movie.title;
            }
          }

          newChosenShowingsText =
            newChosenShowingsText +
            show.date.replace("T", " ").substring(0, 16) +
            " " +
            showingMovie +
            "\n";
        }
      }
      this.ChosenShowingsText = newChosenShowingsText;
    },
  },

  methods: {
    async AddButtonClick() {
      let res = await this.$store.dispatch("showing/addShowing", {
        date: this.givenDate.replace(" ", "T"),
        movieId: this.selectedMovie.movieId,
        hallId: this.selectedHall.hallId,
      });

      if (res && res.status == 201) {
        let x = await this.$store.dispatch("showing/getShowings");
        this.ShowingsList = x.data;

        let newChosenShowingsText = "";
        for (let show of this.ShowingsList) {
          if (show.hallId == this.selectedHall.hallId) {
            let showingMovie = null;
            for (let movie of this.MovieList) {
              if (show.movieId == movie.movieId) {
                showingMovie = movie.title;
              }
            }

            newChosenShowingsText =
              newChosenShowingsText +
              show.date.replace("T", " ").substring(0, 16) +
              " " +
              showingMovie +
              "\n";
          }
        }
        this.ChosenShowingsText = newChosenShowingsText;
      }
    },
  },

  async mounted() {
    let x = await this.$store.dispatch("hall/getHalls");
    this.hallList = x.data;
    x = await this.$store.dispatch("showing/getShowings");
    this.ShowingsList = x.data;
    x = await this.$store.dispatch("movie/getMovies");
    this.MovieList = x.data;
  },
};
</script>

<style scoped>
.hallList {
  width: 30%;
}
p {
  margin-bottom: 1em;
  margin-top: 1em;
}
</style>
