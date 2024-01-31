<template>
    <div>
        <NavBar />
        <NotasContainer>
            <NotaPre v-for="n in 4" :key="n" :id="n"/>
        </NotasContainer>
    </div>
</template>
<script setup>
    import NavBar from '@/components/notas/NavBar.vue'
    import NotasContainer from '@/components/notas/NotasContainer.vue'
    import NotaPre from '@/components/notas/NotaPre.vue'
</script>