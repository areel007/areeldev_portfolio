<template>
    <div id="navbar">
        <div id="logo" >
            <span>AreelDev</span>
        </div>
        <ul>
            <li v-for="link in links" :key="link.menu" >
                <a :href="link.url">{{ link.menu }}</a>
            </li>
        </ul>
        <div id="hamburger" @click="slider">
            <Hamburger />
        </div>
    </div>
</template>

<script>
import Hamburger from '../icons/Hamburger';

export default {
    name: 'navbar',
    props: ['links', 'slider'],
    components: {
        Hamburger,
    },
    
}
</script>

<style scoped>
    #navbar {
        position: fixed;
        background-color: #14eeb7;
        height: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        z-index: 20;
    }
    #logo {
        margin-left: 2rem;
        margin-right: auto;
    }
    #logo span {
        color: #fff;
        font-weight: 800;
        font-size: 2rem;
    }
    #navbar ul {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        width: 40%;
    }
    #navbar li {
        list-style: none;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 2rem;
        cursor: pointer;
    }
    #navbar li:hover {
        background-color: #3bd4ae;
    }
    #navbar a {
        text-decoration: none;
        color: #fff;
    }
    #hamburger {
        margin-right: 1rem;
        display: none;
    }

    @media screen and (max-width: 1000px) {
        #navbar ul {
            display: none;
        }
        #hamburger {
            display: block;
        }
    }
</style>