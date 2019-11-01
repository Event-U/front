<template>
  <div id="main" class="card text-center">
        <img src="../assets/img/anthony-reungere-6bObR3bngCA-unsplash.jpg" class="card-img-top" alt="Placeholder">
        <div class="card-body">
            <span class="star-rate fa fa-star checked"></span>
            <span class="star-rate fa fa-star checked"></span>
            <span class="star-rate fa fa-star checked"></span>
            <span class="star-rate fa fa-star"></span>
            <span class="star-rate fa fa-star"></span>
            <h5 class="card-title list-services border-0">{{ ServiceTitle }}</h5>
            <p class="card-text">{{ServiceDescription }}</p>
            <a href="#" class="btn btn-primary btn-evntu" v-show="!ServiceIsEvent">Generar órden de compra</a>
            <div class="service-price-container">
                <h3 class="service-price" v-show="!ServiceIsEvent">$20mxn</h3>
                <h4 class="service-measurement" v-show="!ServiceIsEvent"> p/hora</h4>
            </div>
        </div>
    </div>
</template>

<script>
const stringDefault = {
  type: String,
  required: true
}
export default {
  name: 'CategoryServiceCard',
  props: {
    ServiceTitle: stringDefault,
    ServiceDescription: stringDefault,
    ServiceImage: stringDefault,
    ServiceIsEvent: {
      type: Boolean,
      required: true
    }
  }

}

</script>

<style>
.list-services-content .card {
    border-radius: 50px 12px 5px!important;
    border: none;
    margin-bottom: 20px;
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

.btn-evntu {
    background-color: #ffff00!important;
    color: #000000;
    font-size: .9em;
    border-radius: 12px;
    border: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
    padding: 9px 20%;
}

.btn-evntu:hover {
    border: solid 2px;
    border-color: black!important;
    background-color: #ffff00!important;
    color: #000000;
    transition: .4 ease;
}

.service-price-container {
    display: flex;
    justify-content: center;
}

.service-price {
    margin-right: .4em;
}

.list-services-content img {
    border-radius: 50px 12px 5px!important;
    max-width: 100%!important;
}
.star-rate{
    margin-top:0px!important;
}
.checked {
  color: #ffff00;
}
</style>
