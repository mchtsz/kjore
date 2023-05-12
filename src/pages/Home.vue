<script setup>
import Chat from "../components/Chat.vue";
import Form from "../components/Form.vue";
import Kurs from "../components/Kurs.vue";
</script>

<template>
  <main>
    <div class="left">
      <Form />
    </div>
    <div class="kurs-container">
      <Kurs />
    </div>

    <div class="right">
      <img src="../images/Car.svg" alt="car">
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
  gap: 1rem;
}

.kurs-container {
  margin: 0;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.right img {
  max-width: 100%;
}

@media only screen and (max-width: 756px) {
  .right img {
    display: none;
  }
}
</style>