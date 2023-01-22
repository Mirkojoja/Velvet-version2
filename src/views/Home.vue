<template>
  <div>
    <section class="relative bg-bg-image  bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white opacity-50">
      </div>
      <div class="relative mx-auto max-w-screen-xl px-8 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class=" font-extrabold sm:text-2xl text-left">
            Let us find your
            <strong class="block font-extrabold text-rose-700 text-2xl md:text-4xl">
              Pridružite nam se na putu ka kompletnom gastronomskom užitku Velvet Coffee and Kitchen & Velvet My Pub!
            </strong>
          </h1>
          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">

          </p>
          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <router-link to="/jelovnik">
              <Button :title="title" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <about />
    <FreshSection />
    <DrinksSection />
    <image-slider />
    <Drinks />
  </div>
</template>

<script>

import Button from "@/components/layout/Button.vue";
import About from "../components/home/About.vue";
import ImageSlider from "../components/home/ImageSlider.vue";
import Drinks from "@/components/home/Drinks.vue";
import DrinksSection from "@/components/home/DrinksSection.vue";
import FreshSection from "../components/home/FreshSection.vue"

export default {
  name: "Home",
  components: {
    About,
    ImageSlider,
    Button,
    Drinks,
    DrinksSection,
    FreshSection

  },

  data() {
    return {
      title: 'Pogledaj meni',
      drinks: 'Karta pica',
    };
  },
};
</script>

<style>

</style>
