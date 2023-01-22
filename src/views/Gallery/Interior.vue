<template>
  <div id="interior">
    <gallery :images="images" :index="index" @close="index = null"></gallery>

    <div
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      class="image"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '350px',
        height: '200px',
      }"
      @click="index = imageIndex"
    ></div>
    <div class="btn-container">
      <router-link to="/galerija"
        ><button class="menu-btn">Nazad</button></router-link
      >
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  components: {
    gallery: VueGallery,
  },
  data: function () {
    return {
      images: [
        require("@/assets/images/interior/interior2.jpg"),
        require("@/assets/images/interior/interior3.jpg"),
        require("@/assets/images/interior/interior4.jpg"),
        require("@/assets/images/interior/interior5.jpg"),
        require("@/assets/images/interior/interior15.jpg"),
        require("@/assets/images/interior/interior16.jpg"),
        require("@/assets/images/interior/interior17.jpg"),
        require("@/assets/images/interior/interior18.jpg"),
        require("@/assets/images/interior/interior19.jpg"),
        require("@/assets/images/interior/interior20.jpg"),
        require("@/assets/images/interior/interior23.jpg"),
        require("@/assets/images/interior/interior24.jpg"),
        require("@/assets/images/interior/interior25.jpg"),
        require("@/assets/images/interior/interior26.jpg"),
        require("@/assets/images/interior/interior27.jpg"),
        require("@/assets/images/interior/interior28.jpg"),
        require("@/assets/images/interior/interior29.jpg"),
        require("@/assets/images/interior/interior30.jpg"),
        require("@/assets/images/interior/interior31.jpg"),
        require("@/assets/images/interior/pub1.jpg"),
        require("@/assets/images/interior/image9.jpg"),
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss"></style>
>
