<template>
  <h2 class="pt-4">Moje rezerwacje</h2>
  <div class="hall d-flex justify-space-around">
    <div class="hallList mt-8 justify-center">
      <p>Moje rezerwacje:</p>
      <div>
        <div v-if="this.Lines.length > 0">
          <v-card
            class="mt-8 mb-8 pl-4 pr-4"
            color="indigo"
            v-for="(line, i) in this.Lines"
            :key="i"
            >{{ line }}
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <textarea
        readonly
        v-model="ReservationsText"
        style="width: 100%; height: 200px"
      ></textarea>  -->

<script>
export default {
  name: "ShowingsView",
  data() {
    return {
      Lines: [],
      ReservationsText: "",
    };
  },

  async mounted() {
    let res = await this.$store.dispatch("reservation/getMyReservations");
    if (res && res.status == 200) {
      this.ReservationsList = res.data;
      for (let reservation of res.data) {
        console.log(reservation);
        if (reservation.reservationId != 0) {
          let showing_res = await this.$store.dispatch(
            "showing/getShowing",
            reservation.showingId
          );
          console.log(showing_res.data);

          if (showing_res && showing_res.status == 200) {
            let movie_id = showing_res.data.movieId;
            let hall_id = showing_res.data.hallId;

            console.log("///");
            console.log(movie_id);
            let movie_res = await this.$store.dispatch("movie/getMovie", {
              id: movie_id,
            });
            let hall_res = await this.$store.dispatch("hall/getHall", hall_id);
            console.log("---");
            console.log(hall_res);
            console.log(movie_res);

            if (
              movie_res &&
              movie_res.status == 200 &&
              hall_res &&
              hall_res.status == 200
            ) {
              this.Lines.push(
                "Rezarwacja nr " +
                  reservation.reservationId +
                  " Film: " +
                  movie_res.data.title +
                  " Sala: " +
                  hall_res.data.name +
                  " Rząd: " +
                  reservation.row +
                  " Miejsce: " +
                  reservation.column
              );
            }
          }
        }
      }
    }
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
