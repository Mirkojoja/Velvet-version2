<template>
    <div>
        <section class="overflow-hidden bg-bg-fresh bg-cover bg-center object-cover bg-no-repeat">
            <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="max-w-lg text-center sm:text-left">
                    <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Svaki dan sveže namirnice
                    </h2>
                    <p class="text-white">Pogledajte našu galeriju fotografija</p>
                    <div class="mt-4 sm:mt-8">
                        <router-link to="/galerija">
                            <Button :title="gallery" />
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
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
            gallery: 'Galerija',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>