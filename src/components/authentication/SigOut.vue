<template>
    <div class="card mx-auto p-2 form-width">
    <form>
        <div class="mb-3">
            <h2>Registrate</h2>
        </div>
        <div>
            <label class="form-label" for="nombre">Nombre:</label>
            <input class="form-control" type="text" name="nombre" id="nombre">
        </div>
        <div>
            <label class="form-label" for="apellido">Apellido:</label>
            <input class="form-control" type="text" name="apellido" id="apellido">
        </div>
        <div>
            <label class="form-label" for="correo">Correo:</label>
            <input class="form-control" type="email" name="correo" id="correo">
        </div>
        <div>
            <label class="form-label" for="password">Contraseña:</label>
            <input class="form-control" type="password" name="password" id="password">
        </div>
        <div>
            <label class="form-label" for="password_repit">Confirmar contraseña:</label>
            <input class="form-control" type="password" name="password_repit" id="password_repit">
        </div>
        <div class="mb-3 mt-2">
            <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/login">Ya tines cuenta, inicia sesion</RouterLink>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <buttom class="btn btn-primary">Registrate</buttom>
        </div>
    </form>
</div>
</template>