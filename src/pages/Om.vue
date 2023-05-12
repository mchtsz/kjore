<script lang="ts" setup>
import { addDoc, collection } from "firebase/firestore";
import Instructor from "../components/Instructor.vue";
import { ref } from 'vue';
import db from "../firebase";

const UserRef = collection(db, "questions");

const list = [
    {
        image: "/src/images/mike.jpg",
        name: "Mikkel Tusen",
        description: "Bil(B), & Motorsykkel (A1)"
    },
    {
        image: "/src/images/harvey.jpg",
        name: "Harald Spekk",
        description: "Bil(B), Motorsykkel (A1), & Moped (AM146)",
    },
    {
        image: "/src/images/jan.jpg",
        name: "Jan Egil",
        description: "Moped (AM146), & Bil(B)",
    },
]

const content = ref({
    name: "",
    email: "",
    question: "",
})

async function sumbitQuestion() {
    await addDoc(UserRef, content.value)
    console.log("Form submitted");
}

</script>

<template>
    <div class="container">
        <h2>Våre instruktører:</h2>
        <div class="instructors">
            <Instructor v-for="i in list" :key="i.name" :image="i.image" :name="i.name" :description="i.description" />
        </div>
        <h2>Spørsmål?</h2>
        <p>Vi svarer så fort vi kan!</p>
        <div class="column">
            <div class="input-container">
                <input v-model="content.name" placeholder="Navn" />

                <input v-model="content.email" placeholder="Email" type="email" />

                <input v-model="content.question" placeholder="Spørsmål?" type="text" />

                <button @click="sumbitQuestion">Send</button>
            </div>
            <div class="image-container">
                <img src="/src/images/question.png" />
            </div>
        </div>
    </div>
</template>

<style scoped>

.image-container img {
    width: 300px;
    height: 300px;
    overflow: hidden;
}

.container {
    width: 100%;
    justify-content: center;
    text-align: center;
}

.container p {
    margin-bottom: 1rem;
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.column {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.column input {
    padding: 0.5rem;
    border: 1px solid var(--bcolor);
    border-radius: 0.5rem;
    outline: none;
    font-size: 1rem;
}

.column button {
    width: 215px;
    padding: 0.5rem;
    border: 1px solid var(--bcolor);
    border-radius: 0.5rem;
    outline: none;
    font-size: 1rem;
    background-color: var(--bcolor);
    color: var(--text);
    cursor: pointer;
    transition: 0.3s;
}

.container h2 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.container hr {
    width: 800px;
    margin: 0 auto;
}

.instructors {
    margin: 1rem 0 1rem 0;
    display: flex;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}
</style>