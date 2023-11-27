<template>
  <div class="cinema mt-16">
    <div id="screen">EKRAN</div>
    <div v-for="j in 4" :num="j" :key="j" class="d-flex justify-center">
      <seat
        v-for="i in 10"
        :num="i"
        :key="i"
        @click="$emit('toggle')"
        :is-taken="false"
      />
    </div>
    <NavigationPanel path="/summary"></NavigationPanel>
  </div>
</template>

<script>
// @ is an alias to /src
import seat from "../components/Seat.vue";
import NavigationPanel from "../components/NavigationPanel";

export default {
  name: "CinemaView",
  components: {
    seat,
    NavigationPanel,
  },
  data() {
    return {};
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
