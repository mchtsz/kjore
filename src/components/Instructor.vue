<script setup lang="ts">
const { image, name, description } = defineProps({
    image: String,
    name: String,
    title: String,
    description: String
})

</script>

<template>
    <div class="row">
        <div class="card">
            <img :src="image" />
            <h3>{{ name }}</h3>
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>

.row {
    display: flex;
    flex-direction: row;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 200px;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    margin: 1rem;
}

.card h3 {
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
}

.card h4 {
    color: rgb(67, 67, 67);
    font-size: 1rem;
    text-decoration: dotted;  
    margin: 0.7rem;
}

.card img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
}
</style>