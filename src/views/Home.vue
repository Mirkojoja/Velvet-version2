<template>
  <div>
    <section class="relative bg-cover bg-center bg-no-repeat coverBackground min-h-screen ">
      <div class="absolute inset-0 bg-black opacity-50">
      </div>
      <div
        class="relative mx-auto max-w-screen-xl px-8 top-60 md:top-0 md:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-white font-extrabold sm:text-2xl text-left">
            Pridružite nam se na putu ka kompletnom gastronomskom užitku
            <strong class="block font-extrabold text-rose-600 text-xl md:text-3xl uppercase py-4 font-sans">
              Velvet Coffee and Kitchen & Velvet My Pub!
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
    <Drinks />
    <image-slider />
    <DrinksSection />

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
.coverBackground {
  background-image: url('../assets/images/background/velvet-background.jpeg');
}
</style>
