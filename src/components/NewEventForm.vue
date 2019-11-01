<template>
 <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="form-card card">
                            <div class="card-body">
                                <h5 class="card-title">Sube tu servicio</h5>
                                <p>Recuerda ser lo más específico posible y escribir un buen script de venta para aumentar las posibilidades de ser seleccionado.</p>
                                <form>
                                    <div class="form-group">
                                        <label for="formGroupInput">Nombre de tu servicio</label>
                                        <input type="text-area" class="form-control" id="formGroupInput" placeholder="Mesas 'el buena onda'" v-model="name">
                                    </div>
                                     <div class='form-group'>
                                        <label for='taDescription'>Platicanos de tu servicio</label>
                                        <textarea class='form-control inputCuston' id='taDescription' rows='3' v-model="description"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputStateService">Categoría de tu servicio</label>
                                        <select id="inputStateService" class="form-control custom-select" v-model="catService">
                                            <option selected>Elegir</option>
                                            <option>Bebida</option>
                                            <option>Comida</option>
                                            <option>Decoración</option>
                                            <option>Entretenimiento</option>
                                            <option>Mesa</option>
                                            <option>Silla</option>
                                            <option>Otra</option>
                                        </select>
                                    </div>
                                            <div class="form-group">
                                        <label for="formGroupInput">Foto del servicio</label>
                                        <input type="text-area" class="form-control" id="formGroupInput" placeholder="Insertla URL de tu imagen aquí" v-model="image">
                                    </div>
                                <button type='button' class='btn btn-eventU' v-on:click='saveService($event)'>Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import api from '../lib/api'
export default {
  name: 'NewEventForm',
  data () {
    return {
      name: '',
      description: '',
      catService: '',
      image: ''
    }
  },
  methods: {
    async saveService (_event) {
      _event.preventDefault()
      this.loading = true
      let service = {
        name: '',
        description: '',
        catService: '',
        image: ''
      }

      service.name = this.name
      service.descrption = this.descrption
      service.catService = this.catService
      service.image = this.image
      console.log(service)
      let res = await api.createServices(service)
      console.log(res)
      this.loading = false
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>
.form-card {
    background-color: #252B48;
    color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 20px #171B3A;
}

.form-card label {
    color: #ffff00;
    text-align:left!important;
    display:flex;
}

.form-card:hover {
    border-radius: 20px;
    box-shadow: 0px 0px 25px #0000009e;
    border: none;
    transition: ease-in .2s;
}

.form-card h5 {
    color: #EFF3F9;
    font-size: 2.5em;
}
</style>
