<template>
    <div class="box">
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Web Site Name"
    };
  }
};
</script>

 <style scoped>
.box {
  padding: 5rem 2rem;
  background-color: green;
  text-align: center;
}
</style>
 