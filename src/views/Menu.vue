<template>
    <div>
        <div class="relative bg-bg-image">
            <div class="absolute inset-x-0 bottom-0">
                <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white"
                    preserveAspectRatio="none">
                    <path
                        d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
                    </path>
                </svg>
            </div>
            <div class="px-4 py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
                <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                    <h2 class="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        Jelovnik<br class="hidden md:block" />
                    </h2>
                    <span class="text-rose-700 py-12 text-xl"> Velvet Coffee and Kitchen & Velvet My Pub</span>
                    <p class="mb-6 text-base text-indigo-100 md:text-lg">
                        Ako žudite za nekim novim ukusima, restoran Velvet Kitchen & Velvet Pub je pravo mesto za
                        vas. Posebni ukusi, raznovrsni začini i najkvalitetnije namirnice karakterišu našu kuhinju.
                    </p>
                </div>
            </div>
        </div>
        <div class="md:p-16">
            <div class=" items-center justify-around">
                <Button color="black" v-for="button in buttons" :key="button.id" @buttonClicked="displayMenu(button.id)"
                    :title="button.name">

                </Button>
            </div>
            <div class=" overflow-y-scroll">
                <Modal v-if="showModal" @close="showModal = false">
                    <template v-slot:default>
                        <div v-for="item in menus" :key="item.id" class="row image-container">
                            <div v-if="show === item.id">
                                <img :src="item.image" alt="" />
                                <img :src="item.image1" alt="" />
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
</style>