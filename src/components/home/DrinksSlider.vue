<template>
  <div>
    <h1>Preporuka naših barmena</h1>

    <vueper-slides
      autoplay
      lazy
      lazy-load-on-drag
      class="no-shadow"
      :visible-slides="3"
      slide-multiple
      :bullets="false"
      :gap="1"
      :arrows-outside="false"
      bullets-outside
      :slide-ratio="0.2"
      :image-ratio="337 / 599"
      transition-speed="250"
      :dragging-distance="60"
      disable-arrows-on-edges
      fixed-height="450px"
      :breakpoints="{
        768: { visibleSlides: 2, slideMultiple: 2 },
        576: { visibleSlides: 1, slideMultiple: 1 },
      }"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },

  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/drinks/coffe2.jpg"),
        },
        {
          image: require("@/assets/images/drinks/coffe4.jpg"),
        },
        {
          image: require("@/assets/images/drinks/coffe1.jpg"),
        },
        {
          image: require("@/assets/images/drinks/drink1.jpg"),
        },

        {
          image: require("@/assets/images/drinks/juice1.jpg"),
        },

        {
          image: require("@/assets/images/drinks/cocktail14.jpg"),
        },

        {
          image: require("@/assets/images/drinks/cocktail1.jpg"),
        },
        {
          image: require("@/assets/images/drinks/cocktail2.jpg"),
        },
        {
          image: require("@/assets/images/drinks/cocktail3.jpg"),
        },
        {
          image: require("@/assets/images/drinks/beer1.jpg"),
        },

        {
          image: require("@/assets/images/drinks/beer2.jpg"),
        },

        {
          image: require("@/assets/images/drinks/wine1.jpg"),
        },
        {
          image: require("@/assets/images/drinks/wine6.jpg"),
        },
        {
          image: require("@/assets/images/drinks/wine7.jpg"),
        },

        {
          image: require("@/assets/images/drinks/wine8.jpg"),
        },
      ],
    };
  },
};
</script>

<style>
.vueperslide,
.vueperslide__image {
  background-size: contain;
  background-repeat: no-repeat;
}
.vueperslides__arrow--prev {
  left: 0 !important;
}
.vueperslides__arrow vueperslides__arrow--next {
  right: 0 !important;
}
.vueperslides--fixed-height {
  height: 500px;
}
.vueperslides__arrows svg {
  color: red;
}
</style>
