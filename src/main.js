import Vue from 'vue';
import App from './App.vue';

// import global component
import NavBar from './components/global-component/NavBar.vue';
import MobileNavBar from './components/global-component/MobileNavBar.vue';

Vue.config.productionTip = false;

// Global components
Vue.component('navbar', NavBar);
Vue.component('mobile-navbar', MobileNavBar);

new Vue({
  render: h => h(App),
}).$mount('#app')
