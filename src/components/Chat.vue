<template>
    <div class="chat">
        <img src="./icons/Chat.svg" alt="chat">
    </div>
</template>

<style scoped>
.chat {
    display: flex;
    user-select: none;
    position: fixed;
    cursor: pointer;
    bottom: 1rem;
    right: 1rem;
    background-color: #F99417;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    z-index: 0;
}

.chat>img {
    display: block;
    margin: auto;
    width: 60px;
}
</style>