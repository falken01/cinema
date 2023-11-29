<template>
  <div class="home">
    <div class="login-panel">
      Login (mail)
      <input
        class="input_area"
        type="text"
        placeholder="Login"
        v-model="username"
      />
      Hasło
      <input
        class="input_area"
        type="password"
        placeholder="Hasło"
        v-model="password"
      />
      <button
        style="background-color: #deb887; padding: 5px 5px"
        @click="loginMethod"
      >
        Zaloguj
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-panel {
  background-color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
  width: 35vh;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 30%;
  left: 40%;
}
.input_area {
  padding: 5px 5px;
  background-color: white;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    collectData() {
      return {
        email: this.username,
        password: this.password
      };
    },
  },
  methods: {
    loginMethod() {
      this.$store
        .dispatch("user/signIn", this.collectData)
    },
  },
};
</script>
