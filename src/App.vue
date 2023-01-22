<template>
  <div id="app">
    <Header />
    <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
      leave-active-class=" animate__animated animate__fadeOut">
      <router-view />
    </transition>
    <Footer />
    <ScrollUp />
  </div>
</template>
<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import ScrollUp from "vue-scroll-up";
export default {
  components: {
    Header,
    Footer,
    ScrollUp,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
@import "~bootstrap/scss/bootstrap";

#app {
  // font-family: "PT Sans", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Lora", serif;
  }

  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: black rgb(127, 19, 19);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: black;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgb(127, 19, 19);
    border-radius: 20px;
    border: 1px solid gray;
  }

  // h1 {
  //   padding: 30px;
  // }
}
</style>
