<template>
    <div>
        <navbar />
        <b-container class="main">
            <h1>Update Web Sites</h1>
            <b-container class="sub">
              <b-table hover :fields="fields" :items="webs" class="audies">
                <template slot="index" slot-scope="data">
                  {{ webs.indexOf(data.item) + 1 }}
                </template>
                <template slot="name" slot-scope="data">
                  {{ data.item.name }}
                </template>
                <template slot="address" slot-scope="data">
                  {{ data.item.address }}
                </template>
                <template slot="actions" slot-scope="data">
                  <div style="text-align: centre;">
                    <b-button @click="showModal(data.item)" variant="secondary" class="butt">Update</b-button>
                    <b-button @click="deleteWeb(data.item)" variant="danger" class="butt">Remove</b-button>
                  </div>
                </template>
              </b-table>
            </b-container>
            <b-modal hide-footer v-model="modalShow" id="modal1" ref="modal1" title="Update Website">
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
                                      v-model="web.period"
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
                  <b-button @click.prevent="updateWeb" type="submit" variant="outline-success">Update Web</b-button>
                  <b-button @click="hideModal" variant="outline-primary" style="float: right;">Close</b-button>
              </b-form>
            </b-modal>
        </b-container>
    </div>
</template>

<script>
import { GET_WEBS, DELETE_WEB } from "../../../config";

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
      webs: [],
      fields: [
        {
          key: "index",
          label: "#"
        },
        {
          key: "name",
          label: "Web Name"
        },
        {
          key: "address",
          label: "Web Address"
        },
        {
          key: "actions",
          label: "Actions"
        }
      ],
      address: "",
      id:"",
      web: {
        name: "",
        requestType: "get",
        period: "",
        httpStatus: ""
      },
      modalShow: false,
    };
  },
  mounted() {
    this.$store.dispatch("track", false);
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get(GET_WEBS, {
        headers: {
          Authorization: this.$store.state.token
        }
      });
      this.webs = data;
    },
    async deleteWeb(web) {
      await this.$axios.post(
        DELETE_WEB,
        web,
        {
          headers: {
            Authorization: this.$store.state.token
          }
        }
      );
      this.fetchData();
    },
    showModal(web) {
      this.web.name = web.name;
      this.address = web.address;
      this.id = web.id;
      this.web.requestType = web.requestType;
      this.web.period = web.period;
      this.web.httpStatus = web.httpStatus;
      this.modalShow = true;
    },
    hideModal() {
      this.modalShow = false;
    },
    async updateWeb() {
      const web = await this.$axios.post(`${GET_WEBS}/${this.id}`, { ...this.web, id: this.id},
        {
          headers: {
            Authorization: this.$store.state.token
          }
        });
      this.hideModal();
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.main {
  margin-top: 2rem;
  padding: 2rem 4rem;
  margin-bottom: 4rem;
  position: relative;
  /* border: 1px solid black; */
}
.sub {
  width: 80%;
}
h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.del {
  float: right;
  cursor: pointer;
}
.butt {
  margin: 0 5px;
}
.audies th:last-child {
  color: blue;
}
</style>
