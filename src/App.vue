<script setup>
import { RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <NavBar />
  <div class="">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.content {
  display: flex;
  padding: var(--padding);
  height: 90vh;
}
</style>
