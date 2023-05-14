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
  height: 90vh;
  gap: 1rem;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom: 6rem;
  margin-left: 8rem;
  width: 50%;
}

.kurs-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 17.5rem;
  width: 50%;
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

  main {
    flex-direction: column-reverse;
    margin-left: 0;
  }

  .kurs-container {
    width: 100%;
    margin-bottom: 0;
    align-items: center;
    justify-content: center;
  }

  .left {
    margin: 0;
    width: 100%;
  }
}
</style>