<template>
  <div
    class="seat mt-4 mr-2"
    :class="{ reserved: isReserved, free: isFree, taken: isTaken }"
    @click="take"
  >
    {{ num }}
  </div>
</template>


<script>
  import {mapGetters,mapState} from "vuex";
export default {
  name: "cinemaSeat",
  props: {
    num: Number,
    row: Number,
    isTaken: Boolean,
  },
  data() {
    return {
      isReserved: false,
      isFree: true,
    };
  },
  computed: {
    ...mapGetters('order',['sumTickets']),
    ...mapState('hall',['selected',"reservedSeats"])
  },
  methods: {
    take() {
      if (this.taken === true) {
        return 0;
      } else if(this.isFree && !this.isReserved && !this.isTaken && this.selected < this.sumTickets){
        console.log(this.selected);
        this.$store.dispatch("hall/increment",{"row":this.row,"column":this.num});
        this.isFree = !this.isFree;
        this.isReserved = !this.isReserved;
      } else if(!this.isFree && this.isReserved && !this.isTaken  && this.selected > 0){
        console.log(this.selected);
        this.$store.dispatch("hall/decrement",{"row":this.row,"column":this.num});
        this.isFree = !this.isFree;
        this.isReserved = !this.isReserved;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.seat {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  color: white;
}
.free {
  background-color: green;
}

.taken {
  background-color: rgb(255, 0, 0) !important;
}
.reserved {
  background-color: black;
}
</style>
