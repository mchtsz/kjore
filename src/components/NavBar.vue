<script setup>
import { RouterLink } from 'vue-router'
import "./icons/logo.svg"
</script>

<template>
    <nav>
        <div class="content">
            <div class="logo">
                <RouterLink to="/">
                    <h1>Rask & Tidig<br /></h1>
                </RouterLink>
            </div>


            <ul class="nav-list">
                <li class="list">
                    <RouterLink to="/"><b>Hjem</b></RouterLink>
                </li>
                <li class="list">
                    <RouterLink to="/kurs">Kurs</RouterLink>
                </li>
                <li class="list">
                    <RouterLink to="/pris">Priser</RouterLink>
                </li>
                <li class="list">
                    <RouterLink to="/om-oss">Om oss</RouterLink>
                </li>
            </ul>

            <div class="meny">
                <p>Meny</p>

                <div class="meny-knapp">
                    <div class="meny-linje"></div>
                    <div class="meny-linje"></div>
                    <div class="meny-linje"></div>
                </div>
            </div>

            <div class="forerkort">
                <p>Ta førerkort</p>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #222222;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    padding: 1rem 0;
    width: 100%;
    overflow-y: hidden;
}

p {
  color: var(--text);
}

.nav-list {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 2rem;
}

.content {
    display: flex;
}

.meny {
    display: none;
    margin-right: 2rem;
    align-items: center;
    font-size: 20px;
    color: white;
    cursor: pointer;
}

.meny-linje {
    width: 30px;
    height: 4px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
}

.meny>p {
    font-size: 24px;
}

.list {
    list-style: none;
    font-size: 20px;
}

.list a {
    text-decoration: none;
    color: var(--text)
}

.list a:hover {
    text-decoration: underline;
}

.logo {
    display: flex;
    text-align: center;
    align-items: center;
    width: 300px;
    margin-left: 3rem;
}

.logo a {
    text-decoration: none;
    cursor: pointer;
}

.logo h1 {
    font-size: 30px;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    color: var(--color);
}

.forerkort {
    display: flex;
    background-color: #222222;
    border: 1px solid #fff;
    justify-content: center;
    width: 300px;
    height: 50px;
    border-radius: 2rem;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-right: 3rem;
    cursor: pointer;
}

.forerkort p {
    color: rgb(255, 255, 255);
    font-size: 18px;
    text-align: center;
}

.forerkort p:hover {
    text-decoration: underline;
}

@media only screen and (max-width: 1155px) {
    .logo {
        margin-left: 1.5rem;
        width: 400px;
    }
}

@media only screen and (max-width: 756px) {
    .nav-list {
        display: none;
    }

    .forerkort {
        display: none;
    }

    .meny {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
}

@media only screen and (max-width: 400px) {
    .logo h1 {
        font-size: 20px;
    }

    .meny p {
        font-size: 20px;
    }
}
</style>