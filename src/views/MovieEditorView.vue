<template>
  <h2 class="pt-4">Edytor filmów</h2>
  <div class="movie d-flex justify-space-around">
    <div class="movieList mt-8 justify-center">
      <v-btn
        block
        size="x-large"
        v-for="(movie, i) in movieList"
        :key="i"
        class="mt-2"
        @click="MovieButtonClick(movie)"
        >{{ movie.title }}</v-btn
      >
    </div>
    <div class="details mt-8">
      <div>
        <v-text-field
          label="Tytuł"
          type="string"
          v-model="currentTitle"
        ></v-text-field>
        <v-text-field
          label="Opis"
          type="string"
          v-model="currentDescription"
        ></v-text-field>
        <v-text-field
          label="Długość HH:MM:SS"
          type="string"
          v-model="currentDuration"
        ></v-text-field>
        <v-text-field
          label="Rok wydania"
          type="number"
          v-model="currentReleaseYear"
        ></v-text-field>
        <v-text-field
          label="Gatunek"
          type="string"
          v-model="currentGenre"
        ></v-text-field>
        <v-text-field
          label="Reżyser"
          type="string"
          v-model="currentDirector"
        ></v-text-field>
        <v-text-field
          label="Aktorzy"
          type="string"
          v-model="currentActors"
        ></v-text-field>
      </div>
      <div class="d-flex movieEdit justify-space-between">
        <v-btn :color="AddButtonColor" @click="AddButtonClick()">dodaj</v-btn
        ><v-btn :color="EditButtonColor" @click="EditButtonClick()"
          >aktualizuj</v-btn
        ><v-btn :color="DeleteButtonColor" @click="DeleteButtonClick()"
          >usuń</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CinemaMovieView",
  data() {
    return {
      AddButtonColor: "red",
      EditButtonColor: "red",
      DeleteButtonColor: "red",
      movieChanged: false,
      movieList: [],
      downloadedMovie: null,
      currentActors: "",
      currentDescription: "",
      currentDirector: "",
      currentDuration: "",
      currentReleaseYear: null,
      currentGenre: "",
      currentTitle: "",
    };
  },

  watch: {
    currentTitle(newTitle) {
      this.movieChanged =
        this.downloadedMovie == null || this.downloadedMovie?.title != newTitle;

      console.log(this.movieChanged);
    },
    currentDescription(newDescription) {
      this.movieChanged =
        this.downloadedMovie == null ||
        this.downloadedMovie?.description != newDescription;
    },
    currentActors(newActors) {
      this.movieChanged =
        this.downloadedMovie == null ||
        this.downloadedMovie?.actors != newActors;
    },
    currentDirector(newDirector) {
      this.movieChanged =
        this.downloadedMovie == null ||
        this.downloadedMovie?.director != newDirector;
    },
    currentReleaseYear(newReleaseYear) {
      this.movieChanged =
        this.downloadedMovie == null ||
        this.downloadedMovie?.yearOfRelease != newReleaseYear;
    },
    currentDuration(newDuration) {
      this.movieChanged =
        this.downloadedMovie == null ||
        this.downloadedMovie?.duration != newDuration;
    },
    currentGenre(newGenre) {
      this.movieChanged =
        this.downloadedMovie == null || this.downloadedMovie?.genre != newGenre;
    },

    movieChanged(newmoviechanged) {
      if (newmoviechanged) {
        this.EditButtonColor = "green";
        this.DeleteButtonColor = "red";
        this.AddButtonColor = "green";
      } else {
        this.EditButtonColor = "red";
        this.DeleteButtonColor = "green";
        this.AddButtonColor = "red";
      }
    },
  },

  methods: {
    checkIfAllDataAreGiven() {
      return (
        this.currentActors != "" &&
        this.currentDescription != "" &&
        this.currentDirector != "" &&
        this.currentDuration != "" &&
        this.currentReleaseYear != null &&
        this.currentGenre != "" &&
        this.currentTitle != ""
      );
    },

    async ReadMoviesAndClearPanel() {
      let x = await this.$store.dispatch("movie/getMovies");
      this.movieList = x.data;
      this.AddButtonColor = "red";
      this.EditButtonColor = "red";
      this.DeleteButtonColor = "red";
      this.downloadedMovie = null;
      this.currentActors = "";
      this.currentDescription = "";
      this.currentDirector = "";
      this.currentDuration = "";
      this.currentReleaseYear = null;
      this.currentGenre = "";
      this.currentTitle = "";
    },

    MovieButtonClick(movie) {
      this.downloadedMovie = movie;

      this.currentActors = movie.actors;
      this.currentDescription = movie.description;
      this.currentDirector = movie.director;
      this.currentDuration = movie.duration;
      this.currentReleaseYear = movie.yearOfRelease;
      this.currentGenre = movie.genre;
      this.currentTitle = movie.title;

      this.EditButtonColor = "red";
      this.DeleteButtonColor = "green";
      this.AddButtonColor = "red";
    },

    async AddButtonClick() {
      if (this.checkIfAllDataAreGiven() && this.AddButtonColor == "green") {
        await this.$store.dispatch("movie/addMovie", {
          title: this.currentTitle,
          description: this.currentDescription,
          duration: this.currentDuration,
          yearOfRelease: this.currentReleaseYear,
          genre: this.currentGenre,
          director: this.currentDirector,
          actors: this.currentActors,
        });
        await this.ReadMoviesAndClearPanel();
        this.AddButtonColor = "green";
      }
    },

    async EditButtonClick() {
      if (this.checkIfAllDataAreGiven() && this.EditButtonColor == "green") {
        let editedId = this.downloadedMovie.movieId;

        await this.$store.dispatch("movie/editMovie", {
          movieId: editedId,
          title: this.currentTitle,
          description: this.currentDescription,
          duration: this.currentDuration,
          yearOfRelease: this.currentReleaseYear,
          genre: this.currentGenre,
          director: this.currentDirector,
          actors: this.currentActors,
        });
        let x = await this.$store.dispatch("movie/getMovies");
        this.movieList = x.data;
        this.movieChanged = false;
        for (let m of this.movieList) {
          if (m.movieId == editedId) {
            this.downloadedMovie = m;
          }
        }
      }
    },

    async DeleteButtonClick() {
      if (this.DeleteButtonColor == "green") {
        await this.$store.dispatch(
          "movie/deleteMovie",
          this.downloadedMovie.movieId
        );
        this.ReadMoviesAndClearPanel();
      }
    },
  },
  async mounted() {
    let x = await this.$store.dispatch("movie/getMovies");
    this.movieList = x.data;
  },
};
</script>

<style scoped>
.movieList {
  width: 30%;
}
</style>
