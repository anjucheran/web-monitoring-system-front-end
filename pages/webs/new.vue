<template>
<div>
    <navbar />
<b-container class="main">
    <h1>Add Web Site</h1>
    <b-form>
        <b-form-group label="Web Name"
                        label-for="name">
            <b-form-input id="name"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Web Name">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Web Address"
                        label-for="address">
            <b-form-input id="address"
                            type="text"
                            v-model="form.address"
                            required
                            placeholder="Web Address">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Request Type"
                        label-for="requestType">
            <b-form-select id="requestType" v-model="form.requestType" :options="requestTypes" class="mb-3" required />
        </b-form-group>
        <b-form-group label="Request Interval (seconds)"
                        label-for="period">
            <b-form-input id="period"
                            type="text"
                            v-model="form.period"
                            required
                            placeholder="Request Interval (seconds)">
            </b-form-input>
        </b-form-group>
        <b-form-group label="Expected HTTP Status Code"
                        label-for="httpStatus">
            <b-form-input id="httpStatus"
                            type="text"
                            v-model="form.httpStatus"
                            required
                            placeholder="HTTP Status Code">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="outline-success">Add Web</b-button>
    </b-form>
</b-container>
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
    components: {
        Navbar
    },
    data() {
        return {
            requestTypes: [
                {value: 'get', text: 'GET'},
                {value:'head', text: 'HEAD'}
                ],
            form: {
                name: '',
                address: '',
                requestType: 'get',
                period: '',
                httpStatus: ''
            }
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
