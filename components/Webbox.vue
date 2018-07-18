<template>
    <b-col class="box" :class="[isGood ? 'good' : 'bad', isTracking ? '' : 'paused']">
        <h2>{{name}}</h2>
    </b-col>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
    address: String,
    httpStatus: Number,
    requestType: String,
    period: Number
  },
  data() {
    return {
      isGood: null,
      isTracking: false,
      periodFunction: null,
      isMounted: true
    };
  },
  mounted() {
    this.track();
  },
  updated() {
    clearInterval(this.periodFunction);
    this.track();
  },
  methods: {
    track() {
      this.periodFunction = setInterval(this.request, this.period * 1000);
    },
    async request() {
      try {
        let response = null;
        switch (this.requestType) {
          case "get":
            response = await this.$axios.get(this.address);
            console.log(response.status);
            break;
          case "head":
            response = await this.$axios.head(this.address);
            console.log(response.status);
            break;
        }
        this.isTracking = true;
        if (response.status == this.httpStatus) {
          this.isGood = true;
        } else {
          this.isGood = false;
        }
        this.isMounted = this.$store.state.track;
        console.log(this.$store.state.track);
        if (this.isMounted) {
          console.log("test");
          console.log(this.name);
        } else {
          console.log("check");
          clearInterval(this.periodFunction);
        }
      } catch (e) {
        this.isTracking = true;
        this.isGood = false;
        clearInterval(this.periodFunction);
      }
    }
  }
};
</script>

 <style scoped>
.box {
  padding: 5rem 2rem;
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  cursor: pointer;
  color: white;
  float: left;
}

.bad {
  background-color: red;
}

.good {
  background-color: green;
}

.paused {
  background-color: yellow;
}

.box:hover {
  color: #191919;
}
</style>
 