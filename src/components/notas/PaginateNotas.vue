<style scoped>
    .nt-contenedor-paginate-notas{
        background-color: #000000d8;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
    }
    /*990*/

    @media(max-width: 990px){
        .display{
            display:none;
        }
    }

</style>
<template>
    <div class="nt-contenedor-paginate-notas">
        <nav aria-label="Page navigation example ">
            <ul class="mt-0 mb-0 pagination justify-content-center">
                <li class="page-item">
                    <a v-on:click="notas.reset(); notas.notasApi(notas.pager_curren-1)" class="page-link">Anterior</a>
                </li>
                <li v-for="item in notas.pager" :key="item" class="page-item display">
                    <a v-on:click="notas.reset(); notas.notasApi(item)" class="page-link" :class="{'link-secondary': item==notas.pager_curren}">{{ item }}</a>
                </li>
                <li class="page-item">
                    <a v-on:click="notas.reset(); notas.notasApi(notas.pager_curren+1)" class="page-link" href="#">Siguiente</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
    import { Notas } from '@/stores/notas';

    const notas = Notas()
    
</script>