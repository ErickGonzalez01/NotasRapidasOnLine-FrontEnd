<style scoped>
    .notas-titulo{
        height: 2rem;
    }
    .notas-titulo:hover{
        background-color: var(--background-notas);
        color: #fff;
    }
</style>
<template>
    <div @click="click" class="notas-titulo p-1 card my-1 fw-bold">
        hola esta es un titulo
    </div>
</template>
<script setup>
    function click(){
        alert("Me has dado click")
    }
</script>