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
                          label-for="email">
                <b-form-input id="email"
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
                          label-for="password">
                <b-form-input id="password"
                              type="password"
                              v-model="form.password"
                              required
                              placeholder="Password">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="outline-success">Signup</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: ''
            }
        }
    }
}
</script>

