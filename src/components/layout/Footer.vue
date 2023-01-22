
<template>
  <div class=" bg-bgPrimary  border-t border-gray-800">
    <div class="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="flex justify-center py-4">
        <router-link to="/">
          <img src="@/assets/images/velvet-logo.png" alt="" class=" w-20 border-b-0" /></router-link>
      </div>
      <div class="grid row-gap-4 mb-8 lg:grid-cols-4">
        <div class="grid grid-cols-2 gap-3 row-gap-4 lg:col-span-4 md:grid-cols-4">
          <div>
            <h5 class="mb-3 text-xl text-rose-700 font-semibold">Radno vreme</h5>
            <ul class="list-unstyled text-white text-sm">
              <li>Nedelja - Četvrtak 07:30-23:00</li>
              <li>Petak - Subota 07:30-00:00</li>
            </ul>
          </div>
          <div>
            <h5 class="mb-3 text-xl text-rose-700 font-semibold">Kontakt</h5>
            <div class="contact text-white text-sm hover:text-rose-700">
              <a class="hover:text-rose-700" href="tel:+ 381 60/6162-635">+381 60/6162-635</a> <br />
              <a class="hover:text-rose-700" href="tel:+ 381 62/555-444">+381 62/555-444</a>
            </div>
          </div>
          <div>
            <h5 class="mb-3 text-xl text-rose-700 font-semibold text-center">Coffee & kitchen</h5>
            <address class=" text-white text-sm ">
              Alekse Šantića 23,<br />
              21000 Novi Sad<br />
              Srbija.
            </address>
          </div>
          <div>
            <h5 class="mb-3 text-xl text-rose-700 font-semibold text-center">My pub</h5>
            <address class=" text-white text-sm ">
              Puškinova 40,<br />
              21000 Novi Sad<br />
              Srbija.
            </address>
          </div>

        </div>
      </div>
      <div
        class="py-2 flex flex-col md:flex-row md:justify-around items-center border-t border-gray-800 text-sm text-gray-400">
        <div class="flex items-center py-2 space-x-4 sm:mt-0">
          <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-rose-700">
            <Instagram />
          </a>
          <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-rose-700">
            <Facebook />
          </a>
        </div>
        <div class="order-1 md:order-2">
          <ul class="">
            <li>
              <router-link v-for="item in items" :key="item.id" :to="item.to"
                class="link-active px-2 font-semibold border-r-2">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col justify-between py-4 border-t border-gray-800 sm:flex-row">
        <p class="text-sm text-gray-500">&copy; MJCoding, 2023.</p>
      </div>
    </div>
  </div>
</template>
<script>
import Instagram from "@/assets/icons/Instagram.vue";
import Facebook from "@/assets/icons/Facebook.vue";
export default {
  name: "Footer",
  components: {
    Instagram,
    Facebook,

  },
  data() {
    return {
      items: [
        { label: "Početna", to: "/" },
        { label: "Jelovnik", to: "/menu" },
        { label: "Karta pića", to: "/drinks_menu" },
        { label: "Galerija", to: "/galerija" },
      ],
    };
  },
};
</script>

<style scoped>
.link-active {
  color: white;
}

.active {
  color: rgba(190, 18, 60);
}

.link-active:hover {
  color: rgba(190, 18, 60);
}
</style>
