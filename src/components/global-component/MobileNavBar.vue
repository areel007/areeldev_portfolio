<template>
    <ul id="mobile-navbar">
        <li v-for='link in links' :key='link.menu'>
            <a :href="link.url">{{ link.menu }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'mobile-navbar',
    props: ['links'],
}
</script>

<style scoped>
    #mobile-navbar {
        background-color: #14eeb7;
        width: 70vw;
        height: 100vh;
        border-top: 1px solid #f5f5f5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    #mobile-navbar li {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        margin-bottom: .1rem;
    }
    #mobile-navbar li:hover {
        background-color: #3bd4ae;
    }
    #mobile-navbar a {
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
    }
</style>