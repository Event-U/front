<template>
  <div>
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <button class='navbar-toggler sideMenuToggler' type='button'>
        <span class='navbar-toggler-icon'></span>
      </button>
      <a class='navbar-brand' href='#'>
        <img src='../assets/img/Frame.png' alt srcset style='width: 50%;' />
      </a>
      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item dropdown'>
            <button type='button' class='btn-transparent'>
              <i class='material-icons text-mattRed'>account_circle</i>
            </button>
            <button type='button' class='btn-transparent'>
              <i class='material-icons icon text-mattRed'>settings</i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div class='wrapper d-flex'>
      <div class='sideMenu bg-mattBlackLight'>
        <div class='sidebar'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a
                href='#'
                class='nav-link px-2 sideMenuToggler d-flex align-items-center'
                v-on:click='changePage(1)'
              >
                <i class='material-icons icon mr-3'>dashboard</i>
                <span class='text'>Mis Eventos</span>
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#'
                class='nav-link px-2 sideMenuToggler d-flex align-items-center'
                v-on:click='changePage(2)'
              >
                <i class='material-icons icon mr-3'>group</i>
                <span class='text'>Mis proveedores</span>
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#'
                class='nav-link px-2 sideMenuToggler d-flex align-items-center'
                v-on:click='changePage(3)'
              >
                <i class='material-icons icon mr-3'>insert_chart</i>
                <span class='text'>Estadisticas</span>
              </a>
            </li>
            <li class='nav-item'>
              <a href='#' class='nav-link px-2 sideMenuToggler d-flex align-items-center'>
                <i class='material-icons icon mr-3'>post_add</i>
                <span class='text'>Ordenes de Compra</span>
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#'
                class='nav-link px-2 sideMenuToggler d-flex align-items-center'
                v-on:click='changePage(4)'
              >
                <i class='material-icons icon mr-3'>work</i>
                <span class='text'>Servicios</span>
              </a>
            </li>
            <li class='nav-item'>
              <a
                href='#'
                class='nav-link sideMenuToggler px-2 d-flex align-items-center'
                v-on:click='changePage(3)'
              >
                <i class='material-icons icon mr-3'>trending_up</i>
                <span class='text'>Mis Inversiones</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class='content'>
        <main>
          <div class='container-fluid'>
            <div class='row'>
              <organizator v-show='mostrarOrganizador'></organizator>
              <CategoryServices v-show='mostrarCatServicios'></CategoryServices>
              <AllCharts v-show='mostrarCharts'></AllCharts>
              <ServiceList v-show='mostrarServicios'></ServiceList>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceList from '../components/ServiceList'
import CategoryServices from '../components/CategoryServices'
import AllCharts from '../components/AllCharts'
export default {
  name: 'DashboardProviders',
  components: {
    ServiceList,
    CategoryServices,
    AllCharts,

  }
}
</script>
<style scoped>
.text-muted {
    color: white!important;
    font-size: 1.2em;
}
.bg-dark {
    background-color: #252B48!important;
}
.bg-mattBlackDark {
    background-color: #1C2038;
}
.nav-tabs{
    border-bottom: 1px solid #dee2e6!important;
    background-color: #252B48!important;
    box-shadow: 5px 5px 25px 0px #00000030!important;
}
.nav-tabs .nav-link.active {
    color: black!important;
    background-color: #ffff00;
    border-color: #dee2e6 #dee2e6 #fff;}
</style>
