<script setup>
import { ref } from 'vue';
import { addDoc, collection } from "firebase/firestore";
import db from '../firebase';

const UserRef = collection(db, "users");

const driverClass = [
    "Bil (B)",
    "Moped (AM146)",
    "Motorsykkel (A1)",
]

const send = ref(false);

const form = ref({
    name: "",
    lastname: "",
    fodselsdato: "",
    telefon: "",
    epost: "",
    forerkort: "",
    adresse: "",
    kommentar: "",
})

async function submit() {
    await addDoc(UserRef, form.value)

    send.value = true;
    console.log("Form submitted");
}

</script>

<template>
    <div class="form_container">
        <h1>Bestill kjøretime</h1>
        <hr/>
        <div class="row">
            <input v-model="form.name" placeholder="Fornavn">

            <input v-model="form.lastname" placeholder="Etternavn">
        </div>
        <div class="row">
            <input v-model="form.fodselsdato" type="date">

            <input v-model=" form.telefon" placeholder="Telefonnummer" type="number" required>
        </div>
        <div class="row">
            <input v-model="form.epost" placeholder="E-post" type="email">

            <select v-model="form.forerkort" name="Førerkortklasse" id="forerkort">
                <option value="">Velg førerkortklasse</option>
                <option v-for="i in driverClass" :value="i">{{ i }}</option>
            </select>
        </div>
        <div class="row">
            <input v-model="form.adresse" placeholder="Adresse">

            <input v-model="form.kommentar" placeholder="Kommentar">
        </div>
        <button :disabled="send" :class="{ 'button-active': !send, 'button-deactive': send }" @click="submit">Send
            inn</button>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    gap: 1rem;
    flex-direction: row;
}

select {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    display: block;
    font: inherit;
    margin: 1rem 0;
    padding: 0.5rem;
    width: 100%;
}

button {
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    color: var(--text);
    cursor: pointer;
    font: inherit;
    margin: 1rem 0;
    padding: 0.5rem;
    width: 100%;
}

.form_container h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 24px;
    font-weight: 600;
    color: rgb(37, 37, 37);
    margin-bottom: 4px;
}

.button-active {
    background-color: var(--bcolor);
    border: 1px solid var(--bcolor);
}

.button-deactive {
    background-color: red;
    border: 1px solid red;
}

input {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    display: block;
    font: inherit;
    margin: 1rem 0;
    padding: 0.5rem;
    width: 100%;
}

.form_container {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    padding: 2rem;
}

@media screen and (max-width: 768px) {
    .row {
        flex-direction: column;
        gap: 6px;
    }

    .form_container {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 300px;
        margin: auto;
    }

    .form_container h1 {
        font-size: 20px;
    }

    .select {
        margin: 0.1rem 0;
        padding: 0;
        text-align: center;
        width: 280px;
    }

    input {
        margin: 0.1rem 0;
        width: 280px;
        text-align: center;
    }
}
</style>