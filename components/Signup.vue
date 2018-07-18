<template>
    <div>
        <b-form>
            <b-form-group label="First Name"
                          label-for="firstName">
                <b-form-input id="firstName"
                              type="text"
                              v-model="form.firstName"
                              required
                              placeholder="First Name">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Last Name"
                          label-for="lastName">
                <b-form-input id="lastName"
                              type="text"
                              v-model="form.lastName"
                              required
                              placeholder="Last Name">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Email"
                          label-for="emails">
                <b-form-input id="emails"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Email">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Username"
                          label-for="username">
                <b-form-input id="username"
                              type="text"
                              v-model="form.username"
                              required
                              placeholder="Username">
                </b-form-input>
            </b-form-group>
            <b-form-group label="Password"
                          label-for="passwords">
                <b-form-input id="passwords"
                              type="password"
                              v-model="form.password"
                              required
                              placeholder="Password">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" @click.prevent="register()" variant="outline-success">Signup</b-button>
        </b-form>
    </div>
</template>

<script>
import { SIGNUP } from "../config";
export default {
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      }
    };
  },
  async mounted() {
    this.formData = new FormData();
  },
  methods: {
    async register() {
      const { data } = await this.$axios.post(SIGNUP, this.form);
      await this.$store.dispatch("login", {
        email: this.form.email,
        password: this.form.password
      });
    }
  }
};
</script>

