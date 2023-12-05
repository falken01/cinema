<template>
  <div class="cinema mt-16">
    <div id="screen">EKRAN</div>
    <div v-for="j in this.rows" :num="j" :key="j" class="d-flex justify-center">
      <seat
        v-for="i in this.columns"
        :num="i"
        :key="i"
        :is-taken="isTakenPlace(j,i)"
        :is-pending="isSeatPendingReservation(j,i)"
        :row="j"
      />
    </div>
    <NavigationPanel path="/summary" :disable="selectedSeats()" @nextPage="reserve"></NavigationPanel>
  </div>
</template>

<script>
import seat from "../components/Seat.vue";
import NavigationPanel from "../components/NavigationPanel";
import {mapState,mapGetters} from "vuex";
export default {
  name: "CinemaView",
  components: {
    seat,
    NavigationPanel,
  },
  computed:{
    ...mapGetters('order',['sumTickets']),
    ...mapState("movie",["movie"]),
    ...mapState("hall",["selected"]),
    ...mapState("hall",["reservedSeats"]),
    ...mapState("hall",["rows", "columns"]),
    ...mapState("showing",["showingId", "movieId", "takenSeats", "hallId"]),
    ...mapGetters("hall",["isTaken"]),
  },
  data() {
    return {};
  },
  async mounted() {
    await this.$store.dispatch("showing/getShowingWithTakenSeats", this.movie.showingId);
    await this.$store.dispatch("hall/getHall", this.hallId);
  },
  methods: {
    isTakenPlace(row,column){
      return (this.takenSeats.filter(obj => obj.row === row && obj.column === column)).length > 0
    },
    isSeatPendingReservation(row,column){
      return (this.takenSeats.filter(obj => obj.row === row && obj.column === column && obj.isPending == true)).length > 0
    },
    selectedSeats(){
      return !(this.selected === this.sumTickets);
    }, reserve(){
      for(let seat of this.reservedSeats) {
        let newSeat = {
          row: seat.row,
          column: seat.column,
          showingId: parseInt(this.movie.showingId)
        };
        console.log(newSeat)
        this.$store.dispatch("order/reserve",newSeat)
      }
    }
  },
};
</script>
<style>
#screen {
  background: #bbb;
  width: 500px;
  height: 25px;
  margin: 0 auto;
}
.cinema {
  margin: 0 auto;
}
</style>
