<template>
   <div class="container" id="registeracount">
       <div class="row">
            <form>
                <div class="title-login">
                    <img src="../assets/logo.png" alt="logo" class="logo">
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
                <a href="/#/login" class="form-text">¿Ya tienes una cuenta?</a>
            </form>
            </div>
        </div>
</template>

<script>
export default {
  name: 'RegisterAcount'
}
</script>

<style scoped>
.small small {
    font-size: .75em;
}

h1 {
    font-size: 3.8em;
}

h2 {
    font-size: 1.1em!important;
}

.first-input-register {
    border-radius: 10px 10px 0px 0px;
}

input.form-control:hover {
    border: 3px solid #ffff00;
    color: black;
}

.medium-input-register {
    border-radius: 0px 0px 0px 0px;
}

.last-input-register {
    border-radius: 0px 0px 10px 10px;
}

.form-check-label{
    font-size: 1em!important;
}
.logo {
    width: 200px;
}
.title-login {
    text-align: center;
}
.btn-yellow {
    background: #ffff00;
    border-radius: 8px;
    font-weight: bold;
    color:black;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);}

.container {
    height: 1000px!important;
    background: /* top, transparent red, faked with gradient */
    linear-gradient( rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.45)), url(../assets/bg-loginn.jpg);
    background-size: cover;
    position: absolute;
    /* margin-top: 30%;
    left: 50%;
    transform: translate(-50%, -50%); */
    color: #fff;
}

.form-text:hover {
    color: #fff;
}
.form-text {
    color: #fff;
}

input.form-control {
    padding: 15px 15px 15px 15px;
    font-size: 15px;
}

.form-control {
    border: none;
    color: black;
    border-bottom: 1px solid black;
}
form{
    margin-top:10%;
}
.row{
    max-width:80%;
    text-align: -webkit-center!important;
    display: -webkit-box;
    min-width: 100%;
}
@media (max-width: 700px) {
    body {
        background-repeat: no-repeat;
    }
    .logo {
        margin-top: 50px;
    }
    .container {
        min-width: 100%;
      text-align: -webkit-center;
    }
    h1 {
        font-size: 2.8em;
    }
    h2 {
        font-size: .9em!important;
    }
     .btn-yellow {
      border-radius: 8px;
    font-size: 15px!important;
    font-weight: bold;
    color:black;
    background-color:#ffff00;
    padding: 5px 10%;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    }
}
@media (min-width: 1200px){
.container {
    max-width: 100%!important;
}}
@media (min-width: 992px){
.container {
    max-width: 100%;
}}
</style>
