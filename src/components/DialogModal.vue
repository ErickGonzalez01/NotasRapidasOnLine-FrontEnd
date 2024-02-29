<style>
    .nr-color-dialog{
        color: #424242!important;
    }
</style>
<template>
    <div v-if="show" class="nr-bg-oscuro-opacity position-fixed top-0 start-0 nr-bg-primary w-100 h-100 d-flex justify-content-center align-items-center">
        <div class="nr-bg-oscuro nr-w-25 nr-h-15 card d-flex justify-content-center align-items-center">
            <div class="car-body d-flex flex-column justify-content-between">
                <h5 class="card-title nr-color-dialog">{{ titulo }}</h5>
                <p class="card-text nr-color-dialog">{{ text }}</p>
                <div class="d-flex justify-content-center">
                    <button v-on:click="$emit('cerrar')" class="btn nr-btn-primary">Aceptar</button>
                </div>            
            </div>
        </div>
    </div>
</template>
<script setup>
    import {defineProps} from 'vue'
    defineProps({
        titulo: String,
        text: String,
        show: Boolean
    })
</script>