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
export default {
  name: "cinemaSeat",
  props: {
    num: Number,
    isTaken: Boolean,
  },
  data() {
    return {
      isReserved: false,
      isFree: true,
    };
  },
  methods: {
    take() {
      if (this.taken === true) {
        return this.isTaken;
      } else {
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
