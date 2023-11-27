<template>
  <div class="home">
    <div class="register-panel">
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

      Powtórz hasło
      <input
        class="input_area"
        type="password"
        placeholder="Hasło"
        v-model="password2"
      />

      <button
        style="background-color: #deb887; padding: 5px 5px"
        @click="register"
      >
        Zarejestruj się
      </button>
    </div>
  </div>
</template>

<style scoped>
.register-panel {
  background-color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  width: 35vh;
  flex-direction: column;
  gap: 15px;
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
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    register() {
      console.log(
        "Login: ",
        this.username,
        "Hasło: ",
        this.password,
        "Powtórzone hasło: ",
        this.password2
      );
    },
  },
};
</script>
