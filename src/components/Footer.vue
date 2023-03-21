<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer>
        <div class="container">
            <div class="text">
                <div class="adresse column">
                    <h3>Adresse</h3>
                    <p>Våkleieven 2</p>
                    <p>5151 Bønes</p>
                    <p><span class="orange">se på kart</span></p>
                </div>

                <div class="kontakt column">
                    <h3>Kontakt</h3>
                    <p>Tlf: <span class="orange">900 00 80</span></p>
                    <p>E-post: <span class="orange">rask@tidig.no</span></p>
                    <p>Org nr: 983 783 357</p>
                </div>

                <div class="personvern column">
                    <p><span class="orange">Personvern</span></p>
                    <p><span class="orange">Kjøpsvilkår</span></p>
                    <p>&copy;2023 Rask Tidig AS</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #222222;
    font-family: 'Noto Sans', sans-serif;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    width: 100%;
    padding: 2rem 0;
}

.text {
    display: flex;
    width: 100%;
    justify-content: space-between;
    user-select: none;
    align-items: center;
    color: aliceblue;
}

.column {
    display: flex;
    font-size: 14px;
    width: 200px;
    flex-direction: column;
    margin: 0 8rem 0 8rem;
}

.personvern {
    line-height: 2rem;
}

.orange {
    color: #FFA500;
    cursor: pointer;
}

@media only screen and (max-width: 950px) {
    footer {
        overflow-x: hidden;
    }
    .text {
        gap: 1rem;
        align-items: flex-start;
    }
    .text > .adresse {
        margin-left: 2rem;
    }
    .column {
        margin: 0;
    }
}
</style>