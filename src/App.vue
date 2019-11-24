<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import index from './views/index'

export default {
  name: 'App',
  components: {
    index
  }
}

// ({
//   el: '#app',
//   data:{
//     colorScheme:"dark"
//   }
// })
</script>

<style>
#app {
  font-family: 'Futura', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  /* margin-top: 60px; */
  background-color:#f0f0f0;
}

.bg-mattBlackLight {
  background-color: #303337;
}

.text-mattBlackLight {
  color: #303337;
}

.bg-mattBlackDark, .nav-link:hover, .nav-link.active, body {
  background-color: #212121;
}

.text-mattBlackDark {
  color: #212121;
}

.bg-mattGray {
  background-color: #878d8d;
}

.text-mattGray, .nav-link .text, .nav-link .icon, body {
  color: #878d8d;
}

.bg-mattRed {
  background-color: #FFFF00;
}

.text-mattRed, .nav-link:hover .icon,
.nav-link:hover .text, .nav-link.active .icon,
.nav-link.active .text {
  color: #FFFF00;
}

* {
  font-family: futura;
}

.wrapper {
  margin-top: 3.5rem;
}
.wrapper .sideMenu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 3.5rem auto auto;
  width: 12.5rem;
  transition: all ease 0.25s;
  transform: translateX(-100%);
  z-index: 2000;
}
.wrapper .content {
  width: 100%;
  margin-left: 0rem;
  transition: all ease 0.25s;
}
.wrapper.active .sideMenu {
  transform: translateX(0);
}

@media (min-width: 992px) {
  .wrapper .sideMenu {
    transform: translateX(0);
  }
  .wrapper .content {
    margin-left: 12.5rem;
  }
  .wrapper.active .sideMenu {
    width: 5rem;
  }
  .wrapper.active .sideMenu .nav-link {
    text-align: center;
  }
  .wrapper.active .sideMenu .nav-link .icon {
    margin-right: 0;
  }
  .wrapper.active .sideMenu .nav-link .text {
    display: none;
  }
  .wrapper.active .content {
    margin-left: 5rem;
  }
}
.nav-link {
  display: block;
  white-space: nowrap;
}
.nav-link .icon {
  margin-right: 0.25rem;
  font-size: 1.875rem;
  vertical-align: middle;
  height: 2rem;
  width: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.nav-link .text {
  font-size: 0.875rem;
}
.btn-transparent {
  background: transparent;
  border: 0;
}

.inputCuston {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-bottom: 1px solid white;
  border-radius: 0;
}

.inputCuston::placeholder {
  color: white;
}

.border-eventU {
  border-color: #FFFF00 !important;
}

.inputCuston:active {
  border-color: #FFFF00;
  box-shadow: 5px 10px #FFFF00;
}

.form-control:focus {
  border-color: #FFFF00;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 0, 0.25);
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #FFFF00 !important;
  background-color: #FFFF00 !important;
}

.btn-eventU {
  background: #FFFF00;
}

/* * {
    font-family: futura;
} */
.cat-servicios .card {
  border-radius: 50px 12px 5px !important;
  border: none;
  margin-bottom: 20px;
}

.cat-servicios .card-body {
  padding: 25px !important;
}

.content {
  background-color: #1C2038 !important;
  padding-top: 2%;
}

.card-img-overlay {
  font-family: Futura;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-radius: 50px 12px 5px;
}

.card-img-overlay h5 {
  font-size: 2em;
  font-weight: 100;
  position: absolute;
  bottom: 0;
}

.cat-servicios img {
  border-radius: 50px 12px 5px !important;
  box-shadow: 0px 4px 7px 2px #0000004a;
}

#main .card-img-overlay h5 {
  font-size: 5em;
}

.cat-servicios .card:hover {
  border: solid #ffff00 3px;
  box-shadow: 0px 0px 25px #0000009e;
  transition: ease-in 0.2s;
}

.sideMenu {
  background-color: #252B48;
}

.list-services-content .card {
  border-radius: 50px 12px 5px !important;
  border: none;
  margin-bottom: 20px;
}

.list-services-content .card-text {
  color: #333333;
  font-weight: normal !important;
  font-size: 0.8em;
}

.list-services-content .card:hover {
  border: solid #ffff00 3px;
  box-shadow: 0px 0px 25px #0000009e;
  transition: ease-in 0.2s;
}

.list-services {
  font-size: 2em;
  color: black;
}

.btn-evntu {
  background-color: #ffff00 !important;
  color: #000000;
  font-size: 1em;
  border-radius: 12px;
  border: none;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  padding: 9px 25%;
}

.btn-evntu:hover {
  border: solid 2px;
  border-color: black !important;
  background-color: #ffff00 !important;
  color: #000000;
  transition: 0.4 ease;
}

.service-price-container {
  display: flex;
  justify-content: center;
}

.service-price {
  margin-right: 0.4em;
}

.list-services-content img {
  border-radius: 50px 12px 5px !important;
  box-shadow: 0px 4px 7px 2px #0000004a;
}

.form-card {
  background-color: #252B48;
  color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 20px #171B3A;
  max-width: 90%;
}

.form-card label {
  color: #fff000;
}

.form-card:hover {
  border-radius: 20px;
  box-shadow: 0px 0px 25px #0000009e;
  border: none;
  transition: ease-in 0.2s;
}

.form-card h5 {
  color: #EFF3F9;
  font-size: 2.5em;
}

</style>
