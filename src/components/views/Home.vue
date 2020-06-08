<template>
  <div id="home">
    <navbar :links="links" :slider="slider"></navbar>
    <MainBody :links="links" :slide="slide" />
  </div>
</template>

<script>
// importing the components
import MainBody from "../MainBody";
export default {
  name: "home",
  // Reistering the components
  components: {
    MainBody
  },
  data() {
    return {
      links: [
        {menu: 'Home', url: '#biodata'},
        {menu: 'Problem', url: '#profile'},
        {menu: 'Projects', url: '#projects'},
        {menu: 'Blog', url: '#'},
      ],
      slide: false,
      slider: () => {
        this.slide = !this.slide
      }
    };
  }
};
</script>

<style scoped>
</style>