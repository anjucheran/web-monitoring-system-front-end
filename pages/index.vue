<template>
  <b-container class="main">
    <div class="logo">
      <app-logo />
      <h1 class="title">Web Monitoring System</h1>
      <b-card no-body class="auth container">
        <b-tabs class="tabs" pills card>
          <b-tab title="Login" active>
            <br>
            <login />
          </b-tab>
          <b-tab title="Signup" >
            <br>
            <signup />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Login from '~/components/Login.vue'
import Signup from '~/components/Signup.vue'

export default {
  middleware: 'is-login',
  components: {
    AppLogo,
    Login,
    Signup
  },
  mounted() {
    this.$store.dispatch('track', false);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald');
.main {
  margin-top: 4rem;
  padding: 0 4rem;
  margin-bottom: 4rem;
  position: relative;
}
.logo {
  text-align: center;
}
.title {
  margin-top: 1rem;
  font-weight: strong;
  font-size: 5rem;
  font-family: 'Oswald', sans-serif;
}
.auth {
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 80%;
}
.tabs {
  text-align: left;
}
</style>

