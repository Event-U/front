<template>
<div>
  <form class='border border-eventU p-3 rounded mt-3 text-light mb-3'>
    <div class='form-group'>
      <label for='txtEventName'>Cual es el nombre de tu evento:</label>
      <input type='text' class='form-control inputCuston' id='txtEventName' placeholder='Ej. Reunión fin de año' v-model="name" />
    </div>
    <div class='form-group'>
      <label for='taDescription'>Platicanos de tú evento</label>
      <textarea class='form-control inputCuston' id='taDescription' rows='3' v-model="descrption" placeholder='Cuéntanos un poco más de tu evento'></textarea>
    </div>
    <div class='form-group'>
      <label for='imgEvent'>Muestranos tu evento</label>
    <input type='text' class='form-control inputCuston' id='imgEvent' placeholder='Url de tu imagen' />
    </div>
    <div class='form-group'>
      <label for='txtDate'>Fecha de tu evento</label>
      <input type='text' class='form-control inputCuston date' id='txtDate' v-model="date"/>
    </div>
    <div class="form-group">
        <label class="control-label mb-10 date">Date</label>
        <input type="text" placeholder="" data-mask="99/99/9999" class="form-control date">
        <span class="text-muted">dd/mm/yyyy</span> 
    </div>
    <div class='form-group mt-3'>
      <button type='button' class='btn btn-eventU' v-on:click='saveEvent($event)'>Guardar</button>
      <button type='button' class='btn btn-danger'>Cancelar</button>
    </div>

    <div class='form-group'>
        <label for='txtDate'>Cantidad</label>
      <input type='text' class='form-control inputCuston' id='txtCantidad' />
      <label for='states[]' class="mt-3">Selecciona tus Servicio</label>
        <select id="select-services" class="js-event-services-multiple" name="states[]" multiple="multiple">
            <option value="5dbb2b39ac68b60e55971387">ESPACIOS CERRADOS</option>
            <option value="5dbb2b65ac68b60e55971388">JARDINES</option>
            <option value="5dbb2b6eac68b60e55971389">MESAS</option>
            <option value="5dbb2b7cac68b60e5597138a">SILLAS</option>
            <option value="">INFLABLES</option>
            <option value="5dbbea3ddf89683c2aead885">BUFFET DE COMIDA MEXICANA</option>
            <option value="5dbc4909bd6ca85e85dfe89b">CARPAS</option>
        </select>
      <button type='button' class='btn btn-eventU mt-3' v-on:click='selectCatServices($event)'>Guardar</button>
    </div>

    <div class="row">
      <div class="col-12">
        <table class="table table-dark">
  <thead>
    <tr>

      <th scope="col">Servicio</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ESPACIOS CERRADOS</th>
      <td>1</td>

    </tr>
    <tr>
      <th scope="row">MESAS</th>
      <td>10</td>

    </tr>
    <tr>
      <th scope="row">SILLAS</th>
      <td>100</td>

    </tr>
  </tbody>
</table>
      </div>
    </div>
    <!-- <select id="select-services" class="js-event-services-multiple" name="states[]" multiple="multiple">
  <option value="AL">Sillas</option>
  <option value="WY">Perros</option>
  <option value="WY">Gatos</option>
  <option value="WY">Locos</option>
</select> -->
  </form>
  
</div>

</template>

<script>

import api from '../lib/api'
import { async } from 'q'
export default {
  name: 'AddEvents',
  data () {
    return {
      name: '',
      descrption: '',
      date: '',
      organizator: '',
      catServices: {
        type: Array,
        default: () => ([])
      }
    }
  },
  methods: {
    async saveEvent (_event) {
      _event.preventDefault()
      this.loading = true
      let event = {
        name: '',
        descrption: '',
        date: '',
        organizator: ''
      }

      event.name = this.name
      event.descrption = this.descrption
      event.date = this.date
      event.organizator = '5db93575cd055e2cc698ccd8'

      console.log(event)
      let res = await api.createEvent(event)
      console.log(res)
      this.loading = false
    //   this.$router.push('/')
    },
    async selectCatServices (_event) {
      _event.preventDefault()

      let catServices = await api.catServices()
      this.catServices = catServices.map((catService) => ({
        id: catService._id,
        value: catService.name
      }))
      this.loading = false
    //   this.$router.push('/dashboard')
    }
  }
}
function selectedEventStyle (state) {

  var $state = $(
    '<span style="color:black;font-size:1.4em;">👉🏻<span></span></span>'
  );
  $state.find("span").text(state.text);
  return $state;
};
$(document).ready(function(){
    $('.date').mask('00/00/0000');
})
$(document).ready(function() {
    $('.js-event-services-multiple').select2({
        templateSelection: selectedEventStyle,
        placeholder: "Selecciona uno o varios servicios"
    });
});
</script>
<style scoped>
*{
    background-color: navy;
}
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
#select-services{
    width:100%;
    margin-bottom:5em;
}
#taDescription{
    height:100%;
}

.selected-service{
     color: black!important;
    font-size: 1.4em!important;
    background-color: #ffff00!important;
    border: 1px black solid!important;
    border-radius: 7px!important;
    transition: 1s ease-in!important;
}
.select2-container--default .select2-selection--multiple .select2-selection__choice{
    background-color: red;
    border: 1px solid #aaa;
    border-radius: 4px;
    cursor: text;
}
</style>
