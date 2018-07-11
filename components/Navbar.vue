<template>
    <b-navbar toggleable="md" type="dark" variant="info" class="color">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-container>
            <b-navbar-brand to="/">WMS</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                <b-nav-item to="track">Track Websites</b-nav-item>
                <b-nav-item to="new">Add Websites</b-nav-item>
                <b-nav-item to="update">Update Websites</b-nav-item>
                <b-nav-item to="delete">Delete Websites</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item @click="logoutUser">Logout</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-container>

        </b-navbar>
</template>

<script>
export default {
    methods: {
        logoutUser() {

        }
    }
};
</script>

<style scoped>
.color {
    background-color: #1a3f45 !important;
}
</style>
