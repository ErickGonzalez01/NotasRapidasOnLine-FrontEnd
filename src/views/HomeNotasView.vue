<template>
    <div>
        <NavBar :img="false" />
        <NotasContainer>
            <NotaPre v-for="(item, index) in notas.notas" :key="index" :index="index" :id="item.id" :titulo="item.titulo" :contenido="item.contenido.ops" />
        </NotasContainer>
        <PaginateNotas/>
        <IconNuevaNota/>
        <SpinerModal :show="notas.isDisponible" info="Cargando..." />
    </div>
   
</template>
<script setup>
    import NavBar from '@/components/notas/NavBar.vue'
    import NotasContainer from '@/components/notas/NotasContainer.vue'
    import NotaPre from '@/components/notas/NotaPre.vue'
    import SpinerModal from '@/components/SpinerModal.vue'
    import PaginateNotas from '@/components/notas/PaginateNotas.vue'
    import IconNuevaNota from '@/components/notas/IconNuevaNota.vue'
    import { Notas } from '@/stores/notas'

    const notas = Notas()
    
    notas.reset()
    notas.notasApi()

</script>