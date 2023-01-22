<!-- <template>
    <div class="modal-overlay" v-if="show" @click="$emit('close')">
        <div class="modal-content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
.modal-overlay {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: transform .3s ease-out;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    max-width: 600px;
    max-height: 80%;
    overflow-y: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: transform .3s ease-out;
}
</style> -->
<template>
    <Transition>
        <div class="modal-mask h-screen">
            <div class="modal-wrapper">
                <div class="modal-container w-2/3 sm:w-2/6">
                    <div class="flex justify-end relative cursor-pointer">
                        <div @click="close">
                            <span
                                class="absolute top-0 right-0 block w-10 h-5 -mt-2 -mr-4 text-xs text-center text-gray-600 transform rotate-45 bg-white rounded shadow-md cursor-pointer hover:text-rose-700">close</span>
                        </div>
                    </div>
                    <div class="overflow-y-scroll h-screen p-4 md:p-32 " id="custome-scrollbar">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        name: {
            type: String,
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.809);
    display: table;
    transition: opacity 0.9s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    overflow-y: auto;
}

.modal-container {
    margin: 40px auto;
    background-color: rgba(36, 34, 34, 0.554);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: transform 9s;
    border-radius: 12px;



}

/* 
main,
header,
footer {
  padding: 0 50px;
} */

.v-enter-active,
.v-leave-active {
    transition: opacity .7s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #777;
    border-radius: 10px;
    width: 10px;
}
</style>
