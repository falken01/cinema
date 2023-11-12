<template>
    <div class="cinema mt-16">
        <div v-for="j in 4" :num="j" :key="j" class="d-flex justify-center">
            <seat v-for="i in 10" :num="i" :key="i" @click="$emit('toggle')"/>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import seat from '../components/Seat.vue'

  export default {
    name: "CinemaView",
    components: {
        seat
    },
    data() {
      return {
        
      }
    }
  };
  </script>
  <style>
  .cinema {
    margin: 0 auto;
  }
  </style>