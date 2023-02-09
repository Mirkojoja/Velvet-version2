
<template>
  <section class="relative  px-4 py-4 md:px-32 lg:p-8 bg-white text-gray-800">
    <div class="container mx-auto space-y-12">
      <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img src="../../assets/images/interior/interior17.jpg" alt=""
          class="h-80 dark:bg-gray-500 aspect-video rounded-md">
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
          <h3 class="text-3xl font-bold">Naša priča</h3>
          <p class="px-4 py-6 about d-none d-lg-block d-xl-block text-justify">
            {{ text }}
          </p>
          <p class="md:px-4 pt-3 about d-xl-none d-lg-none text-justify">
            {{ formattedText }}

            <a class="" style="color: blue" @click="showingText = !showingText">
              Pročitaj {{ showingText? "Manje": "Više" }}
            </a>
          </p>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
        <img src="../../assets/images/interior/image11.jpg" alt=""
          class="h-80 dark:bg-gray-500 aspect-video rounded-md">
        <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
          <!-- <span class="text-xs uppercase dark:text-gray-400">Join, it's free</span> -->
          <h3 class="text-3xl font-bold">Velvet Novi Sad</h3>
          <div class="flex flex-row justify-evenly flex-wrap">
            <div>
              <h5 class="mb-3 text-xl text-rose-700 font-semibold">Radno vreme</h5>
              <ul class="list-unstyled text-gray-400 text-base">
                <li>Nedelja - Četvrtak 07:30 h - 23:00 h</li>
                <li>Petak - Subota 07:30 h - 00:00 h</li>
              </ul>
            </div>
            <div>
              <h5 class="mb-3 text-xl text-rose-700 font-semibold text-center ">Kontakt</h5>
              <a class="hover:text-rose-700 text-gray-400" href="tel:+ 381 60/6162-635">+381 60/6162-635</a> <br />
              <a class="hover:text-rose-700 text-gray-400" href="tel:+ 381 62/555-444">+381 62/555-444</a>
            </div>
          </div>
          <div class="flex justify-center py-2">
            <img class="dark-logo w-24" src="@/assets/images/logo-dark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import SocialMedia from "../layout/SocialMedia.vue";

export default {
  // components: { SocialMedia },
  data() {
    return {
      showingText: false,

      text: "Priča našeg restorana potiče od zime 2016. godine, kada smo prvi put došli na ovu lokaciju. Gledajući sam lokal i sve oko lokala, sve je izgledalo vrlo neugledno. Tada niko nije mogao ni pretpostaviti da će to vremenom izrasti u jedan od omiljenih kutaka ovog kraja. Iznenađenje za goste bio je ambijent lokala i zelenilo i uređenost oko lokala sa kompletnom izmenom zatečenog. Vremenom objekat se proširio na tom samom uglu Grbavice, dopunjavao se kako kapacitetom mesta, tako i infrastrukturno da bi danas postao baš to što jeste. Počelo je skromno na uglu Alekse Šantica, a onda se proširilo i duž Puškinove ulice. Uz skromni meni koji je postojao na početku svoj asortiman proširili smo i uneli dosta toga raznovrsnog kako bi svakom od naših gostiju mogli da ponudimo ono što želi, i danas se trudimo da pratimo moderan trend ugostiteljstva, sačuvamo recepturu naših obroka i modernizujemo njihovu prezentaciju",
    };
  },
  computed: {
    formattedText() {
      if (this.showingText) {
        return this.text;
      }
      return `${this.text.slice(0, 228).trim()}...`;
    },
  },
};
</script>

<style>

</style>
