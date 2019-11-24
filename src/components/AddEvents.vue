<template>
  <form class='border border-eventU p-3 rounded mt-3 text-light mb-3'>
    <div class='form-group'>
      <label for='txtEventName'>Cual es el nombre de tu evento:</label>
      <input type='text' class='form-control inputCuston' id='txtEventName' placeholder='event-u' v-model="name" />
    </div>
    <div class='form-group'>
      <label for='taDescription'>Platicanos de tú evento</label>
      <textarea class='form-control inputCuston' id='taDescription' rows='3' v-model="descrption"></textarea>
    </div>
    <div class='form-group'>
      <label for='imgEvent'>Muestranos tu evento</label>
    <input type='text' class='form-control inputCuston' id='imgEvent' placeholder='event-u' />
    </div>
    <div class='form-group'>
      <label for='txtDate'>Fecha de tu evento</label>
      <input type='text' class='form-control inputCuston' id='txtDate' v-model="date"/>
    </div>
    <div class='form-group mt-3'>
      <button type='button' class='btn btn-eventU' v-on:click='saveEvent($event)'>Guardar</button>
      <button type='button' class='btn btn-danger'>Cancelar</button>
    </div>
    <div class='form-group'>
      <label for='txtDate'>Cantidad</label>
      <input type='text' class='form-control inputCuston' id='txtCantidad' />
    </div>
    <div class='form-group'>
      <label for='selService'>Selecciona Servicio</label>
      <select name="selService" >
        <option value="5dbb2b39ac68b60e55971387">ESPACIOS CERRADOS</option>
        <option value="5dbb2b65ac68b60e55971388">JARDINES</option>
        <option value="5dbb2b6eac68b60e55971389">MESAS</option>
        <option value="5dbb2b7cac68b60e5597138a">SILLAS</option>
        <option value="">INFLABLES</option>
        <option value="5dbbea3ddf89683c2aead885">BUFFET DE COMIDA MEXICANA</option>
        <option value="5dbc4909bd6ca85e85dfe89b">CARPAS</option>

      </select>
      <button type='button' class='btn btn-eventU' v-on:click='saveEvent($event)'>Guardar</button>
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
  </form>
</template>
<script>
import api from '../lib/api'
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
      this.$router.push('/')
    },
    async selectCatServices (_event) {
      _event.preventDefault()

      let catServices = await api.catServices()
      this.catServices = catServices.map((catService) => ({
        id: catService._id,
        value: catService.name
      }))
      this.loading = false
      this.$router.push('/dashboard')
    }
  }
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
