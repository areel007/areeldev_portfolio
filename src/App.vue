<template>
  <div id="app">
    <Portfolio />
  </div>
</template>

<script>
import Portfolio from "./components/Portfolio";

export default {
  name: "App",
  components: {
    Portfolio
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
