<template>
  <div>
    <div class="bg-bgPrimary">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="" class="flex items-center">
          <img src="@/assets/images/velvet-logo.png" class="h-16" />
        </a>
        <div class="flex items-center text-base text-white">
          <a href="tel:+381 60/6162-635"
            class="mr-6 text-sm font-medium  flex items-center hover:underline hover:text-rose-700">
            <Phone />
            +381 60/6162-635
          </a>
          <a href="tel:+381 62/555-444"
            class="mr-6 text-sm font-medium flex items-center hover:underline hover:text-rose-700">
            <Phone />
            +381 62/555-444
          </a>
        </div>
      </div>
    </div>
    <nav class="bg-bgPrimary translate-x-4 shadow-lg fixed w-full top-bar z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Primary Navbar items -->
            <div class="hidden md:flex text-base items-center space-x-1">
              <router-link v-for="item in items" :key="item.id" :to="item.to"
                class="link-active py-4 px-2  font-semibold">{{ item.label }}</router-link>

            </div>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="md:hidden mobile-menu ">
        <ul class="py-4">
          <li> <router-link v-for="item in items" :key="item.id" :to="item.to"
              class="link-active px-2 py-4 font-semibold">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import Phone from "@/assets/icons/Phone.vue";
export default {
  name: "Home",
  components: { Phone },
  data() {
    return {
      items: [
        { id: 1, label: 'Početna', to: '/' },
        { id: 2, label: 'Jelovnik', to: '/jelovnik' },
        { id: 3, label: 'Karta pića', to: '/karta-pica' },
        { id: 4, label: 'Galerija', to: '/galerija' },
      ],
    }
  },
  mixins: [clickaway],
  methods: {
    clickedAway() {
      if (this.$refs["collapse-area"].show)
        this.$root.$emit("bv::toggle::collapse", "collapse-area");
    },
  },
};
</script>
<style lang="scss" scoped>
.link-active {
  color: white;
}

.active {
  color: rgba(190, 18, 60);
  border-bottom: 4px solid rgba(190, 18, 60);


}


.link-active:hover {
  color: rgba(190, 18, 60);

}
</style>