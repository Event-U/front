<template>
  <form class="border border-eventU p-3 rounded mt-3 text-light mb-3">
    <div class="form-group">
      <label for="txtEventName">Cual es el nombre de tu evento:</label>
      <input type="text" class="form-control inputCuston" id="txtEventName" placeholder="event-u" />
    </div>
    <div class="form-group">
      <label for="taDescription">Platicanos de tú evento</label>
      <textarea class="form-control inputCuston" id="taDescription" rows="3"></textarea>
    </div>
    <div class="form-group">
      <label for="imgEvent">Muestranos tu evento</label>
      <input type="file" class="form-control-file inputCuston" id="imgEvent" />
    </div>
    <div class="form-group">
      <label for="txtCp">Cp</label>
      <input type="text" class="form-control inputCuston" id="txtCp" />
    </div>
    <div class="form-group">
      <label for="scState">Estado</label>
      <select class="form-control inputCuston" id="scState">
        <option>Ciudad de México</option>
        <option>Estado de México</option>
        <option>Oaxaca</option>
        <option>Veracruz</option>
        <option>Yucatan</option>
      </select>
    </div>
    <div class="form-group">
      <label for="scTown">Municipio o Delegación</label>
      <select class="form-control inputCuston" id="scTown">
        <option>Huehuetoca</option>
        <option>Coyotepec</option>
        <option>Cuautitlan</option>
      </select>
    </div>
    <div class="form-group">
      <label for="scPlace">Colonia</label>
      <select class="form-control inputCuston" id="scPlace">
        <option>Huehuetoca</option>
        <option>Santa Teresa</option>
        <option>Santa Maria</option>
      </select>
    </div>
    <div class="form-group">
      <label for="txtCalle">Calle</label>
      <input type="text" class="form-control inputCuston" id="txtCp" />
    </div>
    <div class="form-group">
      <label for="txtNumberExt">Número Interior</label>
      <input type="text" class="form-control inputCuston" id="txtNumberExt" />
    </div>
    <div class="form-group">
      <label for="txtNumberInt">Número exterior</label>
      <input type="text" class="form-control inputCuston" id="txtNumberInt" />
    </div>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="swFisica" />
      <label class="custom-control-label inputCuston" for="swFisica">Es Fisica</label>
    </div>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="swMoral" />
      <label class="custom-control-label inputCuston" for="swMoral">Es Moral</label>
    </div>

    <div class="form-group mt-3">
      <button type="button" class="btn btn-eventU">Guardar</button>
      <button type="button" class="btn btn-danger">Cancelar</button>
    </div>
  </form>
</template>
<script>

export default {
  name: 'AddEvents'
}
</script>
<style scoped>
.taDescription:hover{
  text-decoration: underline;
}
.btn-danger {
    color: #fff!important;
    background-color: #ff0000!important;
    border-color: #dc3545;
}
button {
    background: #ffff00;
    /* box-shadow: 2px 3px 6px 3px 3px #33333; */
    border-radius: 12px;
    font-size: 23px!important;
    color:black;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    padding:1% 15%;
    }
label{
      font-size: 1.7em!important;
}
.custom-control{
  height:10px!important;
  display:flex;
  align-content: center;
  background: transparent!important;
}
.inputCuston {
  height:2.4em;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 8px;
    font-size:1.6em;
    transition: .5s ease-in;
    color:white;
}
</style>
