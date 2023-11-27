<template>
  <h2 class="pt-4">Edytor Filmów</h2>
  <div class="hall d-flex justify-space-around">
    <div class="hallList mt-8 justify-center">
      <v-btn
        block
        size="x-large"
        v-for="(film, i) in filmList"
        :key="i"
        class="mt-2"
        >{{ film }}</v-btn
      >
    </div>
    <div class="details mt-8">
      <div>
        <v-text-field label="Tytuł"></v-text-field>
        <v-text-field label="Opis"></v-text-field>
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
      filmList: ["film 1", " film 2"],
    };
  },
};
</script>

<style scoped>
.hallList {
  width: 30%;
}
</style>
