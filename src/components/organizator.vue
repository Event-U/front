<template>
  <div class="col-md-12 mt-3">
    <nav class="bg-mattBlackLight text-muted m-auto">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-item nav-link active text-muted"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
        >Eventos</a>
        <a
          class="nav-item nav-link text-muted"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >Nuevo evento</a>
        <a
          class="nav-item nav-link text-muted"
          id="nav-cotizacion-tab"
          data-toggle="tab"
          href="#nav-cotizacion"
          role="tab"
          aria-controls="nav-cotizacion"
          aria-selected="false"
        >Cotizaciones</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active pt-3"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
      <MyEvents></MyEvents>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <AddEvents></AddEvents>
      </div>
      <div class="tab-pane fade" id="nav-cotizacion" role="tabpanel" aria-labelledby="nav-cotizacion-tab">
        <OrderList></OrderList>
      </div>
    </div>
  </div>
</template>

<script>
import AddEvents from './AddEvents'
import MyEvents from './MyEvents'
import OrderList from './OrderList'
export default {
  name: 'organizator',
  components: {
    AddEvents,
    MyEvents,
    OrderList
  }
}
</script>
<style scoped>

.border-eventU {
    border-color: #FFFFff !important;
    background-color: #252B48;
    border-radius: 8px!important;
    box-shadow: 1px 1px 25px 0px #0000002e;
}
.border-eventU:hover{
    border-color: #FFFF00 !important;
    background-color: #252B48;
    border-radius: 8px!important;
    box-shadow: 1px 1px 20px 0px #000000;
            transition: ease-in .6s;

}
.text-muted {
    color: white!important;
    font-size: 1.2em;
    border-radius:8px;
}

.nav-tabs{
    border-bottom: 1px solid #dee2e6!important;
    background-color: #252B48!important;
    box-shadow: 5px 5px 25px 0px #00000030!important;
}
.nav-tabs .nav-link.active {
    color: black!important;
    background-color: #ffff00;
    font-weight: 500;
    border-color: #dee2e6 #dee2e6 #fff;
        transition: ease-in .4s;
}
</style>
