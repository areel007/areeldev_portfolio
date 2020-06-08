<template>
  <div id="main-body">
    <div class="mobile-navbar" :class="{mobileNavbarOut: slide}">
      <mobile-navbar :links="links" ></mobile-navbar>
    </div>
    <div class="body" :class="{bodyShift: slide}">
        <Biodata />
        <Profile />
    </div>
  </div>
</template>

<script>
import Biodata from './home/Biodata';
import Profile from './home/Profile';

export default {
  name: "mainBody",
  props: ["links", "slide"],
  components: {
      Biodata,
      Profile,
  },
};
</script>

<style scoped>
    #main-body {
        width: 100%;
        overflow-x: hidden;
        position: relative;
        top: 10vh;
    }
    .mobile-navbar {
        transform: translateX(-100%);
        transition: .5s ease-in-out;
        z-index: 1;
        position: absolute;
        position: fixed;
        top: 0;
    }
    .mobileNavbarOut {
        transform: translateX(0%);
    }
    .body {
        width: 100%;
        transform: translateX(0%);
        transition: .5s ease-in-out;
    }
    .bodyShift {
        transform: translateX(70vw);
    }
</style>