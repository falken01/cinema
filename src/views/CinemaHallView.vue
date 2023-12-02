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
        @click="HallButtonClick(hall)"
        >{{ hall.name }}</v-btn
      >
    </div>
    <div class="details mt-8">
      <div>
        <v-text-field
          label="nazwa"
          type="string"
          v-model="currentName"
        ></v-text-field>
      </div>
      <div class="d-flex">
        <v-text-field
          label="rzędy"
          type="number"
          class="pr-2"
          v-model="currentRowsNumber"
        ></v-text-field>
        <v-text-field
          label="kolumny"
          type="number"
          class="pl-2"
          v-model="currentColumnsNumber"
        ></v-text-field>
      </div>
      <div class="d-flex hallEdit justify-space-between">
        <v-btn :color="AddButtonColor" @click="AddButtonClick()">dodaj</v-btn
        ><v-btn :color="EditButtonColor" @click="EditButtonClick()"
          >aktualizuj</v-btn
        ><v-btn :color="DeleteButtonColor" @click="DeleteButtonClick()"
          >usuń</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CinemaHallView",
  data() {
    return {
      AddButtonColor: "red",
      EditButtonColor: "red",
      DeleteButtonColor: "red",
      hallChanged: false,
      hallList: [],
      downloadedHall: null,
      currentName: "",
      currentRowsNumber: null,
      currentColumnsNumber: null,
    };
  },

  watch: {
    currentName(newName) {
      this.hallChanged = this.downloadedHall?.name != newName;
    },
    currentRowsNumber(newRowsNumber) {
      this.hallChanged = this.downloadedHall?.rows != newRowsNumber;
    },
    currentColumnsNumber(newColumnsNumber) {
      this.hallChanged = this.downloadedHall?.columns != newColumnsNumber;
    },
    hallChanged(newhallchanged) {
      if (newhallchanged) {
        this.EditButtonColor = "green";
        this.DeleteButtonColor = "red";
        this.AddButtonColor = "green";
      } else {
        this.EditButtonColor = "red";
        this.DeleteButtonColor = "green";
        this.AddButtonColor = "red";
      }
    },
  },

  methods: {
    checkIfAllDataAreGiven() {
      return (
        this.currentName != "" &&
        this.currentRowsNumber != null &&
        this.currentColumnsNumber != null
      );
    },

    async ReadHallsAndClearPanel() {
      let x = await this.$store.dispatch("hall/getHalls");
      this.hallList = x.data;
      this.AddButtonColor = "red";
      this.EditButtonColor = "red";
      this.DeleteButtonColor = "red";
      this.downloadedHall = null;
      this.currentName = "";
      this.currentRowsNumber = null;
      this.currentColumnsNumber = null;
    },

    HallButtonClick(hall) {
      this.downloadedHall = hall;
      this.currentName = hall.name;
      this.currentRowsNumber = hall.rows;
      this.currentColumnsNumber = hall.columns;
      this.EditButtonColor = "red";
      this.DeleteButtonColor = "green";
      this.AddButtonColor = "red";
    },
    async AddButtonClick() {
      if (this.checkIfAllDataAreGiven() && this.AddButtonColor == "green") {
        await this.$store.dispatch("hall/addHall", {
          name: this.currentName,
          rows: this.currentRowsNumber,
          columns: this.currentColumnsNumber,
        });
        this.ReadHallsAndClearPanel();
      }
    },

    async EditButtonClick() {
      if (this.checkIfAllDataAreGiven() && this.EditButtonColor == "green") {
        let editedId = this.downloadedHall.hallId;

        await this.$store.dispatch("hall/editHall", {
          hallId: editedId,
          name: this.currentName,
          rows: this.currentRowsNumber,
          columns: this.currentColumnsNumber,
        });
        let x = await this.$store.dispatch("hall/getHalls");
        this.hallList = x.data;
        this.hallChanged = false;
        for (let h of this.hallList) {
          if (h.hallId == editedId) {
            this.downloadedHall = h;
          }
        }
      }
    },

    async DeleteButtonClick() {
      if (this.DeleteButtonColor == "green") {
        await this.$store.dispatch(
          "hall/deleteHall",
          this.downloadedHall.hallId
        );
        this.ReadHallsAndClearPanel();
      }
    },
  },

  async mounted() {
    let x = await this.$store.dispatch("hall/getHalls");
    this.hallList = x.data;
  },
};
</script>

<style scoped>
.hallList {
  width: 30%;
}
</style>
