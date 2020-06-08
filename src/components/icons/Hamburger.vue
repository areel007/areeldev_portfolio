<template>
    <div id="hamburger">
        <div id="burger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </div>
</template>

<style scoped>
    #hamburger {
        width: 2.5rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #burger {
        width: 2.3rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .bar {
        width: 100%;
        height: .2rem;
        background-color: #fff;
    }
</style>