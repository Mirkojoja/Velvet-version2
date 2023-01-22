<template>
    <div class="max-w-screen-xl mx-auto bg-white dark:text-gray-100">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
            <div
                class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group dark:bg-gray-500">
                <img src="@/assets/images/drinks/cocktail1.jpg" alt="">
                <div
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
            </div>
            <div
                class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500">
                <img src="@/assets/images/drinks/beer1.jpg" alt="">
                <div
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
            </div>
            <div
                class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500">
                <img src="@/assets/images/drinks/cocktail2.jpg" alt="">
                <div
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
            </div>
            <div
                class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500">
                <img src="@/assets/images/drinks/cocktail3.jpg" alt="">
                <div
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
            </div>
            <div
                class="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group dark:bg-gray-500">
                <img src="@/assets/images/drinks/wine1.jpg" alt="">
                <div
                    class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900">
                </div>
            </div>
        </div>
        <div class="mt-4 sm:mt-8 ">
            <router-link to="karta-pica">
                <Button color="black" :title="drinks"></Button>
            </router-link>
        </div>
    </div>
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

</style>