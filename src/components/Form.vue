<script setup>
import { ref } from 'vue';
import { collection, addDoc } from "firebase/firestore";

const driverClass = [
    "Bil (B)",
    "Moped (AM146)",
    "Motorsykkel (A1)",
]

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
</script>

<template>
    <div class="form_container">
        <h1>Bestill kjøretime</h1>
        <div class="row">
            <input v-model="form.name" placeholder="Fornavn">

            <input v-model="form.lastname" placeholder="Etternavn">
        </div>
        <div class="row">
            <input v-model="form.fodselsdato" type="date">

            <input v-model="form.telefon" placeholder="Telefon nummer" type="number">
        </div>
        <div class="row">
            <input v-model="form.epost" placeholder="E-post" type="email">

            <select v-model="form.forerkort" name="Førerkortklasse" id="forerkort">
                <option value="">- Velg en førerkortklasse -</option>
                <option v-for="i in driverClass" :value="i">{{ i }}</option>
            </select>
        </div>
        <div class="row">
            <input v-model="form.adresse" placeholder="Adresse">

            <input v-model="form.kommentar" placeholder="Kommentar">
        </div>
        <button>Send inn</button>
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
    background-color: #FF9900;
    border: 1px solid #FF9900;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    color: #fff;
    cursor: pointer;
    font: inherit;
    margin: 1rem 0;
    padding: 0.5rem;
    width: 100%;
}

input {
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
</style>