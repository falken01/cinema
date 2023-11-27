<template>
  <div class="order">
    <div class="mt-4">
      Twoje bilety zostały zablokowane na czas 10 minut. Pozostało
      {{ minuteCalc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OrederSummary",
  data() {
    return {
      timerCount: 600,
    };
  },
  computed: {
    minuteCalc() {
      let seconds =
        this.timerCount % 60 < 10
          ? "0" + (this.timerCount % 60)
          : this.timerCount % 60;
      return Math.floor(this.timerCount / 60) + ":" + seconds;
    },
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
