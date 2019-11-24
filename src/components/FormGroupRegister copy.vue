<template>
 <div class="form-group-register">
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
</template>

<script>
export default {
  name: 'FormGroup'
}
</script>

<style>
input {
    height: 50px!important;
    font-size: 1.3em!important;
}

.form-text:hover {
    color: #fff;
}
.first-input-register {
    border-radius: 10px 10px 0px 0px;
}

input.form-control:hover {
    border: 3px solid #ffff00;
    color: black;
}

.last-input-register {
    border-radius: 0px 0px 10px 10px;
}
input.form-control {
    padding: 15px 15px 15px 15px;
}

.form-control {
    border: none;
    color: black;
    border-bottom: 1px solid black;
}
small {
    font-size: .8em;
    color:#fff;
}
label {
    font-size: .8em;
    color:#fff;
}

.medium-input-register {
    border-radius: 0px 0px 0px 0px;
}

.last-input-register {
    border-radius: 0px 0px 10px 10px;
}

</style>
