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
                                            <input type="text-area" class="form-control" id="formGroupInput" placeholder="Mesas 'el buena onda'">
                                        </div>
                                        <div class="form-group">
                                            <label for="inputStateService">Categoría de tu servicio</label>
                                            <select id="inputStateService" class="form-control custom-select">
                                                        <option selected>Elegir</option>
                                                        <option>Spot</option>
                                                        <option>Comida</option>
                                                        <option>Decoración</option>
                                                        <option>Lo que necesitas</option>
                                            </select>
                                        </div>
                                        <label>Sube la mejor foto de tu servicio</label>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input form-control" id="customFile">
                                            <label class="custom-file-label" for="customFile">Selecciona tu foto</label>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <label for="validationCustomUsername">Precio Unitario</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
  name: 'NewEventForm'
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
