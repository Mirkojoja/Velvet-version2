<template>
  <b-container id="menuNavbar">
    <h1>Jelovnik</h1>
    <hr />
    <div class="menu-container">
      <div class="row">
        <div class="col">
          <button
            v-for="button in buttons"
            :key="button.id"
            class="menu-btn"
            @click="displayMenu(button.id)"
          >
            {{ button.name }}
          </button>
        </div>
      </div>
      <div v-for="item in menus" :key="item.id" class="row image-container">
        <div v-if="show === item.id">
          <img :src="item.image" alt="" />
          <img :src="item.image1" alt="" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { id: 1, name: "Doručak" },
        { id: 2, name: "Sendviči" },
        { id: 3, name: "Predjela" },
        { id: 4, name: "Salate  &  supe" },
        { id: 5, name: "Glavna jela" },
        { id: 6, name: "Pizze" },
        { id: 7, name: "Paste" },
        { id: 8, name: "Obrok Salate" },
        { id: 9, name: "Poslastice" },
      ],
      menus: [
        {
          id: 1,
          image: require("@/assets/images/menu1/dorucak.jpg"),
        },
        {
          id: 2,
          image: require("@/assets/images/menu1/sendvici1.jpg"),
          image1: require("@/assets/images/menu1/sendvici2.jpg"),
        },
        {
          id: 3,
          image: require("@/assets/images/menu1/predjela1.jpg"),
          image1: require("@/assets/images/menu1/predjela2.jpg"),
        },
        {
          id: 4,
          image: require("@/assets/images/menu1/salate.jpg"),
          image1: require("@/assets/images/menu1/supe-corbe.jpg"),
        },
        {
          id: 5,
          image: require("@/assets/images/menu1/glavna-jela1.jpg"),
          image1: require("@/assets/images/menu1/glavna-jela2.jpg"),
        },
        {
          id: 6,
          image: require("@/assets/images/menu1/pizza1.png"),
          image1: require("@/assets/images/menu1/pizza2.png"),
        },
        {
          id: 7,
          image: require("@/assets/images/menu1/pasta1.jpg"),
          image1: require("@/assets/images/menu1/pasta2.jpg"),
        },
        {
          id: 8,
          image: require("@/assets/images/menu1/obrok-salate1.jpg"),
        },

        {
          id: 9,
          image: require("@/assets/images/menu1/dessert1.jpg"),
          image1: require("@/assets/images/menu1/dessert2.jpg"),
        },
      ],
      show: null,
    };
  },
  methods: {
    displayMenu(menu) {
      this.show == menu ? (this.show = null) : (this.show = menu);
    },
  },
};
</script>
