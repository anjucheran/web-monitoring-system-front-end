<template>
    <div>
        <b-form>
            <b-form-group label="Email"
                          label-for="email">
                <b-form-input id="email"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Email">
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
            <b-button type="submit" variant="outline-success">Login</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    }
}
</script>

<style scoped>
b-button {
    width: 2rem;
}
</style>

