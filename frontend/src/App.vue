<template>
  <NavBar></NavBar>
  <Artigos/>
</template>

<script>
import Artigos from "@/components/Artigos.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    Artigos,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
