<template>
  <div class="container-fluid">
                    <div id="main-wrapper" class="list-services-content">
                        <div class="row">
                            <div class="col-3 align-center">
                                 <div class="card text-center">
        <img src="../assets/img/anthony-reungere-6bObR3bngCA-unsplash.jpg" class="card-img-top" alt="Placeholder">
        <div class="card-body">
            <h5 class="card-title list-services border-0">Mi gran evento</h5>
            <p class="card-text">Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.</p>
            <button class="button button-primary" data-toggle="modal" data-target="#exampleModal5" data-whatever="@mdo">Generar cotización</button>
        </div>
    </div>
                            </div>
                            <div class="col-3 align-center">
                                 <div class="card text-center">
        <img src="../assets/img/anthony-reungere-6bObR3bngCA-unsplash.jpg" class="card-img-top" alt="Placeholder">
        <div class="card-body">
            <h5 class="card-title list-services border-0">Mi gran evento</h5>
            <p class="card-text">Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.</p>
            <button class="button button-primary" data-toggle="modal" data-target="#exampleModal5" data-whatever="@mdo">Generar cotización</button>

        </div>
    </div>
                            </div>
                            <div class="col-3 align-center">
                                 <div class="card text-center">
        <img src="../assets/img/anthony-reungere-6bObR3bngCA-unsplash.jpg" class="card-img-top" alt="Placeholder">
        <div class="card-body">
            <h5 class="card-title list-services border-0">Mi gran evento</h5>
            <p class="card-text">Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.</p>
            <button class="button button-primary" data-toggle="modal" data-target="#exampleModal5" data-whatever="@mdo">Generar cotización</button>
             <div class="modal fade" id="exampleModal5">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Nueva cotización</h5>
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="form-group">
                                                    <label for="recipient-name" class="col-form-label">Servicio:</label>
                                                        <div class="input-group mb-3">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="inputGroupSelect01">Tus servicios</label>
                                                            </div>
                                                                <select class="custom-select" id="inputGroupSelect01" v-model="catService">
                                                                    <option selected>Seleccionar</option>
                                                                    <option value="1">Sillas</option>
                                                                    <option value="2">Mesas</option>
                                                                    <option value="3">Bebidas</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                <div class="form-group">
                                                    <label for="message-text" class="col-form-label">Precio de tu cotización:</label>
                                                      <input type="text" class="form-control input-group-lg first-input-register effect-8 focus-border" placeholder="El precio de tu cotización" v-model="price"/>
                                                    <label for="message-text" class="col-form-label">Descripción:</label>
                                                    <textarea class="form-control" id="message-text" v-model="description"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="button button-danger" data-dismiss="modal">Cerrar</button>
                                            <button class="button button-primary" v-on:click='saveQuotation($event)'>Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    </div>
                            </div>
                            <div class="col-3 align-center">
                                 <div class="card text-center">
        <img src="../assets/img/anthony-reungere-6bObR3bngCA-unsplash.jpg" class="card-img-top" alt="Placeholder">
        <div class="card-body">
            <h5 class="card-title list-services border-0">Mi gran evento</h5>
            <p class="card-text">Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.Las mejores sillas del condado.</p>
            <button class="button button-primary" data-toggle="modal" data-target="#exampleModal5" data-whatever="@mdo">Generar cotización</button>
        </div>
    </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
import CategoryServiceCard from '../components/CategoryServiceCard'
export default {
  name: 'MyEvents',
  components: {
    CategoryServiceCard
  },data () {
    return {
      name: '',
      provider: '',
      price: '',
      description: ''
    }
  },
  methods: {
    async saveQuotation(_event) {
      _event.preventDefault()
      this.loading = true
      let quotation = {
        name: '',
        provider: "5db9377b2806a23067a99e7b",
        price: '',
        description: ''
      }

     quotation.name = this.name
     quotation.descrption = this.descrption
     quotation.price = this.price
     quotation.description = this.description
      console.log(quotation)
      let res = await api.createQuotation(quotation)
      console.log(res)
      this.loading = false
      this.$router.push('/dashboard')
    }
  }
}
</script>
<style>
.list-services-content .card {
    border-radius: 50px 12px 5px!important;
    border: none;
    margin-bottom: 20px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, .2);

}
.list-services-content .card-text {
    color: #333333;
    font-weight: normal!important;
    font-size: .8em;
}
.list-services-content .card:hover {
    border: solid #ffff00 3px;
    box-shadow: 0px 0px 25px #0000009e;
    transition: ease-in 0.3s;
}
.list-services {
    font-size: 2em;
    color: black;
}
.button{
    background-color: #ffff00!important;
    color: #000000;
    font-size: .9em;
    border-radius: 12px;
    border: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    padding: 9px 15%;
}
.button:hover {
    border: solid 2px;
    border-color: black!important;
    background-color: #ffff00!important;
    color: #000000;
    transition: .3 ease-in;
}
.modal-footer button{
    background-color: #ffff00!important;
    color: #000000;
    font-size: .6em;
    border-radius: 12px;
    border: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
}
.modal-footer>:not(:last-child) {
    margin-right: 0px!important;
}

.service-price-container {
    display: flex;
    justify-content: center;
}
.list-services-content img {
    border-radius: 50px 12px 5px!important;
    max-width: 100%!important;
}
</style>
