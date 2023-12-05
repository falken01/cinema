<template>
  <div class="tickets">
    <div class="mt-8 d-flex">
      <v-col cols="3">
        <div class="film-info align-self-center">
          Film: {{ this.movie.title }}<br />
          Opis: {{ this.movie.description }}<br />
        </div>
      </v-col>
      <v-col>
        <div class="tickets-info">
          <div class="d-flex align-center">
            <v-col cols="3">
              <p>Bilety normalne:</p>
            </v-col>
            <v-col cols="6">Cena: 20zł</v-col>
            <v-col cols="3">
              <v-select
                v-model="tickets.normal"
                :items="numbers"
                label="Item"
                required
              ></v-select>
            </v-col>
          </div>
          <div class="d-flex align-center">
            <v-col cols="3">
              <p>Bilety ulgowe:</p>
            </v-col>
            <v-col cols="6">Cena: 10 zł </v-col>
            <v-col cols="3">
              <v-select
                v-model="tickets.discounted"
                :items="numbers"
                label="Item"
                required
              ></v-select>
            </v-col>
          </div>
        </div>
      </v-col>
    </div>
    <NavigationPanel path="/seats" :disable="numberOfTickets()" @nextPage="sumUpTicket"></NavigationPanel>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NavigationPanel from "../components/NavigationPanel";
export default {
  name: "TicketsView",
  components: { NavigationPanel },
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5],
      tickets: {
        normal: 0,
        discounted: 0,
      },
    };
  },
  computed: {
    ...mapState("movie",["movie"])
  },
  methods:{
      numberOfTickets(){
          return this.tickets.normal + this.tickets.discounted < 1;
      },
    sumUpTicket() {
        this.$store.dispatch("order/initTickets",this.tickets)
    }
  },
  created() {
    this.$store.dispatch("movie/getShowingById", this.$route.params.id).then(()=>{

    }).catch(e=>console.log(e))
  }
};
</script>

<style scoped>
.tickets-info {
}
.labels {
  width: 120px;
}
.test {
}
</style>
