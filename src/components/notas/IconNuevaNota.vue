<style scoped>
    .nr-position-fixed{
        position: fixed;
    }

    .nr-position-bottom{
        bottom: 5rem;
    }
    .nr-position-right{
        right: 5rem;
    }

    .nr-size-box{
        height: 2rem;
        width: 2rem;
    }

    .nr-bg-nueva-nota{
        border-radius: 0.4rem;
        background-color: #272727;
    }

    .hover:hover{
        animation: scale 1s;
    }

    @keyframes scale {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.8);
        }
        100% {
            transform: scale(1);
        }
    }

    @media(max-width: 990px){
        .nr-position-bottom{
        bottom: 5rem;
    }
    .nr-position-right{
        right: 1rem;
    }
    }
</style>
<template>
    <div @click="onClick" class="nr-position-fixed nr-position-bottom nr-position-right nr-size-box d-flex justify-content-center aligement-iten-center nr-bg-nueva-nota hover">

        <img src="@/assets/pencil.png" alt="nota nueva">

    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
    function onClick(){
        router.push({name:'nueva_nota'})
    }
</script>