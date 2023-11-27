<template>
  <div class="navigation d-flex justify-space-between pa-8">
    <v-btn @click="$router.go(-1)">Wstecz</v-btn>
    <v-btn @click="$router.push({ path: path })">Dalej</v-btn>
  </div>
</template>

<script>
export default {
  name: "NavigationPanel",
  props: ["path"],
};
</script>

<style scoped>
.navigation {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
