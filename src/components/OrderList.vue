<template>
    <div class="col-12 mb-30">
                    <div class="box">
                        <div class="box-head">
                            <h4 class="title">Cotizaciones</h4>
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table class="table table-vertical-middle table-selectable">

                                    <thead>
                                        <tr>
                                            <th><span>Evento</span></th>
                                            <th><span>Servicio</span></th>
                                            <th><span>Proveedor</span></th>
                                            <th><span>Precio</span></th>
                                            <th><span>Estado</span></th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td><span>Boda en la playa</span></td>
                                            <td>Mesas</td>
                                            <td>Mesas El Don</td>
                                            <td>$550</td>
                                            <td><span class="badge badge-success">Aceptada</span></td>
                                            <td><a class="h3" href="#"><i class="zmdi zmdi-more"></i></a></td>
                                        </tr>
                                        <tr class="selected">
                                            <td><span>Evento</span></td>
                                            <td>Mesas</td>
                                            <td>Mesas El Don</td>
                                            <td>$550</td>
                                            <td><span class="badge badge-success">Aceptada</span></td>
                                            <td><a class="h3" href="#"><i class="zmdi zmdi-more"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td><span>Evento</span></td>
                                            <td>Mesas</td>
                                            <td>Mesas El Don</td>
                                            <td>$550</td>
                                            <td><span class="badge badge-warning">Pendiente</span></td>
                                            <td><a class="h3" href="#"><i class="zmdi zmdi-more"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td><span>Evento</span></td>
                                            <td>Mesas</td>
                                            <td>Mesas El Don</td>
                                            <td>$550</td>
                                            <td><span class="badge badge-danger">Rechazada</span></td>
                                            <td><a class="h3" href="#"><i class="zmdi zmdi-more"></i></a></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
  name: 'OrderList'
}
</script>

<style scoped>
.table{
  background-color:#f0f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.25);
}
</style>
