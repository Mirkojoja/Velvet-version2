<template>
  <div>
    <nav class="bg-bgPrimary translate-x-4 shadow-lg fixed w-full  z-10 navbar flex justify-around"
      :class="{ 'hidden-navbar': !showNavbar }">
      <div>
        <a href="" class="flex items-center">
          <img src="@/assets/images/velvet-logo.png" class="h-16" />
        </a>
      </div>
      <div class="flex space-x-7">
        <!-- Primary Navbar items -->
        <div class="hidden md:flex text-base items-center space-x-1">
          <router-link v-for="item in items" :key="item.id" :to="item.to"
            class="link-active py-4 px-2  font-semibold">{{ item.label }}</router-link>
        </div>
      </div>
      <div class="flex items-center text-base text-white">
        <a href="tel:+381 60/6162-635"
          class="mr-6 text-sm font-medium  flex items-center hover:underline hover:text-rose-700 transition-500">
          <Phone />
          +381 60/6162-635
        </a>
        <a href="tel:+381 62/555-444"
          class="mr-6 text-sm font-medium flex items-center hover:underline hover:text-rose-700 transition-500">
          <Phone />
          +381 62/555-444
        </a>
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
const OFFSET = 30
export default {
  name: "Home",
  components: { Phone },

  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      items: [
        { id: 1, label: 'Početna', to: '/' },
        { id: 2, label: 'Jelovnik', to: '/jelovnik' },
        { id: 3, label: 'Karta pića', to: '/karta-pica' },
        { id: 4, label: 'Galerija', to: '/galerija' },
      ],
    }
  },
  mixins: [clickaway],
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    clickedAway() {
      if (this.$refs["collapse-area"].show)
        this.$root.$emit("bv::toggle::collapse", "collapse-area");
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  },
};
</script>
<style lang="scss" scoped>
.link-active {
  color: white;
}

.active {
  color: rgba(190, 18, 60);
  border-bottom: 2px solid rgba(190, 18, 60);

}

.link-active:hover {
  color: rgba(190, 18, 60);

}

.navbar {
  position: fixed;
  // transform: translated(0, 0, 0);
  transition: 0.5s all ease-out;
  padding: 0 !important;
}

.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>