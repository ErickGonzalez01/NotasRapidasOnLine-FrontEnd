<style scoped>
.imagen{
    display: inline-block;
}
@media(min-width: 600px) {
    .imagen{
        display: none;
    }
}
</style>
<template>
    <nav class="ps-3 pe-3 bg-navbar c-navbar p-2 d-flex flex-row justify-content-between">
        <div class="d-flex flex-row align-items-center gap-2">
            <img v-if="true" @click="store.status ? store.status=false : store.status=true" class="imagen" src="@/assets/logo.svg" style="height:1.56rem;"/>
            <h6 class="mb-0 fw-bold">Erick Yoel Gonzalez Urbina </h6>
        </div>        
        <button class="bg-btn c-navbar btn" >Cerrar</button> 
    </nav>
</template>
<script setup>
import {sidebarNota} from '@/stores/sidebarNota'
const store = sidebarNota()
</script>