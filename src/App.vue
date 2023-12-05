<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar class="d-block" color="deep-purple" fixed>
        <v-app-bar-title @click="$router.push({ path: '/' })" class="text-left"><v-btn class="text-md-left">Kino</v-btn></v-app-bar-title>
        <template v-if="!islogged" >
          <v-btn @click="goToLogin">Zaloguj</v-btn>
          <v-btn @click="goToRegister">Zarejestruj</v-btn>
        </template>
        <template v-else-if="islogged && role.includes('Worker')">
          <v-btn @click="this.$router.push({ name: 'halls' })">Sale</v-btn>
          <v-btn @click="this.$router.push({ name: 'showing' })">Showings</v-btn>
          <v-btn @click="this.$router.push({ name: 'movie' })">Filmy</v-btn>
        </template>
        <div v-if="islogged">
          <v-btn @click="logout">Wyloguj</v-btn>
        </div>
      </v-app-bar>
      <v-container class="mt-8">
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
export default {
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToRegister() {
      this.$router.push({ name: "register" });
    },
    logout(){
      this.$store.dispatch("user/logout").then(()=>{
        this.$router.push({ name: "home" });
      })
    }
  },
  computed: {
    ...mapState('user',['islogged']),
    ...mapState('user',['role'])
  },
  data () {
    return {
      isVisible: true
    }
  },
  mounted() {
    this.$store.dispatch("user/getUserDetails");
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: white;
}
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
