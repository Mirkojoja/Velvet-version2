<template>
  <div>
    <section class=" bg-bg-fresh  bg-cover bg-center object-cover bg-no-repeat flex flex-row">
      <div class="mx-auto bg-transparent max-w-[1340px] md:px-4 py-16  sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0 ">
        <div class=" grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div class="max-w-xl text-center sm:text-left ">
            <h2 class="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Preporuka našeg Šefa Kuhinje
            </h2>

            <p class="mt-4 text-lg text-white">
              Vrhunska priprema i posvećenost poslu čine da naša jela pored toga što izgledaju lepo predstavljaju
              pravi užitak za vas i vaša nepca.
            </p>
            <div class="py-8">
              <router-link to="/jelovnik">
                <Button :title="menu" />
              </router-link>
            </div>
          </div>

          <div class="md:mx-6 lg:col-span-2 0 overflow-hidden ">
            <blockquote class="flex h-full flex-col justify-between bg-white md:px-8 py-12">
              <swiper :slides-per-view="3" :space-between="30" :loop="true" :pagination="true" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide v-for="item in galleryItems" :key="item.id" class="test">
                  <img :src="item.url" width="800" height="400" class="img-fluid w-100 mx-auto rounded-2xl" blank=" ">
                  <p class=" text-gray-800 text-lg md:text-xl font-bold font-serif">{{ item.hoovertext }}</p>
                </swiper-slide>
              </swiper>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

  </div>




</template>

<script>
import Button from '../layout/Button.vue'
import { Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    Button,
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
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  },
  methods: {
    // getImageUrl(imageId) {
    //   return `https://picsum.photos/600/400/?image=${imageId}`
    // },

    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 450px !important;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.w-100 {
  width: 100%;
}

.ml-auto,
.mx-auto {
  margin-left: auto;
}

.mr-auto,
.mx-auto {
  margin-right: auto;
}
</style>