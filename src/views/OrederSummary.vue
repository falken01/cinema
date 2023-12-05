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
    <div class="red">{{ this.message }}</div>
    <div class="mt-4 d-flex justify-space-around">
      <v-btn  @click="goBack">Wstecz</v-btn><v-btn @click="accept">Akceptuję</v-btn>
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
    created() {
      console.log(JSON.parse(JSON.stringify(this.reservations)))
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
    ...mapState("order",["reservations"]),
    ...mapState("hall",["reservedSeats"]),
    ...mapGetters("order",["price"])
  },
    methods:{
    accept(){
        this.$store.dispatch("order/confirm",this.reservations).then((r)=>
        {
          console.log(r)
          console.log(r.data.reservationId)
            if (r.data.reservationId != 0)
            {
              this.$router.push("/my_reservation");
            }
            else{
              this.message = "Nie udało się potwierdzić - inny użytkownik ma wyższy priorytet - spróbuj ponownie później (konkurent może zrezygnować)";
            }
        }).catch(()=>{
          this.message = "Nie udało się potwierdzić - inny użytkownik ma wyższy priorytet - spróbuj ponownie później (konkurent może zrezygnować)";
        })
      },
    goBack(){
        this.$store.dispatch("order/removePending",this.reservations).then((r)=>console.log(r)).catch((e)=>console.log(e))
        this.$router.go(-1)
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
