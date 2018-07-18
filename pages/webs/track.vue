<template>
<div>
    <navbar />
    <div class="main">
        <b-row>
            <b-col cols="3" v-for="(web, index) in webs" :key="index">
                <webbox v-bind="web" />
            </b-col>
        </b-row>
    </div>
</div>
</template>

<script>
import { GET_WEBS } from "../../config";

import Navbar from "~/components/Navbar.vue";
import Webbox from "~/components/Webbox.vue";
export default {
  middleware: "check-auth",
  components: {
    Navbar,
    Webbox
  },
  data() {
    return {
      webs: null
    };
  },
  async mounted() {
    await this.fetchData();
    this.$store.dispatch("track", true);
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get(GET_WEBS, {
        headers: {
          Authorization: this.$store.state.token
        }
      });
      this.webs = data;
    }
  }
};
</script>

<style scoped>
.main {
  margin: 4rem 4rem;
  padding: 2rem 4rem;
  position: relative;
  border: 1px solid black;
}
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
