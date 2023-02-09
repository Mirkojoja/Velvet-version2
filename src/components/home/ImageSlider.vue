<template>
  <div class="relative bg-black  bg-cover bg-center object-cover bg-no-repeat px-5 md:px-8 py-12">
    <div class="py-8 flex flex-col justify-center ">
      <h2 class="text-3xl font-bold text-rose-700 tracking-tight sm:text-4xl uppercase">
        Preporuka našeg Šefa Kuhinje
      </h2>
      <p class="my-4 text-lg text-white font font-semibold">
        Vrhunska priprema i posvećenost poslu čine da naša jela pored toga što izgledaju lepo predstavljaju
        pravi užitak za vas i vaša nepca.
      </p>
      <router-link to="/jelovnik">
        <Button :title="menu" />
      </router-link>
    </div>
    <div class="flex overflow-hidden w-full">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in galleryItems" :key="item.id">
          <img :src="item.url" class="rounded-2xl" blank=" ">
          <p class=" text-white text-lg md:text-xl font-bold font-sans">{{ item.hoovertext }}</p>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Button from '../layout/Button.vue'
import "swiper/css/swiper.min.css";

export default {
  props: ["items"],
  components: {
    Swiper,
    SwiperSlide,
    Button
  },
  data() {
    return {
      menu: 'Jelovnik',
      galleryItems: [
        {
          id: 1,
          url: require("@/assets/images/food2/eggbacon.jpeg"),
          hoovertext: "Jaja na oko",
        },
        {
          id: 2,
          url: require("@/assets/images/food2/boiledegg1.jpeg"),
          hoovertext: "Velvet doručak",
        },
        {
          id: 3,
          url: require("@/assets/images/food2/eggsausage.jpeg"),
          hoovertext: "Kajgana",
        },
        {
          id: 4,
          url: require("@/assets/images/food2/sandwiche1.jpeg"),
          hoovertext: "Klub sendvič",
        },
        {
          id: 5,
          url: require("@/assets/images/food2/bruschetta1.jpeg"),
          hoovertext: "Brusketi sir pršuta",
        },
        {
          id: 6,
          url: require("@/assets/images/food2/appitezers.jpeg"),
          hoovertext: "Carpaccio",
        },

        {
          id: 7,
          url: require("@/assets/images/food/chicken1.jpg"),
          hoovertext: "Piletina sa spanaćem",
        },
        {
          id: 8,
          url: require("@/assets/images/food/food2.jpg"),
          hoovertext: "Junetina sa pire krompirom",
        },

        {
          id: 9,
          url: require("@/assets/images/food/mix.jpg"),
          hoovertext: "Ćureći file sa pršutom",
        },
        {
          id: 10,
          url: require("@/assets/images/food2/salmon1.jpeg"),
          hoovertext: "Losos steak",
        },
        {
          id: 11,
          url: require("@/assets/images/food2/salad2.jpeg"),
          hoovertext: "Biftek salata",
        },

        {
          id: 12,
          url: require("@/assets/images/food2/chickenSalad.jpeg"),
          hoovertext: "Velvet salata",
        },
        {
          id: 13,
          url: require("@/assets/images/food/soup.jpg"),
          hoovertext: "Pikantna Meksička čorba",
        },
        {
          id: 14,
          url: require("@/assets/images/food2/pasta3.jpeg"),
          hoovertext: "Bolognese",
        },
        {
          id: 15,
          url: require("@/assets/images/food2/carbonara.jpeg"),
          hoovertext: "Carbonara",
        },
        {
          id: 16,
          url: require("@/assets/images/food2/risoto1.jpeg"),
          hoovertext: "Rižoto sa piletinom",
        },
        {
          id: 17,
          url: require("@/assets/images/food2/pizza5.jpeg"),
          hoovertext: "Capricciosa",
        },
        {
          id: 18,
          url: require("@/assets/images/food2/pizza6.jpeg"),
          hoovertext: "Toscana",
        },
        {
          id: 19,
          url: require("@/assets/images/food/food13.jpg"),
          hoovertext: "Nutela roll",
        },
        {
          id: 20,
          url: require("@/assets/images/food/sweet6.jpg"),
          hoovertext: "Velvet sutlijaš",
        },
        {
          id: 21,
          url: require("@/assets/images/food/sweet1.jpeg"),
          hoovertext: "Nutella cake",
        },
      ],
      swiperOption: {
        slidesPerView: 8,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        breakpoints: {
          1350: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "swiper/swiper.scss";

img {
  height: 300px;
  width: 300px;
  border-radius: 1.5rem;
}

.swiper-slide {
  padding-right: 3px;
}

.swiper-button-next,
.swiper-button-prev {
  --swiper-navigation-color: #ccc;
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: red;
  --swiper-navigation-font: bold;

  &:hover {
    --swiper-navigation-color: #666;
  }
}
</style>