<template>
    <div>
        <TituloAuthVue />
        <NuevaPassword :email="email"/>
    </div>
</template>
<script setup>
    import TituloAuthVue from '@/components/authentication/TituloAuth.vue';
    import NuevaPassword from '@/components/authentication/NuevaPassword.vue';
    import { defineProps } from 'vue'

    const props=defineProps({
        email: {
            type: String,
            required: true
        }/*,
        password: {
            type: String,
            required: true
        }*/
    })

    //console.log("Correo: ", props.email)
    //console.log("Password: ", props.password)
</script>