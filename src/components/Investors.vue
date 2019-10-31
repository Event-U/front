<template>
  <div class="container-fluid">
    <div data-v-5e50a15b="" class="row" style="
    justify-content: space-around;
    display: flex;
"><div data-v-5e50a15b="" class="col-3 events-title"><h1 data-v-5e50a15b="">Eventos disponibles</h1></div></div>
    <div id="main-wrapper" class="list-services-content">
      <div class="row" >
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-4 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-4 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
      </div>
      <div class="row" >
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
        <div class="col-lg-3 col-md-12 align-center">
          <CategoryServiceCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryServiceCard from '../components/CategoryServiceCard'

export default {
  name: 'Investors',
  components: {
    CategoryServiceCard
  }
}
</script>

<style scoped>
h1 {
  color: black;
}
.events-title {
  place-content: center;
  background-color: #ffff00;
  border: 1px solid #ffff00;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 20px 12px 5px;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  display: flex;
}

.btn-yellow {
    padding: 5px 3px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    }

@media (max-width: 700px) {
     .btn-eventu {
    font-size: 15px;
    }
    h1{
        font-size:1.2em;
    }
}
</style>
