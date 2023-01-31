<template>
  <div id="food" class="mt-[35%] md:mt-[15%]">
    <gallery :images="images" :index="index" @close="index = null"></gallery>

    <div v-for="(image, imageIndex) in images" :key="imageIndex" class="image" :style="{
      backgroundImage: 'url(' + image + ')',
      width: '350px',
      height: '200px',
    }" @click="index = imageIndex"></div>
    <div class="btn-container">
      <router-link to="/galerija"><button class="menu-btn">Nazad</button></router-link>
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
        /* Dorucak sendvici*/
        require("@/assets/images/food2/eggbacon.jpeg"),
        require("@/assets/images/food2/eggsausage.jpeg"),
        require("@/assets/images/food2/boiledegg1.jpeg"),
        require("@/assets/images/food2/sandwiche1.jpeg"),
        require("@/assets/images/food2/sandwiche3.jpeg"),

        /* Predjela*/
        require("@/assets/images/food2/appitezers.jpeg"),
        require("@/assets/images/food2/bruschetta1.jpeg"),

        /* Glavna jela*/
        require("@/assets/images/food/chicken1.jpg"),
        require("@/assets/images/food/mix.jpg"),
        require("@/assets/images/food/food2.jpg"),
        require("@/assets/images/food2/salmon1.jpeg"),
        require("@/assets/images/food2/smallburgers.jpeg"),
        require("@/assets/images/food2/chicken1.jpeg"),
        require("@/assets/images/food/burger.jpg"),

        /* Pizze*/
        require("@/assets/images/food2/pizza5.jpeg"),
        require("@/assets/images/food2/pizza6.jpeg"),

        /* Paste*/

        require("@/assets/images/food2/pasta3.jpeg"),
        require("@/assets/images/food2/carbonara.jpeg"),
        require("@/assets/images/food2/risoto.jpeg"),
        require("@/assets/images/food2/risoto1.jpeg"),

        /* Obrok salate*/
        require("@/assets/images/food/cesar.jpg"),
        require("@/assets/images/food/cesarSalad.jpeg"),
        require("@/assets/images/food2/chickenSalad.jpeg"),
        require("@/assets/images/food2/salad2.jpeg"),

        /* Salate supe*/
        require("@/assets/images/food/soup.jpg"),

        /* Poslastice*/

        require("@/assets/images/food/sweet1.jpeg"),
        require("@/assets/images/food/sweet2.jpg"),
        require("@/assets/images/food/sweet6.jpg"),
        require("@/assets/images/food/food1.jpg"),
        require("@/assets/images/food/food13.jpg"),
        require("@/assets/images/food/food14.jpg"),
        require("@/assets/images/food/image3.jpg"),
        require("@/assets/images/food/image13.jpg"),
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss">

</style>
>
