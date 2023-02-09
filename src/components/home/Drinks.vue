
<template>
    <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                <li>
                    <a href="#" class="relative block group">
                        <img src="@/assets/images/drinks/wine1.jpg" alt=""
                            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90" />

                        <!-- <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

                            <span
                                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                Shop Now
                            </span>
                        </div> -->
                    </a>
                </li>
                <li>
                    <a href="#" class="relative block group">
                        <img src="@/assets/images/drinks/cocktail1.jpg" alt=""
                            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90" />

                        <!-- <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

                            <span
                                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                Shop Now
                            </span>
                        </div> -->
                    </a>
                </li>
                <li>
                    <a href="#" class="relative block group">
                        <img src="@/assets/images/drinks/cocktail2.jpg" alt=""
                            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90" />

                        <!-- <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 class="text-xl font-medium text-white">Winter Jumpers</h3>

                            <span
                                class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                Shop Now
                            </span>
                        </div> -->
                    </a>
                </li>
            </ul>
            <div class="mt-4 sm:mt-8 ">
                <router-link to="karta-pica">
                    <Button color="black" :title="drinks"></Button>
                </router-link>
            </div>
        </div>
    </section>

</template>

<script >
import Button from "@/components/layout/Button.vue";

export default {
    components: {
        Button,
    },
    data() {
        return {
            drinks: 'Karta pića',
        }
    }
}
</script>

<style lang="scss" scoped>

</style> -->

<style lang="scss" scoped>

</style>