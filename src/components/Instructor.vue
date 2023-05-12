<script setup lang="ts">
const { image, name, description } = defineProps({
    image: String,
    name: String,
    description: String
})

</script>

<template>
    <div class="row">
        <div class="card">
            <img :src="image" />
            <h3>{{ name }}</h3>
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

.card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
}
</style>