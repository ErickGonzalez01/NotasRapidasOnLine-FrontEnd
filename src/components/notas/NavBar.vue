<style scoped>
.imagen{
    display: inline-block;
}
@media(min-width: 990px) {
    .imagen{
        display: none;
    }
}
</style>
<template>
    <nav class="ps-3 pe-3 bg-navbar c-navbar p-2 d-flex flex-row justify-content-between">
        <div class="d-flex flex-row align-items-center gap-2">
            <img v-if="img" @click="store.status ? store.status=false : store.status=true" class="imagen" src="@/assets/menu-desplegable.png" style="height:1.56rem;"/>
            <h6 class="mb-0 fw-bold">{{ usuario.username }} {{ usuario.lastname }}</h6>
        </div>        
        <button v-on:click="LogOut" class="bg-btn c-navbar btn" >Cerrar</button> 
    </nav>
</template>
<script setup>
    import {sidebarNota} from '@/stores/sidebarNota'
    import {Usuario} from '@/stores/usuario'
    import {useRouter} from 'vue-router'
    import { defineProps } from 'vue';

    const route = useRouter()
    
    const usuario   =   Usuario()
    const store     =   sidebarNota()

    defineProps({
        img:{
            type: Boolean,
            required: true
        }
    })

    function LogOut(){
        usuario.remove()
        route.push({path:"/authentication/login"})
    }
</script>