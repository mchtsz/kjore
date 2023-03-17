<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <NavBar/>
    <div class="content">
      <RouterView />
    </div>
  <Footer/>
</template>

<style scoped>
.content {
  height: 80vh;
}
</style>
