<script setup>
import Instructor from "../components/Instructor.vue";

const list = [
    {
        image: "/src/images/mike.jpg",
        name: "Mikkel",
        description: "Bil(B), & Motorsykkel (A1)"
    },
    {
        image: "/src/images/harvey.jpg",
        name: "Harald",
        description: "Bil(B), Motorsykkel (A1), & Moped (AM146)",
    },
    {
        image:"/src/images/jan.jpg",
        name: "Jan Egil",
        description: "Moped (AM146), & Bil(B)",
    },
]

</script>

<template>
    <div class="container">
        <h1>Informasjon om oss</h1>
        <h2>Våre instruktører:</h2>
        <hr />
        <div class="instructors">
            <Instructor v-for="i in list" :key="i.name" :image="i.image" :name="i.name" :description="i.description" />
        </div>
    </div>
</template>

<style scoped>

.container {
    width: 100%;
}

.container h2 {
    text-align: center;
    margin-top: 3rem;
}

.container hr {
    width: 800px;
    margin: 0 auto;
}
.instructors {
    margin-top: 1rem;
    display: flex;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}
</style>