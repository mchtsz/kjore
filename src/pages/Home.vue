<script setup>
import Chat from "../components/Chat.vue";
import Form from "../components/Form.vue";
</script>

<template>
  <main>
    <div class="left">
      <Form />
    </div>
    <div class="right">
      <img src="../components/icons/Car.svg" alt="car">
    </div>
    <Chat />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 1rem;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
</style>