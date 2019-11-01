<template>

<div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

        <button class="navbar-toggler sideMenuToggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="../assets/img/Frame.png" alt="" srcset="" style="width: 50%;"></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <button type="button" class="btn-transparent"><i class="material-icons text-mattRed">account_circle</i></button>
                    <button type="button" class="btn-transparent"><i class="material-icons icon text-mattRed">settings</i></button>
                </li>
            </ul>
        </div>
    </nav>
    <div class="wrapper d-flex">
        <div class="sideMenu bg-mattBlackLight">
            <div class="sidebar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 sideMenuToggler">
                            <i class="material-icons icon">
                            dashboard
                        </i><span class="text">Mis Eventos</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 sideMenuToggler">
                            <i class="material-icons icon">group</i>
                            <span class="text">Mis proveedores</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 sideMenuToggler">
                            <i class="material-icons icon">insert_chart</i>
                            <span class="text">Estadisticas</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 sideMenuToggler">
                            <i class="material-icons icon">post_add</i>
                            <span class="text">Ordenes de Compra</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 sideMenuToggler">
                            <i class="material-icons icon">work</i>
                            <span class="text">Servicios</span></a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link sideMenuToggler px-2">
                            <i class="material-icons icon">trending_up</i>
                            <span class="text">Mis Inversiones</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <main>
                <div class="container-fluid">

                    <div class="row">
                        <CategoryServices/>
                    </div>
                </div>
            </main>
        </div>
    </div>
</div>

</template>

<script>
import CategoryServices from '../components/CategoryServices'
export default {
  name: 'DashboardServices',
  components: {
    CategoryServices
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
