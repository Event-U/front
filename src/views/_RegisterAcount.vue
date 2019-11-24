<template>
   <div class="container" id="registeracount">
            <form>
                <div class="title-login">
                    <img src="images/logo.png" alt="logo" class="logo">
                    <h1>Registra tu Perfil</h1>
                    <h2>Comienza a organizar eventos de alto impacto</h2>
                </div>
                <div class="form-group">
                    <small>Sobre ti</small>
                    <input type="text" class="form-control input-group-lg first-input-register" placeholder="Primero Nombre">
                    <input type="text" class="form-control input-group-lg medium-input-register" placeholder="Primer Apellido">
                    <small>Datos de Acceso</small>
                    <input type="email" class="form-control input-group-lg medium-input-register" placeholder="Correo Electronico">
                    <input type="password" class="form-control input-group-lg medium-input-register" placeholder="Contraseña">
                    <input type="password" class="form-control input-group-lg medium-input-register" placeholder="Repetir Contraseña">
                    <small>Datos de Contactos</small>
                    <input type="text" class="form-control input-group-lg last-input-register" placeholder="Número Telefónico">
                    <small>¿Como participas dentro de los eventos?</small>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="option1" checked>
                        <label class="form-check-label">
                        Proveedor
                    </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="option2">
                        <label class="form-check-label">
                        Organizador
                        </label>
                    </div>

                </div>
                <button type="submit" class="btn btn-yellow form-control">
                Regístra tu perfil</button>
                <a href="#" class="form-text">¿Ya tienes una cuenta?</a>
            </form>
        </div>
</template>

<script>
export default {
  name: 'RegisterAcount'
}
</script>

<style>
.form-check-label{
    font-size: 100em!important;
}
</style>
