<template>
<div>
    <navbar />
    <b-container class="main">
        <h1>Track Web Sites</h1>
        <webbox />
    </b-container>
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Webbox from '~/components/Webbox.vue'
export default {
    components: {
        Navbar,
        Webbox
    }
}
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
