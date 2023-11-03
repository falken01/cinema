<template>
 <div id="app">
    <v-app id="inspire">
      <v-app-bar class="d-block" color="deep-purple"  fixed >
        <v-app-bar-title class="text-left">Kino</v-app-bar-title>
        <template v-slot:append>
          <v-btn >Zaloguj</v-btn>
          <v-btn >Zarejestru</v-btn>
        </template>
      </v-app-bar >
      <v-container class="mt-8">
        <router-view />
      </v-container>
    </v-app>
</div>
</template>

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
