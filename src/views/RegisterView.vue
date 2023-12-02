<template>
  <div class="home">
    <div class="register-panel">
      Login (mail)
      <input
        class="input_area"
        type="text"
        placeholder="Login"
        v-model="login"
      />
      Nazwa:
      <input
        class="input_area"
        type="text"
        placeholder="Nazwa"
        v-model="name"
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
        @click="applyRegistration"
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
      login: "",
      name: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    collectData() {
      if (this.password === this.password2) {
        return {
          email: this.login,
          password: this.password,
          name: this.name
        };
      }
    },
    applyRegistration() {
      this.$store.dispatch("user/register",this.collectData()).then(()=>{
        this.$router.push({path:"/"})
      })
    }
  },
};
</script>
