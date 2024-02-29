<style>
    .nr-color-spiner{
        color: #424242!important;
    }
</style>
<template>
    <div v-if="show" class="nr-bg-oscuro-opacity position-fixed top-0 start-0 nr-bg-primary w-100 h-100 d-flex justify-content-center align-items-center">
        <div class="nr-bg-oscuro nr-w-25 nr-h-15 card d-flex justify-content-center align-items-center nr-color-spiner">
            <div class="spinner-border" role="status"></div>
            {{ info }}
        </div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'
    defineProps({
        show: Boolean,
        info: String
    })
</script>