<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar class="d-block" color="deep-purple" fixed>
        <v-app-bar-title class="text-left">Kino</v-app-bar-title>
        <template v-slot:append>
          <v-btn @click="goToLogin">Zaloguj</v-btn>
          <v-btn @click="goToRegister">Zarejestruj</v-btn>
        </template>
      </v-app-bar>
      <v-container class="mt-8">
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToRegister() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>

<style lang="scss">
#inspire {
  background-color: rgb(194, 75, 119);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
