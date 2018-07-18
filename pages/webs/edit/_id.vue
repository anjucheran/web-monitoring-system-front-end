<template>
<div>
    <navbar />
<b-container class="main">
    <h1>Update Web Site</h1>
    <b-form>
        <b-form-group label="Web Name"
                        label-for="name">
            <b-form-input id="name"
                            type="text"
                            v-model="web.name"
                            required
                            placeholder="Web Name">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Web Address"
                        label-for="address">
            <b-form-input id="address"
                            type="text"
                            v-model="address"
                            required
                            placeholder="Web Address" disabled>
            </b-form-input>
        </b-form-group>
        <b-form-group label="Request Type"
                        label-for="requestType">
            <b-form-select id="requestType" v-model="web.requestType" :options="requestTypes" class="mb-3" required />
        </b-form-group>
        <b-form-group label="Request Interval (seconds)"
                        label-for="period">
            <b-form-input id="period"
                            type="text"
                            v-model="period"
                            required
                            placeholder="Request Interval (seconds)">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Expected HTTP Status Code"
                        label-for="httpStatus">
            <b-form-input id="httpStatus"
                            type="text"
                            v-model="web.httpStatus"
                            required
                            placeholder="HTTP Status Code">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="outline-success">Update Web</b-button>
    </b-form>
</b-container>
</div>
</template>

<script>
import { GET_WEB } from "../../../config";

import Navbar from "~/components/Navbar.vue";
export default {
  middleware: "check-auth",
  components: {
    Navbar
  },
  data() {
    return {
      requestTypes: [
        { value: "get", text: "GET" },
        { value: "head", text: "HEAD" }
      ],
      web: {
        name: "",
        requestType: "get",
        period: "",
        httpStatus: ""
      },
      id: "",
      address: "",
    };
  },
  mounted() {
    this.$store.dispatch("track", false);
    this.id = this.$route.params.id;
    console.log(this.$route.params.id);
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const web = await this.$axios.get(GET_WEB, {
        params: {
          id: this.id
        },
        headers: {
          Authorization: this.$store.state.token
        }
      });
      this.address = web.address;
      this.web.name = web.name;
      this.web.requestType = web.requestType;
      this.web.period = web.period;
      this.web.httpStatus = web.httpStatus;
    }
  }
};
</script>

<style scoped>
.main {
  margin-top: 4rem;
  padding: 2rem 4rem;
  margin-bottom: 4rem;
  position: relative;
  border: 1px solid black;
}
h1 {
  text-align: center;
}
</style>
