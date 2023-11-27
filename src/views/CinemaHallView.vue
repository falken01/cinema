<template>
  <h2 class="pt-4">Edytor sal</h2>
  <div class="hall d-flex justify-space-around">
    <div class="hallList mt-8 justify-center">
      <v-btn
        block
        size="x-large"
        v-for="(hall, i) in hallList"
        :key="i"
        class="mt-2"
        >{{ hall }}</v-btn
      >
    </div>
    <div class="details mt-8">
      <div class="d-flex">
        <v-text-field label="rzędy" type="number" class="pr-2"></v-text-field>
        <v-text-field label="kolumny" type="number" class="pl-2"></v-text-field>
      </div>
      <div>
        <v-text-field></v-text-field>
      </div>
      <div class="d-flex hallEdit justify-space-between">
        <v-btn>dodaj</v-btn><v-btn>aktualizuj</v-btn><v-btn>usuń</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CinemaHallView",
  data() {
    return {
      hallList: ["Sala 1", " Sala2"],
    };
  },
};
</script>

<style scoped>
.hallList {
  width: 30%;
}
</style>
