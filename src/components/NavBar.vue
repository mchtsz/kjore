<script setup>
import { RouterLink } from 'vue-router'
import "./icons/logo.svg"

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("test")
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

</script>

<template>
    <nav id="myNav">
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

            <div class="meny dropdown">
                <p>Meny</p>

                <div class="meny-knapp dropbtn" @click="myFunction()">
                    <div class="meny-linje"></div>
                    <div class="meny-linje"></div>
                    <div class="meny-linje"></div>
                </div>

                <div class="dropdown-content" id="myDropdown">
                    <li>
                        <RouterLink to="/">Hjem</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/kurs">Kurs</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pris">Priser</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/om-oss">Om oss</RouterLink>
                    </li>
                </div>
            </div>

            <div class="min-side">
                <p>Min side</p>
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

.navbar a:hover,
.dropdown:hover .dropbtn,
.dropbtn:focus {
    background-color: rgba(255, 255, 255, 0.042);
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 9.4%;
    right: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    background-color: var(--contrast);
    min-width: 150px;
    z-index: 1;
}

.center {
    text-align: center;
}

.dropdown-content li {
    float: none;
    color: rgb(255, 255, 255);
    list-style-type: none;
    padding: 1rem 1rem;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content li a {
    color: rgb(255, 255, 255);
    text-decoration: none;
}

.dropdown-content li:hover {
    background-color: #454545;
}

.show {
    display: block;
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
    gap: 6px;
    align-items: center;
    font-size: 20px;
    color: white;
    cursor: pointer;
}

.meny-linje {
    width: 25px;
    height: 3px;
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

.min-side {
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

.min-side p {
    color: rgb(255, 255, 255);
    font-size: 18px;
    text-align: center;
}

.min-side p:hover {
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

    .min-side {
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