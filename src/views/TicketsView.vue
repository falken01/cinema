<template>
  <div class="tickets">
    <div class="mt-8 d-flex justify-start">
      <v-col cols="3">
        <div class="film-info d-flex justify-start align-center">
          Film: <br />
          Opis: <br />
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
                :rules="[(v) => !!v || 'Item is required']"
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
                :rules="[(v) => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>
            </v-col>
          </div>
        </div>
      </v-col>
    </div>
    <NavigationPanel path="/seats"></NavigationPanel>
  </div>
</template>

<script>
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
