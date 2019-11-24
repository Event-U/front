<template>
   <div id="formgroup" class="form-group">
        <input type="email" class="form-control input-group-lg first-input-register effect-8 focus-border" placeholder="Correo Electronico">
        <input type="password" class="form-control input-group-lg last-input-register effect-8 focus-border" placeholder="Contraseña">
        <a href="#" class="form-text">¿Olvidaste tu contraseña?</a>
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
.form-control {
    border: none;
    color: black;
    border-bottom: 1px solid black;
    font-size: 1.6em;
}

.form-text {
    font-size: 0.8em;
      color:#fff;
}
</style>
