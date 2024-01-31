<template>
    <div class="card mx-auto p-2 form-width">
        <form>
            <div>
                <h3>Recuperar contraseña</h3>
                <p>Se enviara un correo electronico con la nueva contraseña.</p>
            </div>
            <div>
                <label class="form-label" for="email">Correo:</label>
                <input class="form-control" type="email" id="email" name="email">
            </div>
            <div>
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/login">Iniciar sesion</RouterLink>
            </div>
            <div class="mt-2 d-flex flex-row justify-content-center">
                <button class="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
</template>
<script setup>

</script>