<template>
    <div class="seat mt-4 mr-2" :class="{reserved : isReserved, free: isFree}" @click="take">
      {{ num }}
    </div>
  </template>
  
  <script>

  export default {
    name: "cinemaSeat",
    props: {
      num: Number,
    },
    data () {
      return {
        isReserved:false,
        isFree : true
      }
    },
    methods:{
      take(){
        this.isFree = !this.isFree
        this.isReserved = !this.isReserved;
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .seat {
    width: 25px;
    height: 25px;
    color: white
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
  