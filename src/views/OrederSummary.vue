<template>
  <div class="order">
    <div class="mt-4">
      Twoje bilety zostały zablokowane na czas 10 minut. Pozostało
      {{ minuteCalc }}
    </div>
    <div class="mt-4">
      Podsumowanie Twojego zamówienia: <br />
      Bilety normalne: {{this.tickets.normal}} <br />
      Bilety ulgowe: {{this.tickets.discounted}} <br />
      Cena:{{this.price}} zł
    </div>
    <div class="mt-4 d-flex justify-space-around">
      <v-btn  @click="$router.go(-1)">Wstecz</v-btn><v-btn @click="accept">Akceptuję</v-btn>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex";
  export default {
  name: "OrederSummary",
  data() {
    return {
      timerCount: 600,
    };
  },
  computed: {
    minuteCalc() {
      let seconds =
        this.timerCount % 60 < 10
          ? "0" + (this.timerCount % 60)
          : this.timerCount % 60;
      return Math.floor(this.timerCount / 60) + ":" + seconds;
    },
    ...mapState("order",["tickets"]),
    ...mapState("hall",["reservedSeats"]),
    ...mapGetters("order",["price"])
  },
    methods:{
    accept(){

      }
    },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>

<style scoped></style>
