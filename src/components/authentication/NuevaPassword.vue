<template>
    <div class="card mx-auto p-2 form-width">
        <form>
            <div>
                <h3>Cambiar contraseña</h3>
                <h5 class="text-primary">erickjoelg@gmail.com</h5>
            </div>
            <div>
                <label class="form-label" for="password">Nueva contraseña:</label>
                <input class="form-control" type="password" id="password" name="password">
            </div>
            <div>
                <label class="form-label" for="password_comfirm">Confirmar contraseña:</label>
                <input class="form-control" type="password" id="password_comfirm" name="password_comfirm">
            </div>
            <div>
                <RouterLink class="link-offset-2 link-underline link-underline-opacity-0" to="/authentication/login">Iniciar sesion</RouterLink>
            </div>
            <div class="mt-2 d-flex flex-row justify-content-center">
                <button class="btn btn-primary">Aceptar</button>
            </div>
        </form>
    </div>
</template>