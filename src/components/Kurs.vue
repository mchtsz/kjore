<script lang="ts" setup>
    const kurs = [
        {
            id: 1,
            name: "Bil (B)",
            price: 1000,
        },
        {
            id: 2,
            name: "Moped (AM146)",
            price: 500,
        },
        {
            id: 3,
            name: "Motorsykkel (A1)",
            price: 850,
        },
    ]
</script>

<template>
    <div class="container">
        <div class="tabell">
            <h1>Timepris</h1>
            <hr/>
            <div class="kurs" v-for="kursItem of kurs">
                <p>{{ kursItem.name }}</p>
                <p>{{ kursItem.price }}kr pr time</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.kurs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem;
    border-bottom: 1px solid #000;
}

.tabell {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    padding: 2rem 3rem 3rem 3rem;
}

.tabell hr {
    width: 100%;
}

.tabell h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 4px;
}
</style>