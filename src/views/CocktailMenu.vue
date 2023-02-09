
<template>
  <div>
    <div class="relative imageTop h-[60vh]">
      <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
          <path
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
          </path>
        </svg>
      </div>
      <div class="px-4 pt-44 md:py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Karta pića<br class="hidden md:block" />
          </h2>
          <span class="text-rose-700 py-12 text-xl"> Velvet Coffee and Kitchen & Velvet My Pub</span>
          <p class="mb-6 text-base text-indigo-100 md:text-lg">
            Uživajte u selekciji naših pića
          </p>
        </div>
      </div>
    </div>
    <div class="md:p-16">
      <div class=" items-center justify-around">
        <Button color="black" v-for="button in buttonsDrinks" :key="button.id" @buttonClicked="displayMenu(button.id)"
          :title="button.name">

        </Button>
      </div>
      <div class=" overflow-y-scroll">
        <Modal v-if="showModal" @close="showModal = false">
          <template v-slot:default>
            <div v-for="item in divs" :key="item.id" class="row image-container">
              <div v-if="show === item.id">
                <img :src="item.image" alt="" />
              </div>
            </div>

          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/layout/Modal.vue"
import Button from "@/components/layout/Button.vue";
export default {
  components: {
    Modal,
    Button
  },

  data() {
    return {
      showModal: false,

      buttonsDrinks: [
        { id: 1, name: "Strana pića" },
        { id: 2, name: "Rakije" },
        { id: 3, name: "Kokteli" },
        { id: 4, name: "Piva" },
        { id: 5, name: "Bela vina" },
        { id: 6, name: "Rose vina" },
        { id: 7, name: "Crvena vina" },
      ],
      divs: [
        {
          id: 1,
          image: require("@/assets/images/menu1/spirits2.jpg"),
        },
        {
          id: 2,
          image: require("@/assets/images/menu1/spirits1.jpg"),
        },
        {
          id: 3,
          image: require("@/assets/images/menu1/cocktails1.jpg"),
        },
        {
          id: 4,
          image: require("@/assets/images/menu1/beer.jpg"),
        },
        {
          id: 5,
          image: require("@/assets/images/menu1/wines1.jpg"),
        },
        {
          id: 6,
          image: require("@/assets/images/menu1/wines2.jpg"),
        },
        {
          id: 7,
          image: require("@/assets/images/menu1/wines3.jpg"),
        },
      ],
      show: null,
    };
  },
  methods: {
    displayMenu(menu) {
      this.showModal = true;
      this.show == menu ? (this.show = null) : (this.show = menu);
    },

  },
}

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  transition: opacity .5s;
}

.imageTop {
  background: rgb(196, 18, 36);
  background: linear-gradient(90deg, rgba(196, 18, 36, 0.9752275910364145) 11%, rgba(32, 4, 37, 1) 26%, rgba(2, 0, 36, 1) 65%, rgba(147, 21, 43, 1) 79%);

}
</style>